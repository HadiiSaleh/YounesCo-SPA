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
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastaService } from 'ngx-toasta';
import { EmbryoService } from 'src/app/Services/Embryo.service';
import { AccountService } from 'src/app/Services/account.service';
import { Router, ActivatedRoute } from '@angular/router';
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(embryoService, accountService, router, route, fb, toastyService) {
        var _this = this;
        this.embryoService = embryoService;
        this.accountService = accountService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.toastyService = toastyService;
        //Regex
        this.passRegex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9_]).*$";
        // Toast Options
        this.toastOption = {
            title: "Password Reset",
            msg: "Your password is reset successfully!",
            showClose: true,
            timeout: 3000,
            theme: "material"
        };
        this.route.params.subscribe(function (params) {
            _this.route.queryParams.forEach(function (queryParams) {
                _this.id = queryParams['id'];
                _this.code = queryParams['code'];
            });
        });
    }
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.embryoService.loadingToasty();
        var data = this.insertForm.value;
        this.accountService.resetPasswrod(data).subscribe(function (result) {
            console.log("Your password is reset successfully!");
            _this.embryoService.closeToasty();
            _this.router.navigate([_this.returnUrl]).then(function () {
                _this.toastyService.success(_this.toastOption);
            });
        }, function (error) {
            _this.messagesList = [];
            _this.messagesList.push(error.error.value);
            _this.messagesList.push("Failed to reset your password!");
            console.log(error);
            _this.embryoService.closeToasty();
            _this.embryoService.OkPopup(_this.messagesList);
        });
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.messagesList = [];
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/session/signin';
        this.Password = new FormControl('', [Validators.required, Validators.pattern(this.passRegex), Validators.maxLength(256), Validators.minLength(6)]);
        this.ConfirmPassword = new FormControl('', [Validators.required, this.accountService.MustMatch(this.Password)]);
        // Initialize insertForm using FormBuilder
        this.insertForm = this.fb.group({
            "Id": this.id,
            "Code": this.code,
            "Password": this.Password,
            "ConfirmPassword": this.ConfirmPassword,
        });
    };
    ResetPasswordComponent = __decorate([
        Component({
            selector: 'embryo-ResetPassword',
            templateUrl: './ResetPassword.component.html',
            styleUrls: ['./ResetPassword.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService,
            AccountService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastaService])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
//# sourceMappingURL=ResetPassword.component.js.map