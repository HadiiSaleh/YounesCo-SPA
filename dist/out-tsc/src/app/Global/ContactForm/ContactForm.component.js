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
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(formGroup) {
        this.formGroup = formGroup;
        this.emailPattern = /\S+@\S+\.\S+/;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formGroup.group({
            first_name: ['', { validators: [Validators.required] }],
            last_name: ['', { validators: [Validators.required] }],
            email: ['', { validators: [Validators.required, Validators.pattern(this.emailPattern)] }],
            subject: ['', { validators: [Validators.required] }],
            message: ['', { validators: [Validators.required] }]
        });
    };
    ContactFormComponent.prototype.submitForm = function () {
        if (this.contactForm.valid) {
            console.log(this.contactForm.value);
        }
        else {
            for (var i in this.contactForm.controls) {
                this.contactForm.controls[i].markAsTouched();
            }
        }
    };
    ContactFormComponent = __decorate([
        Component({
            selector: 'embryo-ContactForm',
            templateUrl: './ContactForm.component.html',
            styleUrls: ['./ContactForm.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
export { ContactFormComponent };
//# sourceMappingURL=ContactForm.component.js.map