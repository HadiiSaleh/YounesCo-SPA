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
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { MenuItems } from '../../../Core/menu/menu-items/menu-items';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuItems, router, translate) {
        this.menuItems = menuItems;
        this.router = router;
        this.translate = translate;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.onItemSelected = function (item) {
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
    };
    MenuComponent.prototype.redirectTo = function (subchildState) {
        this.router.navigate([subchildState.state], { queryParams: { category: subchildState.queryState } });
    };
    MenuComponent = __decorate([
        Component({
            selector: 'embryo-Menu',
            templateUrl: './Menu.component.html',
            styleUrls: ['./Menu.component.scss'],
            animations: [
                trigger('indicatorRotate', [
                    state('collapsed', style({ transform: 'rotate(0deg)' })),
                    state('expanded', style({ transform: 'rotate(180deg)' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [MenuItems, Router, TranslateService])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=Menu.component.js.map