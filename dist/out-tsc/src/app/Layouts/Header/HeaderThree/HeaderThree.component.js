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
var HeaderThreeComponent = /** @class */ (function () {
    function HeaderThreeComponent(embryoService) {
        this.embryoService = embryoService;
    }
    HeaderThreeComponent.prototype.ngOnInit = function () {
    };
    HeaderThreeComponent.prototype.toggleSidebar = function () {
        this.embryoService.sidenavOpen = !this.embryoService.sidenavOpen;
    };
    HeaderThreeComponent.prototype.toggleSearch = function () {
        document.querySelector('app-main').classList.toggle('form-open');
    };
    HeaderThreeComponent.prototype.openConfirmationPopup = function (value) {
        var _this = this;
        var message = "Are you sure you want to delete this product?";
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'cart'); });
    };
    HeaderThreeComponent.prototype.getPopupResponse = function (response, value, type) {
        if (response) {
            if (type == 'cart') {
                this.embryoService.removeLocalCartProduct(value);
            }
            else {
                this.embryoService.removeLocalWishlistProduct(value);
            }
        }
    };
    HeaderThreeComponent.prototype.addAllWishlistToCart = function (values) {
        this.embryoService.addAllWishListToCart(values);
    };
    HeaderThreeComponent.prototype.openWishlistConfirmationPopup = function (value) {
        var _this = this;
        var message = "Are you sure you want to add all products?";
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'wishlist'); });
    };
    HeaderThreeComponent.prototype.selectedCurrency = function (value) {
        this.embryoService.currency = value;
    };
    HeaderThreeComponent.prototype.selectedLanguage = function (value) {
        this.embryoService.language = value;
    };
    HeaderThreeComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value, 'wishlist');
    };
    HeaderThreeComponent = __decorate([
        Component({
            selector: 'HeaderThree',
            templateUrl: './HeaderThree.component.html',
            styleUrls: ['./HeaderThree.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService])
    ], HeaderThreeComponent);
    return HeaderThreeComponent;
}());
export { HeaderThreeComponent };
//# sourceMappingURL=HeaderThree.component.js.map