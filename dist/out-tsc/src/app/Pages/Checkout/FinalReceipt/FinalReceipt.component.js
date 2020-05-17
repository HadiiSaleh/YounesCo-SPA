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
import { Router } from '@angular/router';
import { EmbryoService } from '../../../Services/Embryo.service';
var FinalReceiptComponent = /** @class */ (function () {
    function FinalReceiptComponent(embryoService, router) {
        this.embryoService = embryoService;
        this.router = router;
        this.todayDate = new Date();
        this.getDeliveryDate();
        this.userDetails = JSON.parse(localStorage.getItem("user"));
    }
    FinalReceiptComponent.prototype.ngOnInit = function () {
    };
    FinalReceiptComponent.prototype.getDeliveryDate = function () {
        this.deliveryDate = new Date();
        this.deliveryDate.setDate(this.deliveryDate.getDate() + 5);
    };
    FinalReceiptComponent.prototype.calculateProductSinglePrice = function (product, value) {
        var price = 0;
        if (!value) {
            value = 1;
        }
        price = product.price * value;
        return price;
    };
    FinalReceiptComponent.prototype.calculateTotalPrice = function () {
        var subtotal = 0;
        if (this.embryoService.buyUserCartProducts && this.embryoService.buyUserCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.buyUserCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                if (!product.quantity) {
                    product.quantity = 1;
                }
                subtotal += (product.price * product.quantity);
            }
            return subtotal;
        }
        return subtotal;
    };
    FinalReceiptComponent.prototype.getTotalPrice = function () {
        var total = 0;
        if (this.embryoService.buyUserCartProducts && this.embryoService.buyUserCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.buyUserCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                if (!product.quantity) {
                    product.quantity = 1;
                }
                total += (product.price * product.quantity);
            }
            total += (this.embryoService.shipping + this.embryoService.tax);
            return total;
        }
        return total;
    };
    FinalReceiptComponent.prototype.goToHome = function () {
        this.embryoService.removeBuyProducts();
        this.router.navigate(['/']);
    };
    FinalReceiptComponent = __decorate([
        Component({
            selector: 'app-FinalReceipt',
            templateUrl: './FinalReceipt.component.html',
            styleUrls: ['./FinalReceipt.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService, Router])
    ], FinalReceiptComponent);
    return FinalReceiptComponent;
}());
export { FinalReceiptComponent };
//# sourceMappingURL=FinalReceipt.component.js.map