var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(translate, router, adminPanelService) {
        this.translate = translate;
        this.router = router;
        this.adminPanelService = adminPanelService;
        this.showType = 'grid';
        this.displayedProductColumns = ['id', 'image', 'name', 'brand', 'category', 'product_code', 'discount_price', 'price', 'action'];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminPanelService.getProducts().valueChanges().subscribe(function (res) { return _this.getProductResponse(res); });
    };
    //getProductResponse method is used to get the response of all products.
    ProductsComponent.prototype.getProductResponse = function (response) {
        this.productsGrid = null;
        var products = ((response.men.concat(response.women)).concat(response.gadgets)).concat(response.accessories);
        this.productsGrid = products;
    };
    /**
      * productShowType method is used to select the show type of product.
      */
    ProductsComponent.prototype.productShowType = function (type) {
        var _this = this;
        this.showType = type;
        if (type == 'list') {
            document.getElementById('list').classList.add("active");
            document.getElementById('grid').classList.remove('active');
            this.productsList = new MatTableDataSource(this.productsGrid);
            setTimeout(function () {
                _this.productsList.paginator = _this.paginator;
                _this.productsList.sort = _this.sort;
            }, 0);
        }
        else {
            document.getElementById('grid').classList.add("active");
            document.getElementById('list').classList.remove('active');
        }
    };
    /**
      * onEditProduct method is used to open the edit page and edit the product.
      */
    ProductsComponent.prototype.onEditProduct = function (data) {
        this.router.navigate(['/admin-panel/product-edit', data.type, data.id]);
        this.adminPanelService.editProductData = data;
    };
    /*
     *deleteProduct method is used to open a delete dialog.
     */
    ProductsComponent.prototype.deleteProduct = function (i) {
        var _this = this;
        this.adminPanelService.deleteDialog("Are you sure you want to delete this product permanently?").
            subscribe(function (res) { _this.popUpDeleteUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getDeleteResponse(_this.popUpDeleteUserResponse, i); });
    };
    /**
      * getDeleteResponse method is used to delete a product from the product list.
      */
    ProductsComponent.prototype.getDeleteResponse = function (response, i) {
        if (response == "yes") {
            if (this.showType == 'grid') {
                this.productsGrid.splice(i, 1);
            }
            else if (this.showType == 'list') {
                this.productsList.data.splice(i, 1);
                this.productsList = new MatTableDataSource(this.productsList.data);
                this.productsList.paginator = this.paginator;
            }
        }
    };
    __decorate([
        ViewChild(MatPaginator, { static: false }),
        __metadata("design:type", MatPaginator)
    ], ProductsComponent.prototype, "paginator", void 0);
    __decorate([
        ViewChild(MatSort, { static: false }),
        __metadata("design:type", MatSort)
    ], ProductsComponent.prototype, "sort", void 0);
    ProductsComponent = __decorate([
        Component({
            selector: 'app-products',
            templateUrl: './Products.component.html',
            styleUrls: ['./Products.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            Router,
            AdminPanelServiceService])
    ], ProductsComponent);
    return ProductsComponent;
}());
export { ProductsComponent };
//# sourceMappingURL=Products.component.js.map