var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CurrencyDropDownComponent = /** @class */ (function () {
    function CurrencyDropDownComponent() {
        this.selectedCurrency = new EventEmitter();
        this.selectedValue = "USD";
        this.currencyArray = [
            {
                code: "INR",
                name: "Indian Rupee",
                image: "assets/images/india.png"
            },
            {
                code: "USD",
                name: "United States Doller",
                image: "assets/images/united-states.png"
            },
            {
                code: "AUD",
                name: "Australian Doller",
                image: "assets/images/australia.png"
            },
            {
                code: "GBP",
                name: "United Kingdom",
                image: "assets/images/united-kingdom.png"
            },
            {
                code: "ILR",
                name: "Israeli Shekel",
                image: "assets/images/israel.png"
            },
            {
                code: "EUR",
                name: "France",
                image: "assets/images/france.png"
            }
        ];
    }
    CurrencyDropDownComponent.prototype.ngOnInit = function () {
    };
    CurrencyDropDownComponent.prototype.selectionChange = function (data) {
        if (data && data.value) {
            this.selectedCurrency.emit(data.value);
        }
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CurrencyDropDownComponent.prototype, "selectedCurrency", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CurrencyDropDownComponent.prototype, "selectedValue", void 0);
    CurrencyDropDownComponent = __decorate([
        Component({
            selector: 'embryo-CurrencyDropDown',
            templateUrl: './CurrencyDropDown.component.html',
            styleUrls: ['./CurrencyDropDown.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CurrencyDropDownComponent);
    return CurrencyDropDownComponent;
}());
export { CurrencyDropDownComponent };
//# sourceMappingURL=CurrencyDropDown.component.js.map