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
import { AdminMenuItems } from '../../Core/Menu/MenuItems/MenuItems';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
var MenuListItemsComponent = /** @class */ (function () {
    function MenuListItemsComponent(menuItems, router, activatedRoute, translate) {
        this.menuItems = menuItems;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
    }
    MenuListItemsComponent.prototype.ngOnInit = function () {
    };
    MenuListItemsComponent = __decorate([
        Component({
            selector: 'app-menu-list-items',
            templateUrl: './MenuListItems.component.html',
            styleUrls: ['./MenuListItems.component.scss']
        }),
        __metadata("design:paramtypes", [AdminMenuItems,
            Router,
            ActivatedRoute,
            TranslateService])
    ], MenuListItemsComponent);
    return MenuListItemsComponent;
}());
export { MenuListItemsComponent };
//# sourceMappingURL=MenuListItems.component.js.map