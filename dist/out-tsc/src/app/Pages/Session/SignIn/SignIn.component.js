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
import { EmbryoService } from '../../../Services/Embryo.service';
import { AccountService } from '../../../Services/account.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastaService } from 'ngx-toasta';
var SignInComponent = /** @class */ (function () {
    function SignInComponent(embryoService, accountService, router, route, fb, toastyService) {
        this.embryoService = embryoService;
        this.accountService = accountService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.toastyService = toastyService;
        // Toast Options
        this.toastOption = {
            title: "Sign-in",
            msg: "You sign-in successfully!",
            showClose: true,
            timeout: 3000,
            theme: "material"
        };
    }
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        this.embryoService.loadingToasty();
        var userlogin = this.insertForm.value;
        this.accountService.login(userlogin.Username, userlogin.Password).subscribe(function (result) {
            _this.accountService.rememberMyUserName(_this.insertForm.get('Username').value, userlogin.RememberMe);
            _this.messagesList = [];
            var token = result.token;
            console.log("User Logged In Successfully");
            _this.embryoService.closeToasty();
            if (result.userRole == "Customer")
                _this.router.navigate([_this.returnUrl]).then(function () {
                    _this.toastyService.success(_this.toastOption);
                });
            else
                _this.router.navigate([_this.adminReturnUrl]).then(function () {
                    _this.toastyService.success(_this.toastOption);
                });
        }, function (error) {
            _this.messagesList = [];
            if (error.status == 400) {
                for (var i = 0; i < error.error.errors['Password'].length; i++) {
                    if (error.error.errors['Password'][i] == "The field Password must match the regular expression '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9_]).*$'.")
                        _this.messagesList.push('"The field Password must contain at least 6 characters, including at least 1 Lower case, 1 Upper case, 1 Digits and 1 Special character');
                    console.log(error.error.errors['Password'][i]);
                }
            }
            else if (error.status == 401)
                _this.messagesList.push(error.error.loginError);
            _this.messagesList.push("Failed to login!");
            console.log(error);
            _this.embryoService.closeToasty();
            _this.embryoService.OkPopup(_this.messagesList);
        });
    };
    SignInComponent.prototype.ngOnInit = function () {
        var rememberMeStatus = this.accountService.checkRememberMeStatus();
        // Initialize Form Controls
        this.Username = new FormControl('', [Validators.required]);
        this.Password = new FormControl('', [Validators.required]);
        this.RememberMe = new FormControl(rememberMeStatus);
        if (rememberMeStatus)
            this.Username.setValue(this.accountService.getRememberMeUserName());
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.adminReturnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin-panel';
        // Initialize FormGroup using FormBuilder
        this.insertForm = this.fb.group({
            "Username": this.Username,
            "Password": this.Password,
            'RememberMe': this.RememberMe
        });
    };
    SignInComponent = __decorate([
        Component({
            selector: 'signIn',
            templateUrl: './SignIn.component.html',
            styleUrls: ['./SignIn.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService,
            AccountService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastaService])
    ], SignInComponent);
    return SignInComponent;
}());
export { SignInComponent };
//# sourceMappingURL=SignIn.component.js.map