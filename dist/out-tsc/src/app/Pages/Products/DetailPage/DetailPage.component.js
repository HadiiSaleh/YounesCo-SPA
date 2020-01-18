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
import { Router, ActivatedRoute } from '@angular/router';
import { EmbryoService } from '../../../Services/Embryo.service';
var DetailPageComponent = /** @class */ (function () {
    function DetailPageComponent(route, router, embryoService) {
        this.route = route;
        this.router = router;
        this.embryoService = embryoService;
    }
    DetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.id = res.id;
            _this.type = res.type;
            _this.getData();
        });
    };
    DetailPageComponent.prototype.getData = function () {
        var _this = this;
        this.embryoService.getProducts().valueChanges().subscribe(function (res) { return _this.checkResponse(res); });
    };
    DetailPageComponent.prototype.checkResponse = function (response) {
        this.productsList = null;
        this.productsList = response[this.type];
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.id == this.id) {
                this.singleProductData = data;
                break;
            }
        }
    };
    DetailPageComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    DetailPageComponent.prototype.addToWishList = function (value) {
        this.embryoService.addToWishlist(value);
    };
    DetailPageComponent = __decorate([
        Component({
            selector: 'app-DetailPage',
            templateUrl: './DetailPage.component.html',
            styleUrls: ['./DetailPage.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            EmbryoService])
    ], DetailPageComponent);
    return DetailPageComponent;
}());
export { DetailPageComponent };
//# sourceMappingURL=DetailPage.component.js.map