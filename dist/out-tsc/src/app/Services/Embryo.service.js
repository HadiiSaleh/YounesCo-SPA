var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AngularFireDatabase } from "@angular/fire/database";
import { ToastaService, ToastaConfig } from 'ngx-toasta';
import 'rxjs/Rx';
import { ReviewPopupComponent } from '../Global/ReviewPopup/ReviewPopup.component';
import { ConfirmationPopupComponent } from '../Global/ConfirmationPopup/ConfirmationPopup.component';
import { OkPopupComponent } from '../Global/ok-popup/ok-popup.component';
var EmbryoService = /** @class */ (function () {
    function EmbryoService(http, dialog, db, toastyService, toastyConfig) {
        var _this = this;
        this.http = http;
        this.dialog = dialog;
        this.db = db;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.sidenavOpen = false;
        this.paymentSidenavOpen = false;
        this.isDirectionRtl = false;
        this.featuredProductsSelectedTab = 0;
        this.newArrivalSelectedTab = 0;
        /**** Get currency code:- https://en.wikipedia.org/wiki/ISO_4217 *****/
        this.currency = 'USD';
        this.language = 'en';
        this.shipping = 12.95;
        this.tax = 27.95;
        this.navbarCartCount = 0;
        this.navbarWishlistProdCount = 0;
        this.toastyConfig.position = "top-right";
        this.toastyConfig.theme = "material";
        this.calculateLocalWishlistProdCounts();
        localStorage.removeItem("user");
        localStorage.removeItem("byProductDetails");
        this.db.object("products").valueChanges().subscribe(function (res) { _this.setCartItemDefaultValue(res['gadgets'][1]); });
    }
    EmbryoService.prototype.setCartItemDefaultValue = function (setCartItemDefaultValue) {
        var products;
        products = JSON.parse(localStorage.getItem("cart_item")) || [];
        var found = products.some(function (el, index) {
            if (el.name == setCartItemDefaultValue.name) {
                return true;
            }
        });
        if (!found) {
            products.push(setCartItemDefaultValue);
        }
        localStorage.setItem("cart_item", JSON.stringify(products));
        this.calculateLocalCartProdCounts();
    };
    EmbryoService.prototype.reviewPopup = function (singleProductDetails, reviews) {
        var review;
        var dialogConfig = new MatDialogConfig();
        if (this.isDirectionRtl) {
            dialogConfig.direction = 'rtl';
        }
        else {
            dialogConfig.direction = 'ltr';
        }
        review = this.dialog.open(ReviewPopupComponent, dialogConfig);
        review.componentInstance.singleProductDetails = singleProductDetails;
        review.componentInstance.reviews = reviews;
        return review.afterClosed();
    };
    EmbryoService.prototype.confirmationPopup = function (message) {
        var confirmationPopup;
        confirmationPopup = this.dialog.open(ConfirmationPopupComponent);
        confirmationPopup.componentInstance.message = message;
        return confirmationPopup.afterClosed();
    };
    EmbryoService.prototype.getProducts = function () {
        this.products = this.db.object("products");
        return this.products;
    };
    /*
       ----------  Cart Product Function  ----------
    */
    // Adding new Product to cart in localStorage
    EmbryoService.prototype.addToCart = function (data, type) {
        var _this = this;
        if (type === void 0) { type = ""; }
        var products;
        products = JSON.parse(localStorage.getItem("cart_item")) || [];
        var productsLength = products.length;
        var toastOption = {
            title: "Adding Product To Cart",
            msg: "Product adding to the cart",
            showClose: true,
            timeout: 1000,
            theme: "material"
        };
        var found = products.some(function (el, index) {
            if (el.name == data.name) {
                if (!data.quantity) {
                    data.quantity = 1;
                }
                products[index]['quantity'] = data.quantity;
                return true;
            }
        });
        if (!found) {
            products.push(data);
        }
        if (productsLength == products.length) {
            toastOption.title = "Product Already Added";
            toastOption.msg = "You have already added this product to cart list";
        }
        if (type == 'wishlist') {
            this.removeLocalWishlistProduct(data);
        }
        this.toastyService.wait(toastOption);
        setTimeout(function () {
            localStorage.setItem("cart_item", JSON.stringify(products));
            _this.calculateLocalCartProdCounts();
        }, 500);
    };
    EmbryoService.prototype.buyNow = function (data) {
        var products;
        products = JSON.parse(localStorage.getItem("cart_item")) || [];
        var found = products.some(function (el, index) {
            if (el.name == data.name) {
                if (!data.quantity) {
                    data.quantity = 1;
                }
                products[index]['quantity'] = data.quantity;
                return true;
            }
        });
        if (!found) {
            products.push(data);
        }
        localStorage.setItem("cart_item", JSON.stringify(products));
        this.calculateLocalCartProdCounts();
    };
    EmbryoService.prototype.updateAllLocalCartProduct = function (products) {
        localStorage.removeItem('cart_item');
        localStorage.setItem("cart_item", JSON.stringify(products));
    };
    // returning LocalCarts Product Count
    EmbryoService.prototype.calculateLocalCartProdCounts = function () {
        this.localStorageCartProducts = null;
        this.localStorageCartProducts = JSON.parse(localStorage.getItem("cart_item")) || [];
        this.navbarCartCount = +((this.localStorageCartProducts).length);
    };
    // Removing cart from local
    EmbryoService.prototype.removeLocalCartProduct = function (product) {
        var _this = this;
        var products = JSON.parse(localStorage.getItem("cart_item"));
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === product.id) {
                products.splice(i, 1);
                break;
            }
        }
        var toastOption = {
            title: "Remove Product From Cart",
            msg: "Product removing from cart",
            showClose: true,
            timeout: 1000,
            theme: "material"
        };
        this.toastyService.wait(toastOption);
        setTimeout(function () {
            // ReAdding the products after remove
            localStorage.setItem("cart_item", JSON.stringify(products));
            _this.calculateLocalCartProdCounts();
        }, 500);
    };
    /*
       ----------  Wishlist Product Function  ----------
    */
    // Adding new Product to Wishlist in localStorage
    EmbryoService.prototype.addToWishlist = function (data) {
        var _this = this;
        var toastOption = {
            title: "Adding Product To Wishlist",
            msg: "Product adding to the wishlist",
            showClose: true,
            timeout: 1000,
            theme: "material"
        };
        var products;
        products = JSON.parse(localStorage.getItem("wishlist_item")) || [];
        var productsLength = products.length;
        var found = products.some(function (el, index) {
            if (el.name == data.name) {
                if (!data.quantity) {
                    data.quantity = 1;
                }
                products[index]['quantity'] = data.quantity;
                return true;
            }
        });
        if (!found) {
            products.push(data);
        }
        if (productsLength == products.length) {
            toastOption.title = "Product Already Added";
            toastOption.msg = "You have already added this product to wishlist";
        }
        this.toastyService.wait(toastOption);
        setTimeout(function () {
            localStorage.setItem("wishlist_item", JSON.stringify(products));
            _this.calculateLocalWishlistProdCounts();
        }, 500);
    };
    // returning LocalWishlist Product Count
    EmbryoService.prototype.calculateLocalWishlistProdCounts = function () {
        this.localStorageWishlist = null;
        this.localStorageWishlist = JSON.parse(localStorage.getItem("wishlist_item")) || [];
        this.navbarWishlistProdCount = +((this.localStorageWishlist).length);
    };
    // Removing Wishlist from local
    EmbryoService.prototype.removeLocalWishlistProduct = function (product) {
        var _this = this;
        var products = JSON.parse(localStorage.getItem("wishlist_item"));
        for (var i = 0; i < products.length; i++) {
            if (products[i].productId === product.productId) {
                products.splice(i, 1);
                break;
            }
        }
        var toastOption = {
            title: "Remove Product From Wishlist",
            msg: "Product removing from wishlist",
            showClose: true,
            timeout: 1000,
            theme: "material"
        };
        this.toastyService.wait(toastOption);
        setTimeout(function () {
            // ReAdding the products after remove
            localStorage.setItem("wishlist_item", JSON.stringify(products));
            _this.calculateLocalWishlistProdCounts();
        }, 500);
    };
    EmbryoService.prototype.addAllWishListToCart = function (dataArray) {
        var _this = this;
        var a;
        a = JSON.parse(localStorage.getItem("cart_item")) || [];
        for (var _i = 0, dataArray_1 = dataArray; _i < dataArray_1.length; _i++) {
            var singleData = dataArray_1[_i];
            a.push(singleData);
        }
        var toastOption = {
            title: "Adding All Product To Cart",
            msg: "Products adding to the cart",
            showClose: true,
            timeout: 1000,
            theme: "material"
        };
        this.toastyService.wait(toastOption);
        setTimeout(function () {
            localStorage.removeItem('wishlist_item');
            localStorage.setItem("cart_item", JSON.stringify(a));
            _this.calculateLocalCartProdCounts();
            _this.calculateLocalWishlistProdCounts();
        }, 500);
    };
    /**
     * getBlogList used to get the blog list.
     */
    EmbryoService.prototype.getBlogList = function () {
        var blogs;
        blogs = this.db.list("blogs");
        return blogs;
    };
    /**
     * getContactInfo used to get the contact infomation.
     */
    EmbryoService.prototype.getContactInfo = function () {
        var contact;
        contact = this.db.object("contact");
        return contact;
    };
    /**
     * getTermCondition used to get the term and condition.
     */
    EmbryoService.prototype.getTermCondition = function () {
        var termCondition;
        termCondition = this.db.list("term_condition");
        return termCondition;
    };
    /**
     * getPrivacyPolicy used to get the privacy policy.
     */
    EmbryoService.prototype.getPrivacyPolicy = function () {
        var privacyPolicy;
        privacyPolicy = this.db.list("privacy_policy");
        return privacyPolicy;
    };
    /**
     * getFaq used to get the faq.
     */
    EmbryoService.prototype.getFaq = function () {
        var faq;
        faq = this.db.object("faq");
        return faq;
    };
    /**
     * getProductReviews used to get the product review.
     */
    EmbryoService.prototype.getProductReviews = function () {
        var review;
        review = this.db.list("product_reviews");
        return review;
    };
    /**
     * Buy Product functions
     */
    EmbryoService.prototype.addBuyUserDetails = function (formdata) {
        localStorage.setItem("user", JSON.stringify(formdata));
        var product = JSON.parse(localStorage.getItem("cart_item"));
        localStorage.setItem("byProductDetails", JSON.stringify(product));
        this.buyUserCartProducts = JSON.parse(localStorage.getItem("byProductDetails"));
        localStorage.removeItem("cart_item");
        this.calculateLocalCartProdCounts();
    };
    EmbryoService.prototype.removeBuyProducts = function () {
        localStorage.removeItem("byProductDetails");
        this.buyUserCartProducts = JSON.parse(localStorage.getItem("byProductDetails"));
    };
    /**
     * getTeam used to get the team data.
     */
    EmbryoService.prototype.getTeam = function () {
        var team;
        team = this.db.list("team");
        return team;
    };
    /**
     * getTestimonial used to get the testimonial data.
     */
    EmbryoService.prototype.getTestimonial = function () {
        var testimonial;
        testimonial = this.db.object("testimonial");
        return testimonial;
    };
    /**
     * getMissionVision used to get the Mission and Vision data.
     */
    EmbryoService.prototype.getMissionVision = function () {
        var mission_vision;
        mission_vision = this.db.list("mission_vision");
        return mission_vision;
    };
    /**
     * getAboutInfo used to get the about info data.
     */
    EmbryoService.prototype.getAboutInfo = function () {
        var about_info;
        about_info = this.db.object("about_info");
        return about_info;
    };
    //Added Services
    EmbryoService.prototype.OkPopup = function (messages) {
        var okPopupComponent;
        okPopupComponent = this.dialog.open(OkPopupComponent);
        okPopupComponent.componentInstance.messages = messages;
        return okPopupComponent.afterClosed();
    };
    EmbryoService.prototype.loadingToasty = function () {
        var toastOption = {
            title: "Loading",
            msg: "Please Wait...",
            showClose: true,
            timeout: 100000000,
            theme: "material"
        };
        this.toastyService.wait(toastOption);
    };
    EmbryoService.prototype.closeToasty = function () {
        this.toastyService.clearAll();
    };
    EmbryoService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            MatDialog,
            AngularFireDatabase,
            ToastaService,
            ToastaConfig])
    ], EmbryoService);
    return EmbryoService;
}());
export { EmbryoService };
//# sourceMappingURL=Embryo.service.js.map