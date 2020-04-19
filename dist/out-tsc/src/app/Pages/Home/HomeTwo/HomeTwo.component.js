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
var HomeTwoComponent = /** @class */ (function () {
    function HomeTwoComponent(embryoService) {
        this.embryoService = embryoService;
    }
    HomeTwoComponent.prototype.ngOnInit = function () {
        this.lighteningDeals();
        this.getProducts();
    };
    HomeTwoComponent.prototype.lighteningDeals = function () {
        var _this = this;
        this.embryoService.getProducts().valueChanges()
            .subscribe(function (res) { return _this.getLighteningDealsResponse(res); });
    };
    HomeTwoComponent.prototype.getLighteningDealsResponse = function (res) {
        var productsArray = [];
        this.lighteningDealsProducts = null;
        productsArray.push(this.last(res.men));
        productsArray.push(this.last(res.women));
        productsArray.push(this.last(res.gadgets));
        productsArray.push(this.last(res.accessories));
        this.lighteningDealsProducts = productsArray;
    };
    HomeTwoComponent.prototype.last = function (array) {
        return array[array.length - 1];
    };
    HomeTwoComponent.prototype.getProducts = function () {
        var _this = this;
        this.embryoService.getProducts().valueChanges()
            .subscribe(function (res) { return _this.getProductsResponse(res); });
    };
    HomeTwoComponent.prototype.getProductsResponse = function (res) {
        this.topProducts = null;
        var products = ((res.men.concat(res.women)).concat(res.gadgets)).concat(res.accessories);
        this.topProducts = products;
    };
    HomeTwoComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    HomeTwoComponent = __decorate([
        Component({
            selector: 'app-HomeTwo',
            templateUrl: './HomeTwo.component.html',
            styleUrls: ['./HomeTwo.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService])
    ], HomeTwoComponent);
    return HomeTwoComponent;
}());
export { HomeTwoComponent };
//# sourceMappingURL=HomeTwo.component.js.map