var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { EmbryoService } from '../../../Services/Embryo.service';
var SideBarMenuComponent = /** @class */ (function () {
    function SideBarMenuComponent(router, embryoService, translate) {
        this.router = router;
        this.embryoService = embryoService;
        this.translate = translate;
        this.ariaExpanded = this.expanded;
        if (this.depth === undefined) {
            this.depth = 0;
        }
    }
    SideBarMenuComponent.prototype.ngOnInit = function () {
    };
    SideBarMenuComponent.prototype.onItemSelected = function (item) {
        if (!item.children || !item.children.length) {
            if (item.type == 'link') {
                this.router.navigate([item.state]);
            }
            else {
                this.router.navigate([item.state], { queryParams: { category: item.queryState } });
            }
            this.embryoService.sidenavOpen = false;
        }
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SideBarMenuComponent.prototype, "item", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SideBarMenuComponent.prototype, "depth", void 0);
    __decorate([
        HostBinding('attr.aria-expanded'),
        __metadata("design:type", Object)
    ], SideBarMenuComponent.prototype, "ariaExpanded", void 0);
    SideBarMenuComponent = __decorate([
        Component({
            selector: 'embryo-SidebarMenu',
            templateUrl: './SidebarMenu.component.html',
            styleUrls: ['./SidebarMenu.component.scss'],
            animations: [
                trigger('indicatorRotate', [
                    state('collapsed', style({ transform: 'rotate(0deg)' })),
                    state('expanded', style({ transform: 'rotate(180deg)' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [Router,
            EmbryoService,
            TranslateService])
    ], SideBarMenuComponent);
    return SideBarMenuComponent;
}());
export { SideBarMenuComponent };
//# sourceMappingURL=SidebarMenu.component.js.map