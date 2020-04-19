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
import { LoadingBarService } from '@ngx-loading-bar/core';
import { EmbryoService } from '../../Services/Embryo.service';
var PaymentDetailSideBarComponent = /** @class */ (function () {
    function PaymentDetailSideBarComponent(embryoService, loadingBar) {
        this.embryoService = embryoService;
        this.loadingBar = loadingBar;
    }
    PaymentDetailSideBarComponent.prototype.ngOnInit = function () {
    };
    PaymentDetailSideBarComponent.prototype.calculateTotalPrice = function () {
        var subtotal = 0;
        if (this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                subtotal += (product.price * product.quantity);
            }
        }
        return subtotal;
    };
    PaymentDetailSideBarComponent.prototype.removeProduct = function (value) {
        var _this = this;
        var message = "Are you sure you want to delete this product?";
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value); });
    };
    PaymentDetailSideBarComponent.prototype.getPopupResponse = function (response, value) {
        if (response) {
            this.embryoService.removeLocalCartProduct(value);
            this.embryoService.paymentSidenavOpen = false;
        }
    };
    PaymentDetailSideBarComponent.prototype.calculateProductSinglePrice = function (product, value) {
        var price = 0;
        product.quantity = value;
        price = product.price * value;
        return price;
    };
    PaymentDetailSideBarComponent.prototype.getTotalPrice = function () {
        var total = 0;
        if (this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                total += (product.price * product.quantity);
            }
            total += (this.embryoService.shipping + this.embryoService.tax);
        }
        return total;
    };
    PaymentDetailSideBarComponent = __decorate([
        Component({
            selector: 'embryo-PaymentDetailSideBar',
            templateUrl: './PaymentDetailSideBar.component.html',
            styleUrls: ['./PaymentDetailSideBar.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService,
            LoadingBarService])
    ], PaymentDetailSideBarComponent);
    return PaymentDetailSideBarComponent;
}());
export { PaymentDetailSideBarComponent };
//# sourceMappingURL=PaymentDetailSideBar.component.js.map