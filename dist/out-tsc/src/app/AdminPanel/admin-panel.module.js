var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainAdminPanelComponent } from './Main/Main.component';
import { MenuToggleModule } from './Core/Menu/MenuToggle.module';
import { AdminMenuItems } from './Core/Menu/MenuItems/MenuItems';
import { SideBarComponent } from './Shared/SideBar/SideBar.component';
import { MenuListItemsComponent } from './Shared/MenuListItems/MenuListItems.component';
import { AdminHeaderComponent } from './Shared/Header/Header.component';
import { WidgetModule } from './Widget/Widget.module';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatTableModule, MatExpansionModule, MatSelectModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatRadioModule, MatDialogModule, MatGridListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastaModule } from 'ngx-toasta';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AdminPanelRoutes } from './admin-panel-routing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GlobalModule } from '../Global/Global.module';
import { JwtInterceptor } from '../_helper/jwt.Interceptor';
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
var AdminPanelModule = /** @class */ (function () {
    function AdminPanelModule() {
    }
    AdminPanelModule = __decorate([
        NgModule({
            declarations: [
                MainAdminPanelComponent,
                SideBarComponent,
                MenuListItemsComponent,
                AdminHeaderComponent
            ],
            imports: [
                CommonModule,
                MenuToggleModule,
                WidgetModule,
                MatButtonModule,
                MatCardModule,
                MatMenuModule,
                FlexLayoutModule,
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
                PerfectScrollbarModule,
                RouterModule.forChild(AdminPanelRoutes),
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: createTranslateLoader,
                        deps: [HttpClient]
                    }
                }),
                HttpClientModule,
                GlobalModule,
                ToastaModule.forRoot()
            ],
            providers: [
                AdminMenuItems,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true
                }
            ],
            exports: [
                RouterModule,
                ToastaModule
            ]
        })
    ], AdminPanelModule);
    return AdminPanelModule;
}());
export { AdminPanelModule };
//# sourceMappingURL=admin-panel.module.js.map