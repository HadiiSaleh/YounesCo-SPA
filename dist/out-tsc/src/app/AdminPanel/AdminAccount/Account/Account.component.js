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
import { AccountService } from '../../../Services/account.service';
import { ActivatedRoute } from '@angular/router';
var AccountComponent = /** @class */ (function () {
    function AccountComponent(accountService, route) {
        this.accountService = accountService;
        this.route = route;
    }
    AccountComponent.prototype.onActivate = function (componentReference) {
        var _this = this;
        componentReference.getCurrentUser(this.CurrentUser);
        //Below will subscribe to the sentCurrentUser emitter
        if (componentReference.sentCurrentUser != undefined)
            componentReference.sentCurrentUser.subscribe(function (data) {
                // Will receive the data from child here
                _this.CurrentUser = data;
            });
    };
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.CurrentUser = data['user'];
        });
        this.LoginStatus$ = this.accountService.isLoggedIn;
        this.UserRole$ = this.accountService.currentUserRole;
    };
    AccountComponent = __decorate([
        Component({
            selector: 'app-Account',
            templateUrl: './Account.component.html',
            styleUrls: ['./Account.component.scss']
        }),
        __metadata("design:paramtypes", [AccountService, ActivatedRoute])
    ], AccountComponent);
    return AccountComponent;
}());
export { AccountComponent };
//# sourceMappingURL=Account.component.js.map