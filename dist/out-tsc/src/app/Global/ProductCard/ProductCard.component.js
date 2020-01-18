var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent() {
        this.type = '';
        this.addToCart = new EventEmitter();
        this.addToWishlist = new EventEmitter();
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    ProductCardComponent.prototype.addToCartProduct = function (value) {
        this.addToCart.emit(value);
    };
    ProductCardComponent.prototype.productAddToWishlist = function (value, parentClass) {
        if (!(document.getElementById(parentClass).classList.contains('wishlist-active'))) {
            var element = document.getElementById(parentClass).className += " wishlist-active";
        }
        this.addToWishlist.emit(value);
    };
    ProductCardComponent.prototype.checkCartAlready = function (singleProduct) {
        var products = JSON.parse(localStorage.getItem("cart_item")) || [];
        if (!products.some(function (item) { return item.id == singleProduct.id; })) {
            return true;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "index", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ProductCardComponent.prototype, "currency", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ProductCardComponent.prototype, "type", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ProductCardComponent.prototype, "addToCart", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ProductCardComponent.prototype, "addToWishlist", void 0);
    ProductCardComponent = __decorate([
        Component({
            selector: 'embryo-ProductCard',
            templateUrl: './ProductCard.component.html',
            styleUrls: ['./ProductCard.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ProductCardComponent);
    return ProductCardComponent;
}());
export { ProductCardComponent };
//# sourceMappingURL=ProductCard.component.js.map