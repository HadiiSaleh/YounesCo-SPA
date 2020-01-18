var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateUniversalLoader } from './Services/translate-universal-loader.service';
export function translateFactory() {
    return new TranslateUniversalLoader('./dist/assets/i18n', '.json');
}
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    AppServerModule = __decorate([
        NgModule({
            imports: [
                AppModule,
                ServerModule,
                ModuleMapLoaderModule,
                FlexLayoutServerModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: translateFactory
                    }
                })
            ],
            bootstrap: [AppComponent],
        })
    ], AppServerModule);
    return AppServerModule;
}());
export { AppServerModule };
//# sourceMappingURL=app.server.module.js.map