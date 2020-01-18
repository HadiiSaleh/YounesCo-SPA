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
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ChangeDetectorRef } from '@angular/core';
import { EmbryoService } from '../../Services/Embryo.service';
var CartComponent = /** @class */ (function () {
    function CartComponent(embryoService, router, loadingBar, cdRef) {
        this.embryoService = embryoService;
        this.router = router;
        this.loadingBar = loadingBar;
        this.cdRef = cdRef;
        this.quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    CartComponent.prototype.removeProduct = function (value) {
        var _this = this;
        var message = "Are you sure you want to delete this product?";
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value); });
    };
    CartComponent.prototype.getPopupResponse = function (response, value) {
        if (response) {
            this.embryoService.removeLocalCartProduct(value);
        }
    };
    CartComponent.prototype.calculateProductSinglePrice = function (product, value) {
        var price = 0;
        product.quantity = value;
        price = product.price * value;
        return price;
    };
    CartComponent.prototype.calculateTotalPrice = function () {
        var subtotal = 0;
        if (this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                subtotal += (product.price * product.quantity);
            }
            return subtotal;
        }
        return subtotal;
    };
    CartComponent.prototype.getTotalPrice = function () {
        var total = 0;
        if (this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                total += (product.price * product.quantity);
            }
            total += (this.embryoService.shipping + this.embryoService.tax);
            return total;
        }
        return total;
    };
    CartComponent.prototype.updateLocalCartProduct = function () {
        this.embryoService.updateAllLocalCartProduct(this.embryoService.localStorageCartProducts);
        this.router.navigate(['/checkout']);
    };
    CartComponent.prototype.getQuantityValue = function (product) {
        if (product.quantity) {
            return product.quantity;
        }
        else {
            return 1;
        }
    };
    CartComponent = __decorate([
        Component({
            selector: 'embryo-Cart',
            templateUrl: './Cart.component.html',
            styleUrls: ['./Cart.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService,
            Router,
            LoadingBarService,
            ChangeDetectorRef])
    ], CartComponent);
    return CartComponent;
}());
export { CartComponent };
//# sourceMappingURL=Cart.component.js.map