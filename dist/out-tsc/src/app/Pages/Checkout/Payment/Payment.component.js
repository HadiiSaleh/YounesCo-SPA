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
import { EmbryoService } from '../../../Services/Embryo.service';
import { Router } from '@angular/router';
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(embryoService, formGroup, router) {
        this.embryoService = embryoService;
        this.formGroup = formGroup;
        this.router = router;
        this.step = 0;
        this.isDisabledPaymentStepTwo = true;
        this.isDisabledPaymentStepThree = false;
        this.emailPattern = /\S+@\S+\.\S+/;
        this.offerCards = [
            {
                id: 1,
                name: "Debit Card",
                content: "Visa Mega Shopping Offer"
            },
            {
                id: 2,
                name: "Credit Card",
                content: "American Express 20% Flat"
            },
            {
                id: 3,
                name: "Debit Card",
                content: "BOA Buy 1 Get One Offer"
            },
            {
                id: 4,
                name: "Master Card",
                content: "Mastercard Elite Card"
            },
            {
                id: 5,
                name: "Debit Card",
                content: "Visa Mega Shopping Offer"
            }
        ];
        this.bankCardsImages = [
            {
                id: 1,
                image: "assets/images/client-logo-1.png"
            },
            {
                id: 2,
                image: "assets/images/client-logo-2.png"
            },
            {
                id: 3,
                image: "assets/images/client-logo-3.png"
            },
            {
                id: 4,
                image: "assets/images/client-logo-4.png"
            },
            {
                id: 5,
                image: "assets/images/client-logo-5.png"
            }
        ];
        this.embryoService.removeBuyProducts();
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.paymentFormOne = this.formGroup.group({
            user_details: this.formGroup.group({
                first_name: ['', [Validators.required]],
                last_name: ['', [Validators.required]],
                street_name_number: ['', [Validators.required]],
                apt: ['', [Validators.required]],
                zip_code: ['', [Validators.required]],
                city_state: ['', [Validators.required]],
                country: ['', [Validators.required]],
                mobile: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
                share_email: ['', [Validators.pattern(this.emailPattern)]],
            }),
            offers: this.formGroup.group({
                discount_code: [''],
                card_type: [1],
                card_type_offer_name: [null]
            }),
            payment: this.formGroup.group({
                card_number: ['', [Validators.required]],
                user_card_name: ['', [Validators.required]],
                cvv: ['', [Validators.required]],
                expiry_date: ['', [Validators.required]],
                card_id: [1],
                bank_card_value: [null]
            })
        });
    };
    PaymentComponent.prototype.ngAfterViewInit = function () {
    };
    PaymentComponent.prototype.setStep = function (index) {
        this.step = index;
        switch (index) {
            case 0:
                this.isDisabledPaymentStepTwo = true;
                this.isDisabledPaymentStepThree = true;
                break;
            case 1:
                this.isDisabledPaymentStepThree = false;
                break;
            default:
                break;
        }
    };
    PaymentComponent.prototype.toggleRightSidenav = function () {
        this.embryoService.paymentSidenavOpen = !this.embryoService.paymentSidenavOpen;
    };
    PaymentComponent.prototype.getCartProducts = function () {
        var total = 0;
        if (this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                if (!product.quantity) {
                    product.quantity = 1;
                }
                total += (product.price * product.quantity);
            }
            total += (this.embryoService.shipping + this.embryoService.tax);
            return total;
        }
        return total;
    };
    PaymentComponent.prototype.submitPayment = function () {
        var userDetailsGroup = (this.paymentFormOne.controls['user_details']);
        if (userDetailsGroup.valid) {
            switch (this.step) {
                case 0:
                    this.step = 1;
                    this.isDisabledPaymentStepTwo = false;
                    break;
                case 1:
                    this.step = 2;
                    break;
                default:
                    // code...
                    break;
            }
        }
        else {
            this.isDisabledPaymentStepTwo = true;
            this.isDisabledPaymentStepThree = true;
            for (var i in userDetailsGroup.controls) {
                userDetailsGroup.controls[i].markAsTouched();
            }
        }
    };
    PaymentComponent.prototype.selectedPaymentTabChange = function (value) {
        var paymentGroup = (this.paymentFormOne.controls['payment']);
        paymentGroup.markAsUntouched();
        if (value && value.index == 1) {
            paymentGroup.controls['card_number'].clearValidators();
            paymentGroup.controls['user_card_name'].clearValidators();
            paymentGroup.controls['cvv'].clearValidators();
            paymentGroup.controls['expiry_date'].clearValidators();
            paymentGroup.controls['bank_card_value'].setValidators([Validators.required]);
        }
        else {
            paymentGroup.controls['card_number'].setValidators([Validators.required]);
            paymentGroup.controls['user_card_name'].setValidators([Validators.required]);
            paymentGroup.controls['cvv'].setValidators([Validators.required]);
            paymentGroup.controls['expiry_date'].setValidators([Validators.required]);
            paymentGroup.controls['bank_card_value'].clearValidators();
        }
        paymentGroup.controls['card_number'].updateValueAndValidity();
        paymentGroup.controls['user_card_name'].updateValueAndValidity();
        paymentGroup.controls['cvv'].updateValueAndValidity();
        paymentGroup.controls['expiry_date'].updateValueAndValidity();
        paymentGroup.controls['bank_card_value'].updateValueAndValidity();
    };
    PaymentComponent.prototype.finalStep = function () {
        var paymentGroup = (this.paymentFormOne.controls['payment']);
        if (paymentGroup.valid) {
            this.embryoService.addBuyUserDetails(this.paymentFormOne.value);
            this.router.navigate(['/checkout/final-receipt']);
        }
        else {
            for (var i in paymentGroup.controls) {
                paymentGroup.controls[i].markAsTouched();
            }
        }
    };
    PaymentComponent = __decorate([
        Component({
            selector: 'app-Payment',
            templateUrl: './Payment.component.html',
            styleUrls: ['./Payment.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService,
            FormBuilder,
            Router])
    ], PaymentComponent);
    return PaymentComponent;
}());
export { PaymentComponent };
//# sourceMappingURL=Payment.component.js.map