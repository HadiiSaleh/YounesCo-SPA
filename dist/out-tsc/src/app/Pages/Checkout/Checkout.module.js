var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatTableModule, MatExpansionModule, MatSelectModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatRadioModule, MatDialogModule, MatGridListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'ngx-card/ngx-card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CheckoutRoutes } from './Checkout.routing';
import { PaymentComponent } from './Payment/Payment.component';
import { SigninComponent } from './Signin/Signin.component';
import { FinalReceiptComponent } from './FinalReceipt/FinalReceipt.component';
import { GlobalModule } from '../../Global/Global.module';
var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                MatButtonModule,
                FlexLayoutModule,
                MatCardModule,
                MatMenuModule,
                MatToolbarModule,
                MatIconModule,
                MatInputModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatProgressSpinnerModule,
                MatTableModule,
                MatExpansionModule,
                MatSelectModule,
                MatSnackBarModule,
                MatTooltipModule,
                MatChipsModule,
                MatListModule,
                MatSidenavModule,
                MatTabsModule,
                MatProgressBarModule,
                MatCheckboxModule,
                MatSliderModule,
                MatRadioModule,
                MatDialogModule,
                MatGridListModule,
                RouterModule.forChild(CheckoutRoutes),
                GlobalModule,
                FormsModule,
                ReactiveFormsModule,
                CardModule
            ],
            declarations: [
                PaymentComponent,
                SigninComponent,
                FinalReceiptComponent
            ]
        })
    ], CheckoutModule);
    return CheckoutModule;
}());
export { CheckoutModule };
//# sourceMappingURL=Checkout.module.js.map