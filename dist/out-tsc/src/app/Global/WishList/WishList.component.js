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
var WishListComponent = /** @class */ (function () {
    function WishListComponent() {
        this.removeWishListData = new EventEmitter();
        this.addAllWishlistToCart = new EventEmitter();
        this.addToCart = new EventEmitter();
        this.hiddenBadge = true;
    }
    WishListComponent.prototype.ngOnInit = function () {
    };
    WishListComponent.prototype.ngOnChanges = function () {
        if (this.count && this.count != 0) {
            this.hiddenBadge = false;
        }
        else {
            this.hiddenBadge = true;
        }
    };
    WishListComponent.prototype.confirmationPopup = function (product) {
        this.removeWishListData.emit(product);
    };
    WishListComponent.prototype.addAllToCart = function () {
        this.addAllWishlistToCart.emit(this.wishListProducts);
    };
    WishListComponent.prototype.calculatePrice = function (product) {
        var total = null;
        total = product.price * product.quantity;
        return total;
    };
    WishListComponent.prototype.addToCartProduct = function (product) {
        this.addToCart.emit(product);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], WishListComponent.prototype, "wishListProducts", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], WishListComponent.prototype, "count", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], WishListComponent.prototype, "currency", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], WishListComponent.prototype, "removeWishListData", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], WishListComponent.prototype, "addAllWishlistToCart", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], WishListComponent.prototype, "addToCart", void 0);
    WishListComponent = __decorate([
        Component({
            selector: 'embryo-WishList',
            templateUrl: './WishList.component.html',
            styleUrls: ['./WishList.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], WishListComponent);
    return WishListComponent;
}());
export { WishListComponent };
//# sourceMappingURL=WishList.component.js.map