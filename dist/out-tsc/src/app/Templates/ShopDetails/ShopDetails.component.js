var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmbryoService } from '../../Services/Embryo.service';
var ShopDetailsComponent = /** @class */ (function () {
    function ShopDetailsComponent(route, router, embryoService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.embryoService = embryoService;
        this.colorsArray = ["Red", "Blue", "Yellow", "Green"];
        this.sizeArray = [36, 38, 40, 42, 44, 46, 48];
        this.quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.embryoService.getProductReviews().valueChanges().subscribe(function (res) { _this.productReviews = res; });
    }
    ShopDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainImgPath = this.detailData.image;
        this.totalPrice = this.detailData.price;
        this.route.params.subscribe(function (res) {
            _this.type = null;
            _this.type = res.type;
        });
    };
    ShopDetailsComponent.prototype.ngOnChanges = function () {
        this.mainImgPath = null;
        this.totalPrice = null;
        this.mainImgPath = this.detailData.image;
        this.totalPrice = this.detailData.price;
    };
    /**
     * getImagePath is used to change the image path on click event.
     */
    ShopDetailsComponent.prototype.getImagePath = function (imgPath, index) {
        document.querySelector('.border-active').classList.remove('border-active');
        this.mainImgPath = imgPath;
        document.getElementById(index + '_img').className += " border-active";
    };
    ShopDetailsComponent.prototype.calculatePrice = function (detailData, value) {
        detailData.quantity = value;
        this.totalPrice = detailData.price * value;
    };
    ShopDetailsComponent.prototype.reviewPopup = function (detailData) {
        var reviews = null;
        for (var _i = 0, _a = this.productReviews; _i < _a.length; _i++) {
            var review = _a[_i];
            reviews = review.user_rating;
        }
        this.embryoService.reviewPopup(detailData, reviews);
    };
    ShopDetailsComponent.prototype.addToWishlist = function (value) {
        this.embryoService.addToWishlist(value);
    };
    ShopDetailsComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    ShopDetailsComponent.prototype.buyNow = function (value) {
        this.embryoService.buyNow(value);
        this.router.navigate(['/checkout']);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ShopDetailsComponent.prototype, "detailData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ShopDetailsComponent.prototype, "currency", void 0);
    ShopDetailsComponent = __decorate([
        Component({
            selector: 'embryo-ShopDetails',
            templateUrl: './ShopDetails.component.html',
            styleUrls: ['./ShopDetails.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            EmbryoService])
    ], ShopDetailsComponent);
    return ShopDetailsComponent;
}());
export { ShopDetailsComponent };
//# sourceMappingURL=ShopDetails.component.js.map