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
import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { MenuToggleDirective } from './MenuToggle.directive';
var MenuToggleLinkDirective = /** @class */ (function () {
    function MenuToggleLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(MenuToggleLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    MenuToggleLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
        if (this.group) {
            var routeUrl = this.nav.getUrl();
            var currentUrl = routeUrl.split('/');
            if (currentUrl.indexOf(this.group) > 0) {
                this.toggle();
            }
        }
    };
    MenuToggleLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    MenuToggleLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MenuToggleLinkDirective.prototype, "group", void 0);
    __decorate([
        HostBinding('class.open'),
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MenuToggleLinkDirective.prototype, "open", null);
    MenuToggleLinkDirective = __decorate([
        Directive({
            selector: '[menuToggleLink]'
        }),
        __param(0, Inject(MenuToggleDirective)),
        __metadata("design:paramtypes", [MenuToggleDirective])
    ], MenuToggleLinkDirective);
    return MenuToggleLinkDirective;
}());
export { MenuToggleLinkDirective };
//# sourceMappingURL=MenuToggleLink.directive.js.map