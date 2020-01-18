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
var SignInComponent = /** @class */ (function () {
    function SignInComponent(embryoService, acct, router, route, fb) {
        this.embryoService = embryoService;
        this.acct = acct;
        this.router = router;
        this.route = route;
        this.fb = fb;
    }
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        var userlogin = this.insertForm.value;
        this.acct.login(userlogin.Username, userlogin.Password).subscribe(function (result) {
            var token = result.token;
            // console.log(token);
            // console.log(result.userRole);
            // console.log(this.returnUrl);
            console.log("User Logged In Successfully");
            _this.invalidLogin = false;
            if (result.userRole == "Customer")
                _this.router.navigateByUrl(_this.returnUrl);
            else
                _this.router.navigateByUrl(_this.adminReturnUrl);
        }, function (error) {
            _this.invalidLogin = true;
            _this.ErrorMessage = error.error.loginError;
            console.log(_this.ErrorMessage);
        });
    };
    SignInComponent.prototype.ngOnInit = function () {
        // Initialize Form Controls
        this.Username = new FormControl('', [Validators.required]);
        this.Password = new FormControl('', [Validators.required]);
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.adminReturnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin-panel';
        // Initialize FormGroup using FormBuilder
        this.insertForm = this.fb.group({
            "Username": this.Username,
            "Password": this.Password
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
            FormBuilder])
    ], SignInComponent);
    return SignInComponent;
}());
export { SignInComponent };
//# sourceMappingURL=SignIn.component.js.map