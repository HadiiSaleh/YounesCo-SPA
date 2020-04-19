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
import { EmbryoService } from '../../../Services/Embryo.service';
var HeaderTwoComponent = /** @class */ (function () {
    function HeaderTwoComponent(embryoService) {
        this.embryoService = embryoService;
    }
    HeaderTwoComponent.prototype.ngOnInit = function () {
    };
    HeaderTwoComponent.prototype.toggleSearch = function () {
        document.querySelector('app-main').classList.toggle('form-open');
    };
    HeaderTwoComponent.prototype.toggleSidebar = function () {
        this.embryoService.sidenavOpen = !this.embryoService.sidenavOpen;
    };
    HeaderTwoComponent.prototype.openConfirmationPopup = function (value) {
        var _this = this;
        var message = "Are you sure you want to delete this product?";
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'cart'); });
    };
    HeaderTwoComponent.prototype.getPopupResponse = function (response, value, type) {
        if (response) {
            if (type == 'cart') {
                this.embryoService.removeLocalCartProduct(value);
            }
            else {
                this.embryoService.removeLocalWishlistProduct(value);
            }
        }
    };
    HeaderTwoComponent.prototype.addAllWishlistToCart = function (values) {
        this.embryoService.addAllWishListToCart(values);
    };
    HeaderTwoComponent.prototype.openWishlistConfirmationPopup = function (value) {
        var _this = this;
        var message = "Are you sure you want to add all products?";
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'wishlist'); });
    };
    HeaderTwoComponent.prototype.selectedCurrency = function (value) {
        this.embryoService.currency = value;
    };
    HeaderTwoComponent.prototype.selectedLanguage = function (value) {
        this.embryoService.language = value;
    };
    HeaderTwoComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value, 'wishlist');
    };
    HeaderTwoComponent = __decorate([
        Component({
            selector: 'HeaderTwo',
            templateUrl: './HeaderTwo.component.html',
            styleUrls: ['./HeaderTwo.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService])
    ], HeaderTwoComponent);
    return HeaderTwoComponent;
}());
export { HeaderTwoComponent };
//# sourceMappingURL=HeaderTwo.component.js.map