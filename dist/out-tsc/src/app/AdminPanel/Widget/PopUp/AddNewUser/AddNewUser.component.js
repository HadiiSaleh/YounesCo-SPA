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
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
var AddNewUserComponent = /** @class */ (function () {
    function AddNewUserComponent(formBuilder, dialogRef) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.emailPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
    }
    AddNewUserComponent.prototype.ngOnInit = function () {
        this.addNewUserForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            accessType: ['', [Validators.required]]
        });
    };
    // onFormSubmit method is submit a add new user form.
    AddNewUserComponent.prototype.onFormSubmit = function () {
        this.dialogRef.close(this.addNewUserForm.value);
    };
    AddNewUserComponent = __decorate([
        Component({
            selector: 'ms-add-new-client',
            templateUrl: './AddNewUser.component.html',
            styleUrls: ['./AddNewUser.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            MatDialogRef])
    ], AddNewUserComponent);
    return AddNewUserComponent;
}());
export { AddNewUserComponent };
//# sourceMappingURL=AddNewUser.component.js.map