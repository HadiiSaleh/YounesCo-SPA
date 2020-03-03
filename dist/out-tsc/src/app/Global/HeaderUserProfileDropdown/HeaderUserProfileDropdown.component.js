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
import { AccountService } from 'src/app/Services/account.service';
import { Router } from '@angular/router';
var HeaderUserProfileDropdownComponent = /** @class */ (function () {
    function HeaderUserProfileDropdownComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    HeaderUserProfileDropdownComponent.prototype.ngOnInit = function () {
    };
    //log out method 
    HeaderUserProfileDropdownComponent.prototype.logOut = function () {
        this.accountService.logout();
        this.router.navigate(['/session/signin']);
    };
    HeaderUserProfileDropdownComponent = __decorate([
        Component({
            selector: 'embryo-HeaderUserProfileDropdown',
            templateUrl: './HeaderUserProfileDropdown.component.html',
            styleUrls: ['./HeaderUserProfileDropdown.component.scss']
        }),
        __metadata("design:paramtypes", [AccountService, Router])
    ], HeaderUserProfileDropdownComponent);
    return HeaderUserProfileDropdownComponent;
}());
export { HeaderUserProfileDropdownComponent };
//# sourceMappingURL=HeaderUserProfileDropdown.component.js.map