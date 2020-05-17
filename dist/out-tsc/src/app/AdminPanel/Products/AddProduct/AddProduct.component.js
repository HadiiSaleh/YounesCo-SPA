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
import { FormBuilder } from '@angular/forms';
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.colorsArray = ["Red", "Blue", "Yellow", "Green"];
        this.sizeArray = [36, 38, 40, 42, 44, 46, 48];
        this.quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this["data"] = [
            {
                "image": "https://via.placeholder.com/625x800",
                "image_gallery": [
                    "https://via.placeholder.com/625x800",
                    "https://via.placeholder.com/625x800",
                    "https://via.placeholder.com/625x800",
                    "https://via.placeholder.com/625x800",
                    "https://via.placeholder.com/625x800"
                ]
            }
        ];
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.mainImgPath = this.data[0].image;
        this.form = this.formBuilder.group({
            name: [],
            price: [],
            availablity: [],
            product_code: [],
            description: [],
            tags: [],
            features: []
        });
    };
    /**
     * getImagePath is used to change the image path on click event.
     */
    AddProductComponent.prototype.getImagePath = function (imgPath, index) {
        document.querySelector('.border-active').classList.remove('border-active');
        this.mainImgPath = imgPath;
        document.getElementById(index + '_img').className += " border-active";
    };
    AddProductComponent = __decorate([
        Component({
            selector: 'app-add-product',
            templateUrl: './AddProduct.component.html',
            styleUrls: ['./AddProduct.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], AddProductComponent);
    return AddProductComponent;
}());
export { AddProductComponent };
//# sourceMappingURL=AddProduct.component.js.map