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
var AddToCardButtonComponent = /** @class */ (function () {
    function AddToCardButtonComponent() {
        this.addToCart = new EventEmitter();
    }
    AddToCardButtonComponent.prototype.ngOnInit = function () {
    };
    AddToCardButtonComponent.prototype.addToCartProduct = function (product) {
        this.addToCart.emit(product);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AddToCardButtonComponent.prototype, "product", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AddToCardButtonComponent.prototype, "addToCart", void 0);
    AddToCardButtonComponent = __decorate([
        Component({
            selector: 'embryo-AddToCardButton',
            templateUrl: './AddToCardButton.component.html',
            styleUrls: ['./AddToCardButton.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], AddToCardButtonComponent);
    return AddToCardButtonComponent;
}());
export { AddToCardButtonComponent };
//# sourceMappingURL=AddToCardButton.component.js.map