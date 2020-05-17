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
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastaService } from 'ngx-toasta';
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(route, router, formGroup, toastyService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.formGroup = formGroup;
        this.toastyService = toastyService;
        this.emailPattern = /\S+@\S+\.\S+/;
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
    EditProfileComponent.prototype.ngOnInit = function () {
        this.info = this.formGroup.group({
            first_name: ['', [Validators.required]],
            last_name: ['', [Validators.required]],
            gender: ['male'],
            date: [],
            phone_number: ['', [Validators.required]],
            location: [''],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
        });
        this.address = this.formGroup.group({
            address: ['', [Validators.required]],
            buiding_name: ['', [Validators.required]],
            street_no: ['', [Validators.required]],
            state: ['', [Validators.required]],
            zip_code: ['', [Validators.required]],
            country: ['', [Validators.required]]
        });
        this.card = this.formGroup.group({
            card_number: ['', [Validators.required]],
            cvv: ['', [Validators.required]],
            name: ['', [Validators.required]],
            month: ['', [Validators.required]],
            year: ['', [Validators.required]]
        });
    };
    /**
     * Function is used to submit the profile info.
     * If form value is valid, redirect to profile page.
     */
    EditProfileComponent.prototype.submitProfileInfo = function () {
        var _this = this;
        if (this.info.valid) {
            this.router.navigate(['/account/profile']).then(function () {
                _this.toastyService.success(_this.toastOption);
            });
        }
        else {
            for (var i in this.info.controls) {
                this.info.controls[i].markAsTouched();
            }
        }
    };
    /**
     * Function is used to submit the profile address.
     * If form value is valid, redirect to address page.
     */
    EditProfileComponent.prototype.submitAddress = function () {
        var _this = this;
        if (this.address.valid) {
            this.router.navigate(['/account/address']).then(function () {
                _this.toastyService.success(_this.toastOption);
            });
        }
        else {
            for (var i in this.address.controls) {
                this.address.controls[i].markAsTouched();
            }
        }
    };
    /**
     * Function is used to submit the profile card.
     * If form value is valid, redirect to card page.
     */
    EditProfileComponent.prototype.submitCard = function () {
        var _this = this;
        if (this.card.valid) {
            this.router.navigate(['/account/card']).then(function () {
                _this.toastyService.success(_this.toastOption);
            });
        }
        else {
            for (var i in this.card.controls) {
                this.card.controls[i].markAsTouched();
            }
        }
    };
    EditProfileComponent = __decorate([
        Component({
            selector: 'app-EditProfile',
            templateUrl: './EditProfile.component.html',
            styleUrls: ['./EditProfile.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            FormBuilder,
            ToastaService])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
export { EditProfileComponent };
//# sourceMappingURL=EditProfile.component.js.map