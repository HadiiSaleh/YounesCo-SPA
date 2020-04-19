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
import { EmbryoService } from '../../../Services/Embryo.service';
var HomeThreeComponent = /** @class */ (function () {
    function HomeThreeComponent(embryoService) {
        this.embryoService = embryoService;
        this.categories = {
            clothing: [],
            shoes: [],
            accessories: [],
            gadgets: []
        };
        this.slideConfig = {
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
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
        this.rtlSlideConfig = {
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            rtl: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2
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
    }
    HomeThreeComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    HomeThreeComponent.prototype.getProducts = function () {
        var _this = this;
        this.embryoService.getProducts().valueChanges()
            .subscribe(function (res) { return _this.getProductsResponse(res); });
    };
    HomeThreeComponent.prototype.getProductsResponse = function (res) {
        this.products = res;
        this.allProducts = ((res.men.concat(res.women)).concat(res.gadgets)).concat(res.accessories);
        for (var _i = 0, _a = this.allProducts; _i < _a.length; _i++) {
            var product = _a[_i];
            switch (product.category_type) {
                case "clothing":
                    this.categories.clothing.push(product);
                    break;
                case "shoes":
                    this.categories.shoes.push(product);
                    break;
                case "accessories":
                    this.categories.accessories.push(product);
                    break;
                case "gadgets":
                    this.categories.gadgets.push(product);
                    break;
                default:
                    // code...
                    break;
            }
        }
    };
    HomeThreeComponent.prototype.onNewArrivalsSelectedTab = function (tabIndex) {
        this.newProductsSliderData = null;
        switch (tabIndex) {
            case 0:
                this.newProductsSliderData = this.allProducts;
                break;
            case 1:
                this.newProductsSliderData = this.products.men;
                break;
            case 2:
                this.newProductsSliderData = this.products.women;
                break;
            case 3:
                this.newProductsSliderData = this.products.gadgets;
                break;
            default:
                // code...
                break;
        }
        return true;
    };
    HomeThreeComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    HomeThreeComponent.prototype.addToWishlist = function (value) {
        this.embryoService.addToWishlist(value);
    };
    HomeThreeComponent = __decorate([
        Component({
            selector: 'app-HomeThree',
            templateUrl: './HomeThree.component.html',
            styleUrls: ['./HomeThree.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService])
    ], HomeThreeComponent);
    return HomeThreeComponent;
}());
export { HomeThreeComponent };
//# sourceMappingURL=HomeThree.component.js.map