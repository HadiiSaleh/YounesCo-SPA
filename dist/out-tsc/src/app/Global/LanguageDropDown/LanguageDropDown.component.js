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
import { TranslateService } from '@ngx-translate/core';
var LanguageDropDownComponent = /** @class */ (function () {
    function LanguageDropDownComponent(translate) {
        this.translate = translate;
        this.selectedLanguage = new EventEmitter();
        this.currentLang = 'en';
        this.langArray = [
            {
                name: "English",
                value: "en"
            }, {
                name: "French",
                value: "fr"
            }
        ];
    }
    LanguageDropDownComponent.prototype.ngOnInit = function () {
    };
    LanguageDropDownComponent.prototype.selectionChange = function (data) {
        if (data && data.value) {
            this.selectedLanguage.emit(data.value);
            this.translate.use(data.value);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LanguageDropDownComponent.prototype, "selectedValue", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], LanguageDropDownComponent.prototype, "selectedLanguage", void 0);
    LanguageDropDownComponent = __decorate([
        Component({
            selector: 'embryo-LanguageDropDown',
            templateUrl: './LanguageDropDown.component.html',
            styleUrls: ['./LanguageDropDown.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService])
    ], LanguageDropDownComponent);
    return LanguageDropDownComponent;
}());
export { LanguageDropDownComponent };
//# sourceMappingURL=LanguageDropDown.component.js.map