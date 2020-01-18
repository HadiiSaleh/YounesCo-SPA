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
var HeaderOneComponent = /** @class */ (function () {
    function HeaderOneComponent(embryoService) {
        this.embryoService = embryoService;
        this.toggleActive = false;
    }
    HeaderOneComponent.prototype.ngOnInit = function () {
    };
    HeaderOneComponent.prototype.toggleSearch = function () {
        document.querySelector('app-main').classList.toggle('form-open');
    };
    HeaderOneComponent.prototype.toggleSidebar = function () {
        this.embryoService.sidenavOpen = !this.embryoService.sidenavOpen;
    };
    HeaderOneComponent.prototype.openConfirmationPopup = function (value) {
        var _this = this;
        var message = "Are you sure you want to delete this product?";
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'cart'); });
    };
    HeaderOneComponent.prototype.getPopupResponse = function (response, value, type) {
        if (response) {
            if (type == 'cart') {
                this.embryoService.removeLocalCartProduct(value);
            }
            else {
                this.embryoService.removeLocalWishlistProduct(value);
            }
        }
    };
    HeaderOneComponent.prototype.addAllWishlistToCart = function (values) {
        this.embryoService.addAllWishListToCart(values);
    };
    HeaderOneComponent.prototype.openWishlistConfirmationPopup = function (value) {
        var _this = this;
        var message = "Are you sure you want to add all products?";
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'wishlist'); });
    };
    HeaderOneComponent.prototype.selectedCurrency = function (value) {
        this.embryoService.currency = value;
    };
    HeaderOneComponent.prototype.selectedLanguage = function (value) {
        this.embryoService.language = value;
    };
    HeaderOneComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value, 'wishlist');
    };
    HeaderOneComponent = __decorate([
        Component({
            selector: 'HeaderOne',
            templateUrl: './HeaderOne.component.html',
            styleUrls: ['./HeaderOne.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService])
    ], HeaderOneComponent);
    return HeaderOneComponent;
}());
export { HeaderOneComponent };
//# sourceMappingURL=HeaderOne.component.js.map