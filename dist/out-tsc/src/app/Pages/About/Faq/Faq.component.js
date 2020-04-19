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
var FaqComponent = /** @class */ (function () {
    function FaqComponent(embryoService) {
        this.embryoService = embryoService;
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.embryoService.getFaq().valueChanges().subscribe(function (res) { _this.faqData = res; });
    };
    FaqComponent = __decorate([
        Component({
            selector: 'app-Faq',
            templateUrl: './Faq.component.html',
            styleUrls: ['./Faq.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService])
    ], FaqComponent);
    return FaqComponent;
}());
export { FaqComponent };
//# sourceMappingURL=Faq.component.js.map