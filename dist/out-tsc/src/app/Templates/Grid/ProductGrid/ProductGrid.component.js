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
var ProductGridComponent = /** @class */ (function () {
    function ProductGridComponent() {
        this.gridThree = false;
        this.addToCart = new EventEmitter();
        this.addToWishList = new EventEmitter();
        this.loaded = false;
        this.lg = 25;
        this.xl = 25;
    }
    ProductGridComponent.prototype.trackByObjectID = function (index, hit) {
        return hit.objectID;
    };
    ProductGridComponent.prototype.ngOnInit = function () {
        if (this.gridThree) {
            this.lg = 33;
            this.xl = 33;
        }
    };
    ProductGridComponent.prototype.addToCartProduct = function (value) {
        this.addToCart.emit(value);
    };
    ProductGridComponent.prototype.onLoad = function () {
        this.loaded = true;
    };
    ProductGridComponent.prototype.productAddToWishlist = function (value, parentClass) {
        if (!(document.getElementById(parentClass).classList.contains('wishlist-active'))) {
            var element = document.getElementById(parentClass).className += " wishlist-active";
        }
        this.addToWishList.emit(value);
    };
    ProductGridComponent.prototype.checkCartAlready = function (singleProduct) {
        var products = JSON.parse(localStorage.getItem("cart_item")) || [];
        if (!products.some(function (item) { return item.name == singleProduct.name; })) {
            return true;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductGridComponent.prototype, "products", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ProductGridComponent.prototype, "currency", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductGridComponent.prototype, "gridLength", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ProductGridComponent.prototype, "gridThree", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ProductGridComponent.prototype, "addToCart", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ProductGridComponent.prototype, "addToWishList", void 0);
    ProductGridComponent = __decorate([
        Component({
            selector: 'embryo-ProductGrid',
            templateUrl: './ProductGrid.component.html',
            styleUrls: ['./ProductGrid.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ProductGridComponent);
    return ProductGridComponent;
}());
export { ProductGridComponent };
//# sourceMappingURL=ProductGrid.component.js.map