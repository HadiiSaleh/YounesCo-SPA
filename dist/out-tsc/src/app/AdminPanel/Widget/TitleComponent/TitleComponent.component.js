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
import { TranslateService } from '@ngx-translate/core';
var TitleComponent = /** @class */ (function () {
    function TitleComponent(translate) {
        this.translate = translate;
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TitleComponent.prototype, "title", void 0);
    TitleComponent = __decorate([
        Component({
            selector: 'anglo-title-component',
            templateUrl: './TitleComponent.component.html',
            styleUrls: ['./TitleComponent.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService])
    ], TitleComponent);
    return TitleComponent;
}());
export { TitleComponent };
//# sourceMappingURL=TitleComponent.component.js.map