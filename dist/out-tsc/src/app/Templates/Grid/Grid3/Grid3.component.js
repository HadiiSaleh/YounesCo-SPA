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
var Grid3Component = /** @class */ (function () {
    function Grid3Component() {
    }
    Grid3Component.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], Grid3Component.prototype, "blogList", void 0);
    Grid3Component = __decorate([
        Component({
            selector: 'embryo-Grid3',
            templateUrl: './Grid3.component.html',
            styleUrls: ['./Grid3.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], Grid3Component);
    return Grid3Component;
}());
export { Grid3Component };
//# sourceMappingURL=Grid3.component.js.map