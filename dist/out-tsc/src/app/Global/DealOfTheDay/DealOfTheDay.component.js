var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var DealOfTheDayComponent = /** @class */ (function () {
    function DealOfTheDayComponent() {
        this.counterDateTime = new Date(new Date().setHours(20, 0, 0, 0));
    }
    DealOfTheDayComponent.prototype.ngOnInit = function () {
    };
    /**
     * getOfferImagePath is used to change the image path on click event.
     */
    DealOfTheDayComponent.prototype.getOfferImagePath = function (imgPath, index) {
        document.querySelector('.border-active').classList.remove('border-active');
        this.singleProduct.image = imgPath;
        document.getElementById(index + '_img').className += " border-active";
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DealOfTheDayComponent.prototype, "singleProduct", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DealOfTheDayComponent.prototype, "currency", void 0);
    DealOfTheDayComponent = __decorate([
        Component({
            selector: 'embryo-DealOfTheDay',
            templateUrl: './DealOfTheDay.component.html',
            styleUrls: ['./DealOfTheDay.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DealOfTheDayComponent);
    return DealOfTheDayComponent;
}());
export { DealOfTheDayComponent };
//# sourceMappingURL=DealOfTheDay.component.js.map