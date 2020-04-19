var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';
import { SessionRoutes } from './Session.routing';
import { GlobalModule } from '../../Global/Global.module';
import { TemplatesModule } from '../../Templates/Templates.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatTableModule, MatExpansionModule, MatSelectModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatRadioModule, MatDialogModule, MatGridListModule } from '@angular/material';
import { RegisterComponent } from './Register/Register.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { ThankYouComponent } from './ThankYou/ThankYou.component';
import { ResetPasswordComponent } from './ResetPassword/ResetPassword.component';
var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(SessionRoutes),
                FlexLayoutModule,
                MatCardModule,
                MatButtonModule,
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
                GlobalModule,
                TemplatesModule,
                NgAisModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                RegisterComponent,
                SignInComponent,
                ThankYouComponent,
                ForgotPasswordComponent,
                ResetPasswordComponent
            ]
        })
    ], SessionModule);
    return SessionModule;
}());
export { SessionModule };
//# sourceMappingURL=Session.module.js.map