var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastaService } from 'ngx-toasta';
import { EmbryoService } from 'src/app/Services/Embryo.service';
import { AccountService } from 'src/app/Services/account.service';
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(embryoService, accountService, router, route, fb, toastyService) {
        var _this = this;
        this.embryoService = embryoService;
        this.accountService = accountService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.toastyService = toastyService;
        //Regex
        this.phoneRegex = "[+][0-9]{3} [0-9]{8}";
        this.nameRegex = "^[A-Za-z]+$";
        this.passRegex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9_]).*$";
        this.sentCurrentUser = new EventEmitter();
        //Toast Options
        this.toastOption = {
            title: "Account Information",
            msg: "Your account information updated successfully!",
            showClose: true,
            timeout: 3000,
            theme: "material"
        };
        this.route.params.subscribe(function (params) {
            _this.route.queryParams.forEach(function (queryParams) {
                _this.type = queryParams['type'];
            });
        });
    }
    /**
     * Function is used to submit the profile info.
     * If form value is valid, redirect to profile page.
     */
    EditProfileComponent.prototype.getCurrentUser = function (currentUser) {
        this.CurrentUser = currentUser;
    };
    EditProfileComponent.prototype.sendDataToParent = function (data) {
        // emit data to parent component
        this.sentCurrentUser.emit(data);
    };
    EditProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.embryoService.loadingToasty();
        var updatedUser = this.updateForm.value;
        this.accountService.updateUserById(this.CurrentUser.id, updatedUser).subscribe(function (result) {
            //pass the new user to parent
            _this.sendDataToParent(result);
            _this.messagesList = [];
            console.log("Your account information updated successfully!");
            _this.embryoService.closeToasty();
            _this.router.navigate([_this.returnUrl]).then(function () {
                _this.toastyService.success(_this.toastOption);
            });
            _this.accountService.changeCurrentUsername(result.userName);
        }, function (error) {
            _this.messagesList = [];
            for (var i = 0; i < error.error.value.length; i++) {
                _this.messagesList.push(error.error.value[i]);
                console.log(error.error.value[i]);
            }
            _this.messagesList.push("Update Failed!");
            console.log(error);
            _this.embryoService.closeToasty();
            _this.embryoService.OkPopup(_this.messagesList);
        });
    };
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesList = [];
        this.LoginStatus$ = this.accountService.isLoggedIn;
        this.UserRole$ = this.accountService.currentUserRole;
        this.UserRole$.subscribe(function (result) {
            _this.currentRole = result;
        }, function (error) {
            console.log(error);
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = '/admin-panel/account/profile';
        // Initialize Form Controls
        this.Username = new FormControl('', [Validators.required, Validators.maxLength(256)]);
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
        // Initialize Location using FormBuilder
        this.Location = this.fb.group({
            "Country": this.Country,
            "City": this.City,
            "Region": this.Region,
            "Street": this.Street,
            "Building": this.Building,
            "Floor": this.Floor
        });
        // Initialize updateForm using FormBuilder
        this.updateForm = this.fb.group({
            "Username": this.Username,
            "Email": this.Email,
            "PhoneNumber": this.PhoneNumber,
            "role": this.currentRole,
            "FirstName": this.FirstName,
            "MiddleName": this.MiddleName,
            "LastName": this.LastName,
            "Location": this.Location
        });
        this.Country.setValue(this.CurrentUser.location.country);
        this.City.setValue(this.CurrentUser.location.city);
        this.Region.setValue(this.CurrentUser.location.region);
        this.Street.setValue(this.CurrentUser.location.street);
        this.Building.setValue(this.CurrentUser.location.building);
        this.Floor.setValue(this.CurrentUser.location.floor);
        this.Username.setValue(this.CurrentUser.userName);
        this.Email.setValue(this.CurrentUser.email);
        this.PhoneNumber.setValue(this.CurrentUser.phoneNumber);
        this.FirstName.setValue(this.CurrentUser.firstName);
        this.MiddleName.setValue(this.CurrentUser.middleName);
        this.LastName.setValue(this.CurrentUser.lastName);
        this.Location.setValue({
            "Country": this.Country.value,
            "City": this.City.value,
            "Region": this.Region.value,
            "Street": this.Street.value,
            "Building": this.Building.value,
            "Floor": this.Floor.value
        });
        this.updateForm.setValue({
            "Username": this.Username.value,
            "Email": this.Email.value,
            "PhoneNumber": this.PhoneNumber.value,
            "role": this.currentRole,
            "FirstName": this.FirstName.value,
            "MiddleName": this.MiddleName.value,
            "LastName": this.LastName.value,
            "Location": this.Location.value
        });
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], EditProfileComponent.prototype, "sentCurrentUser", void 0);
    EditProfileComponent = __decorate([
        Component({
            selector: 'app-EditProfile',
            templateUrl: './EditProfile.component.html',
            styleUrls: ['./EditProfile.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService,
            AccountService,
            Router,
            ActivatedRoute,
            FormBuilder,
            ToastaService])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
export { EditProfileComponent };
//# sourceMappingURL=EditProfile.component.js.map