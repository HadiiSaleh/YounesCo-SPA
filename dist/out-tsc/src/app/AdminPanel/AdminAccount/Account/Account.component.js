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
import { AccountService } from '../../../Services/account.service';
var AccountComponent = /** @class */ (function () {
    function AccountComponent(adminService, acct) {
        this.adminService = adminService;
        this.acct = acct;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LoginStatus$ = this.acct.isLoggedIn;
        this.UserName$ = this.acct.currentUserName;
        this.UserRole$ = this.acct.currentUserRole;
        this.acct.currentUserName.subscribe(function (result) { _this.CurrentUserName = result; });
        this.acct.currentUserRole.subscribe(function (result) { _this.CurrentRole = result; });
        this.acct.getAllUsersByRole(this.CurrentRole).subscribe(function (result) { console.log(result); });
        this.acct.getUserByUsername(this.CurrentUserName, this.CurrentRole).subscribe(function (result) { console.log(result); });
        console.log(this.CurrentUser.Email);
    };
    AccountComponent = __decorate([
        Component({
            selector: 'app-Account',
            templateUrl: './Account.component.html',
            styleUrls: ['./Account.component.scss']
        }),
        __metadata("design:paramtypes", [AdminPanelServiceService,
            AccountService])
    ], AccountComponent);
    return AccountComponent;
}());
export { AccountComponent };
//# sourceMappingURL=Account.component.js.map