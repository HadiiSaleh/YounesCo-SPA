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
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmbryoService } from 'src/app/Services/Embryo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastaService } from 'ngx-toasta';
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(embryoService, accountService, router, route, fb, toastyService) {
        this.embryoService = embryoService;
        this.accountService = accountService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.toastyService = toastyService;
        // Toast Options
        this.toastOption = {
            title: "Please check your inbox",
            msg: "Password reset link sent to your email!",
            showClose: true,
            timeout: 3000,
            theme: "material"
        };
    }
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.embryoService.loadingToasty();
        var user = this.insertForm.value;
        this.accountService.forgotPasswrod(user.Email).subscribe(function (result) {
            console.log("Password reset link sent to your email!");
            _this.embryoService.closeToasty();
            _this.router.navigate([_this.returnUrl]).then(function () {
                _this.toastyService.success(_this.toastOption);
            });
        }, function (error) {
            _this.messagesList = [];
            _this.messagesList.push(error.error.value);
            _this.messagesList.push("Failed send password reset link to your email !");
            console.log(error);
            _this.embryoService.closeToasty();
            _this.embryoService.OkPopup(_this.messagesList);
        });
    };
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.messagesList = [];
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/session/signin';
        this.Email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(256)]);
        this.EmailConfirmation = new FormControl('', [Validators.required, this.accountService.MustMatch(this.Email)]);
        // Initialize insertForm using FormBuilder
        this.insertForm = this.fb.group({
            "Email": this.Email,
            "EmailConfirmation": this.EmailConfirmation,
        });
    };
    ForgotPasswordComponent = __decorate([
        Component({
            selector: 'embryo-ForgotPassword',
            templateUrl: './ForgotPassword.component.html',
            styleUrls: ['./ForgotPassword.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService,
            AccountService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastaService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
//# sourceMappingURL=ForgotPassword.component.js.map