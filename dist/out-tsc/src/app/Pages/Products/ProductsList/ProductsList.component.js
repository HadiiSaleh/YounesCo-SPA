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
var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(route, router, embryoService) {
        this.route = route;
        this.router = router;
        this.embryoService = embryoService;
        this.pips = true;
        this.tooltips = true;
        this.subscribers = {};
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.route.queryParams.forEach(function (queryParams) {
                _this.category = queryParams['category'];
                _this.type = null;
                _this.type = params['type'];
                _this.getPageTitle();
            });
        });
    };
    ProductsListComponent.prototype.getPageTitle = function () {
        this.pageTitle = null;
        this.subPageTitle = null;
        switch (this.type || this.category) {
            case undefined:
                this.pageTitle = "Fashion";
                this.subPageTitle = "Explore your favourite fashion style.";
                break;
            case "gadgets":
                this.pageTitle = "Gadgets";
                this.subPageTitle = "Check out our new gadgets.";
                break;
            case "accessories":
                this.pageTitle = "Accessories";
                this.subPageTitle = "Choose the wide range of best accessories.";
                break;
            default:
                this.pageTitle = "Products";
                this.subPageTitle = null;
                break;
        }
    };
    ProductsListComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    ProductsListComponent.prototype.addToWishList = function (value) {
        this.embryoService.addToWishlist(value);
    };
    ProductsListComponent.prototype.transformHits = function (hits) {
        hits.forEach(function (hit) {
            hit.stars = [];
            for (var i = 1; i <= 5; i) {
                hit.stars.push(i <= hit.rating);
                i += 1;
            }
        });
        return hits;
    };
    ProductsListComponent = __decorate([
        Component({
            selector: 'app-ProductsList',
            templateUrl: './ProductsList.component.html',
            styleUrls: ['./ProductsList.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            EmbryoService])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
export { ProductsListComponent };
//# sourceMappingURL=ProductsList.component.js.map