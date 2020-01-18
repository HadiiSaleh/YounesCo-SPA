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
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(adminPanelService, formBuilder, route, router) {
        this.adminPanelService = adminPanelService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.colorsArray = ["Red", "Blue", "Yellow", "Green"];
        this.sizeArray = [36, 38, 40, 42, 44, 46, 48];
        this.quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.adminPanelService.editProductData) {
            this.editProductDetail = this.adminPanelService.editProductData;
            setTimeout(function () {
                _this.mainImgPath = _this.editProductDetail.image;
            }, 0);
        }
        this.route.params.subscribe(function (res) {
            _this.productId = res.id;
            _this.productType = res.type;
            _this.getEditProductDetail();
        });
        this.form = this.formBuilder.group({
            name: [],
            price: [],
            availablity: [],
            product_code: [],
            description: [],
            tags: [],
            features: []
        });
        this.getProductData();
    };
    /**
    * getImagePath is used to change the image path on click event.
    */
    EditProductComponent.prototype.getImagePath = function (imgPath, index) {
        document.querySelector('.border-active').classList.remove('border-active');
        this.mainImgPath = imgPath;
        document.getElementById(index + '_img').className += " border-active";
    };
    //getEditProductDetail method is used to get the edit product.
    EditProductComponent.prototype.getEditProductDetail = function () {
        var _this = this;
        this.productId = (this.productId) ? this.productId : 1;
        this.productId = (this.productId) ? this.productId : 'Business';
        this.adminPanelService.getProducts().valueChanges().
            subscribe(function (res) { _this.getProductEditResponse(res); });
    };
    //getProductEditResponse method is used to according to the response edit poroduct data show.
    EditProductComponent.prototype.getProductEditResponse = function (response) {
        var products = ((response.men.concat(response.women)).concat(response.gadgets)).concat(response.accessories);
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var data = products_1[_i];
            if (data.id == this.productId && data.type == this.productType) {
                this.editProductDetail = data;
                this.mainImgPath = this.editProductDetail.image;
                this.getProductData();
                break;
            }
        }
    };
    //getProductData method is used to get the product data.
    EditProductComponent.prototype.getProductData = function () {
        if (this.editProductDetail) {
            this.form.patchValue({
                name: this.editProductDetail.name,
                price: this.editProductDetail.price,
                availablity: this.editProductDetail.availablity,
                product_code: this.editProductDetail.product_code,
                description: this.editProductDetail.description,
                tags: this.editProductDetail.tags,
                features: this.editProductDetail.features
            });
        }
    };
    EditProductComponent = __decorate([
        Component({
            selector: 'app-edit-product',
            templateUrl: './EditProduct.component.html',
            styleUrls: ['./EditProduct.component.scss']
        }),
        __metadata("design:paramtypes", [AdminPanelServiceService,
            FormBuilder,
            ActivatedRoute,
            Router])
    ], EditProductComponent);
    return EditProductComponent;
}());
export { EditProductComponent };
//# sourceMappingURL=EditProduct.component.js.map