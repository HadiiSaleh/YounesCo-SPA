var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatCheckboxModule, MatMenuModule, MatDialogModule, MatDatepickerModule, MatTableModule } from '@angular/material';
/*import { ChartsModule } from 'ng2-charts';*/
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
;
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './TitleComponent/TitleComponent.component';
import { TopsideMenuComponent } from './Menu/TopsideMenu/TopsideMenu.component';
import { DeleteListDialogComponent } from './PopUp/DeleteListDialog/DeleteListDialog.component';
import { SeeListDialogComponent } from './PopUp/SeeListDialog/SeeListDialog.component';
import { AddNewUserComponent } from './PopUp/AddNewUser/AddNewUser.component';
import { HeaderUserProfileDropdownComponent } from './HeaderUserProfileDropdown/HeaderUserProfileDropdown.component';
import { RouterModule } from '@angular/router';
var WidgetModule = /** @class */ (function () {
    function WidgetModule() {
    }
    WidgetModule = __decorate([
        NgModule({
            declarations: [
                TitleComponent,
                TopsideMenuComponent,
                DeleteListDialogComponent,
                SeeListDialogComponent,
                AddNewUserComponent,
                HeaderUserProfileDropdownComponent
            ],
            imports: [
                CommonModule,
                MatSelectModule,
                MatInputModule,
                MatFormFieldModule,
                FormsModule,
                /*	ChartsModule,*/
                MatIconModule,
                MatCardModule,
                MatButtonModule,
                MatProgressSpinnerModule,
                PerfectScrollbarModule,
                TranslateModule,
                MatCheckboxModule,
                MatMenuModule,
                MatDialogModule,
                ReactiveFormsModule,
                MatDatepickerModule,
                MatTableModule,
                FlexLayoutModule,
                RouterModule
            ],
            exports: [
                TitleComponent,
                TopsideMenuComponent,
                HeaderUserProfileDropdownComponent
            ],
            entryComponents: [
                DeleteListDialogComponent,
                SeeListDialogComponent,
                AddNewUserComponent
            ]
        })
    ], WidgetModule);
    return WidgetModule;
}());
export { WidgetModule };
//# sourceMappingURL=Widget.module.js.map