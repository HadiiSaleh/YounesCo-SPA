var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from '../Services/account.service';
import { ToastaService } from 'ngx-toasta';
var CurrentUserResover = /** @class */ (function () {
    function CurrentUserResover(accountService, toastyService, router) {
        this.accountService = accountService;
        this.toastyService = toastyService;
        this.router = router;
        this.toastOption = {
            title: "Account Information",
            msg: "Problem retriving data!",
            showClose: true,
            timeout: 3000,
            theme: "material"
        };
        this.returnUrl = '/admin-panel';
    }
    CurrentUserResover.prototype.resolve = function (route) {
        var _this = this;
        this.accountService.currentUserName.subscribe(function (result) {
            _this.curentUsername = result;
        });
        return this.accountService.getUserByUserName(this.curentUsername)
            .pipe(catchError(function (error) {
            _this.router.navigate([_this.returnUrl]).then(function () {
                _this.toastyService.error(_this.toastOption);
            });
            return of(null);
        }));
    };
    CurrentUserResover = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AccountService, ToastaService, Router])
    ], CurrentUserResover);
    return CurrentUserResover;
}());
export { CurrentUserResover };
//# sourceMappingURL=current-user.resolver.js.map