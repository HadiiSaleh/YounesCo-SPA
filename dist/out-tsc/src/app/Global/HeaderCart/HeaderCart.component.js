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
var HeaderCartComponent = /** @class */ (function () {
    function HeaderCartComponent() {
        this.mobScreenSize = 767;
        this.removeProductData = new EventEmitter();
        this.hiddenBadge = true;
        this.mobWidth = window.screen.width;
    }
    HeaderCartComponent.prototype.ngOnInit = function () {
    };
    HeaderCartComponent.prototype.ngOnChanges = function () {
        if (this.count && this.count != 0) {
            this.hiddenBadge = false;
        }
        else {
            this.hiddenBadge = true;
        }
    };
    HeaderCartComponent.prototype.confirmationPopup = function (product) {
        this.removeProductData.emit(product);
    };
    HeaderCartComponent.prototype.calculatePrice = function (product) {
        var total = null;
        total = product.price * product.quantity;
        return total;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], HeaderCartComponent.prototype, "cartProducts", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], HeaderCartComponent.prototype, "count", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], HeaderCartComponent.prototype, "currency", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], HeaderCartComponent.prototype, "removeProductData", void 0);
    HeaderCartComponent = __decorate([
        Component({
            selector: 'embryo-HeaderCart',
            templateUrl: './HeaderCart.component.html',
            styleUrls: ['./HeaderCart.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], HeaderCartComponent);
    return HeaderCartComponent;
}());
export { HeaderCartComponent };
//# sourceMappingURL=HeaderCart.component.js.map