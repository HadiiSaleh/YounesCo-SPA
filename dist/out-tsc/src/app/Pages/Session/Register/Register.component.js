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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(embryoService, accountService, router, route, fb) {
        this.embryoService = embryoService;
        this.accountService = accountService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        //Regex
        this.phoneRegex = "[+][0-9]{3} [0-9]{8}";
        this.nameRegex = "^[A-Za-z]+$";
        this.passRegex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9_]).*$";
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.embryoService.loadingToasty();
        var newUser = this.insertForm.value;
        this.accountService.register(newUser).subscribe(function (result) {
            _this.messagesList = [];
            console.log("Registration Succeeded!");
            _this.messagesList.push("Thank you for you registration!Please check whether the email is in the junk folder of your email account, since confirmation mails with backlinks are sometimes classified as spam");
            _this.embryoService.closeToasty();
            _this.embryoService.OkPopup(_this.messagesList);
            _this.router.navigateByUrl(_this.returnUrl);
        }, function (error) {
            _this.messagesList = [];
            for (var i = 0; i < error.error.value.length; i++) {
                _this.messagesList.push(error.error.value[i]);
                console.log(error.error.value[i]);
            }
            _this.messagesList.push("Registration Failed!");
            console.log(error);
            _this.embryoService.closeToasty();
            _this.embryoService.OkPopup(_this.messagesList);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.messagesList = [];
        // Initialize Form Controls
        this.Username = new FormControl('', [Validators.required, Validators.maxLength(256)]);
        this.Password = new FormControl('', [Validators.required, Validators.pattern(this.passRegex), Validators.maxLength(256), Validators.minLength(6)]);
        this.ConfirmPassword = new FormControl('', [Validators.required, this.accountService.MustMatch(this.Password)]);
        this.Email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(256)]);
        this.PhoneNumber = new FormControl('', [Validators.required, Validators.pattern(this.phoneRegex), Validators.maxLength(256)]);
        this.FirstName = new FormControl('', [Validators.required, Validators.pattern(this.nameRegex), Validators.maxLength(256)]);
        this.MiddleName = new FormControl('', [Validators.pattern(this.nameRegex), Validators.maxLength(256)]);
        this.LastName = new FormControl('', [Validators.required, Validators.pattern(this.nameRegex), Validators.maxLength(256)]);
        this.Country = new FormControl('', [Validators.required, Validators.pattern(this.nameRegex), Validators.maxLength(256)]);
        this.City = new FormControl('', [Validators.required, Validators.pattern(this.nameRegex), Validators.maxLength(256)]);
        this.Region = new FormControl('', [Validators.required, Validators.maxLength(256)]);
        this.Street = new FormControl('', [Validators.required, Validators.maxLength(256)]);
        this.Building = new FormControl('', [Validators.required, Validators.maxLength(256)]);
        this.Floor = new FormControl('', [Validators.required, Validators.maxLength(256)]);
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // Initialize Location using FormBuilder
        this.Location = this.fb.group({
            "Country": this.Country,
            "City": this.City,
            "Region": this.Region,
            "Street": this.Street,
            "Building": this.Building,
            "Floor": this.Floor
        });
        // Initialize insertForm using FormBuilder
        this.insertForm = this.fb.group({
            "Username": this.Username,
            "Password": this.Password,
            "ConfirmPassword": this.ConfirmPassword,
            "Email": this.Email,
            "PhoneNumber": this.PhoneNumber,
            "role": 'Customer',
            "FirstName": this.FirstName,
            "MiddleName": this.MiddleName,
            "LastName": this.LastName,
            "Location": this.Location
        });
    };
    RegisterComponent = __decorate([
        Component({
            selector: 'embryo-Register',
            templateUrl: './Register.component.html',
            styleUrls: ['./Register.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService,
            AccountService,
            Router,
            ActivatedRoute,
            FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=Register.component.js.map