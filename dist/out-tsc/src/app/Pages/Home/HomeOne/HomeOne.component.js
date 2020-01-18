var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { EmbryoService } from '../../../Services/Embryo.service';
var HomeoneComponent = /** @class */ (function () {
    function HomeoneComponent(embryoService, cdRef) {
        this.embryoService = embryoService;
        this.cdRef = cdRef;
        this.slideConfig = {
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        this.rtlSlideConfig = {
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            rtl: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        this.getFeaturedProducts();
        this.getBlogList();
        this.getProductRevies();
        this.embryoService.featuredProductsSelectedTab = 0;
        this.embryoService.newArrivalSelectedTab = 0;
    }
    HomeoneComponent.prototype.ngOnInit = function () {
    };
    HomeoneComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    HomeoneComponent.prototype.getFeaturedProducts = function () {
        var _this = this;
        this.embryoService.getProducts().valueChanges().subscribe(function (res) { _this.productsArray = res; });
    };
    HomeoneComponent.prototype.getBlogList = function () {
        var _this = this;
        this.embryoService.getBlogList().valueChanges().subscribe(function (res) { _this.blogList = res; });
    };
    HomeoneComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    HomeoneComponent.prototype.getProductRevies = function () {
        var _this = this;
        this.embryoService.getProductReviews().valueChanges().subscribe(function (res) { _this.productReviews = res; });
    };
    HomeoneComponent.prototype.addToWishlist = function (value) {
        this.embryoService.addToWishlist(value);
    };
    HomeoneComponent.prototype.onFeaturedSelectedTab = function (tabIndex) {
        this.productsSliderData = null;
        switch (tabIndex) {
            case 0:
                this.productsSliderData = this.productsArray.men;
                break;
            case 1:
                this.productsSliderData = this.productsArray.women;
                break;
            case 2:
                this.productsSliderData = this.productsArray.gadgets;
                break;
            case 3:
                this.productsSliderData = this.productsArray.accessories;
                break;
            default:
                // code...
                break;
        }
        return true;
    };
    HomeoneComponent.prototype.onNewArrivalsSelectedTab = function (tabIndex) {
        this.newProductsSliderData = null;
        switch (tabIndex) {
            case 0:
                this.newProductsSliderData = this.productsArray.men;
                break;
            case 1:
                this.newProductsSliderData = this.productsArray.women;
                break;
            case 2:
                this.newProductsSliderData = this.productsArray.gadgets;
                break;
            case 3:
                this.newProductsSliderData = this.productsArray.accessories;
                break;
            default:
                // code...
                break;
        }
        return true;
    };
    HomeoneComponent = __decorate([
        Component({
            selector: 'app-homeone',
            templateUrl: './HomeOne.component.html',
            styleUrls: ['./HomeOne.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService,
            ChangeDetectorRef])
    ], HomeoneComponent);
    return HomeoneComponent;
}());
export { HomeoneComponent };
//# sourceMappingURL=HomeOne.component.js.map