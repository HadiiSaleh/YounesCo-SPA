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
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
var AdminHeaderComponent = /** @class */ (function () {
    function AdminHeaderComponent(coreService) {
        this.coreService = coreService;
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
    };
    AdminHeaderComponent.prototype.toggleSidebar = function () {
        this.coreService.sidenavOpen = !this.coreService.sidenavOpen;
    };
    AdminHeaderComponent = __decorate([
        Component({
            selector: 'app-header-component',
            templateUrl: './Header.component.html',
            styleUrls: ['./Header.component.scss']
        }),
        __metadata("design:paramtypes", [AdminPanelServiceService])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());
export { AdminHeaderComponent };
//# sourceMappingURL=Header.component.js.map