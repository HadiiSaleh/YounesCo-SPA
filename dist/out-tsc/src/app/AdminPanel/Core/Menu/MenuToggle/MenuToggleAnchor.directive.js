var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, HostListener, Inject } from '@angular/core';
import { MenuToggleLinkDirective } from './MenuToggleLink.directive';
var MenuToggleAnchorDirective = /** @class */ (function () {
    function MenuToggleAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    MenuToggleAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MenuToggleAnchorDirective.prototype, "onClick", null);
    MenuToggleAnchorDirective = __decorate([
        Directive({
            selector: '[menuToggle]'
        }),
        __param(0, Inject(MenuToggleLinkDirective)),
        __metadata("design:paramtypes", [MenuToggleLinkDirective])
    ], MenuToggleAnchorDirective);
    return MenuToggleAnchorDirective;
}());
export { MenuToggleAnchorDirective };
//# sourceMappingURL=MenuToggleAnchor.directive.js.map