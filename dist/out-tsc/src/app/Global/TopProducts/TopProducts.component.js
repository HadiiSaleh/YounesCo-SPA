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
var TopProductsComponent = /** @class */ (function () {
    function TopProductsComponent() {
        this.addToCart = new EventEmitter();
        this.gridLength = 4;
    }
    TopProductsComponent.prototype.ngOnInit = function () {
        if (this.products) {
            this.randomSortProducts = this.products.sort(function () { return Math.random() - 0.5; });
        }
    };
    TopProductsComponent.prototype.addToCartProduct = function (value) {
        value.status = 1;
        this.addToCart.emit(value);
    };
    TopProductsComponent.prototype.extendGridStructure = function (status) {
        if (status) {
            if (this.gridLength != 12) {
                this.gridLength += 4;
            }
        }
        else {
            if (this.gridLength != 4) {
                this.gridLength -= 4;
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TopProductsComponent.prototype, "products", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TopProductsComponent.prototype, "currency", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TopProductsComponent.prototype, "addToCart", void 0);
    TopProductsComponent = __decorate([
        Component({
            selector: 'embryo-TopProducts',
            templateUrl: './TopProducts.component.html',
            styleUrls: ['./TopProducts.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], TopProductsComponent);
    return TopProductsComponent;
}());
export { TopProductsComponent };
//# sourceMappingURL=TopProducts.component.js.map