var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive } from '@angular/core';
import { Router } from '@angular/router';
var MenuToggleDirective = /** @class */ (function () {
    function MenuToggleDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    MenuToggleDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    MenuToggleDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    MenuToggleDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    MenuToggleDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    MenuToggleDirective = __decorate([
        Directive({
            selector: '[menuToggleDirective]',
        }),
        __metadata("design:paramtypes", [Router])
    ], MenuToggleDirective);
    return MenuToggleDirective;
}());
export { MenuToggleDirective };
//# sourceMappingURL=MenuToggle.directive.js.map