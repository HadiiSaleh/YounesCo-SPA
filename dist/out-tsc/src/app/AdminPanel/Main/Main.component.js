var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { AdminPanelServiceService } from '../Service/AdminPanelService.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MediaObserver } from "@angular/flex-layout";
var MainAdminPanelComponent = /** @class */ (function () {
    function MainAdminPanelComponent(coreService, router, activatedRoute, deviceService, media) {
        this.coreService = coreService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.deviceService = deviceService;
        this.media = media;
        this.deviceInfo = null;
        this.isMobile = false;
        this.layout = "ltr";
        this.rtlStatus = false;
    }
    MainAdminPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.getElementById('html').classList.remove("user-end");
        this.deviceInfo = this.deviceService.getDeviceInfo();
        if (this.deviceInfo.device == 'ipad' || this.deviceInfo.device == 'iphone' || this.deviceInfo.device == 'android') {
            this.coreService.sidenavMode = 'over';
            this.coreService.sidenavOpen = false;
        }
        this._mediaSubscription = this.media.media$.subscribe(function (change) {
            _this.isMobileStatus = (change.mqAlias == 'xs') || (change.mqAlias == 'sm') || (change.mqAlias == 'md');
            _this.isMobile = _this.isMobileStatus;
            if (_this.isMobile) {
                _this.coreService.sidenavMode = 'over';
                _this.coreService.sidenavOpen = false;
            }
            else {
                _this.coreService.sidenavMode = 'side';
                _this.coreService.sidenavOpen = true;
            }
        });
        this._routerEventsSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd && _this.isMobile) {
                _this.sidenav.close();
            }
        });
        if ((this.activatedRoute.snapshot.url[0].path) == 'admin-panel') {
            document.getElementById('html').classList.add('admin-panel');
        }
        else {
            document.getElementById('html').classList.remove("user-end");
        }
    };
    /**
      * changeRTL method is used to change the layout of template rtl.
      */
    MainAdminPanelComponent.prototype.changeRTL = function () {
        this.layout = "rtl";
        this.rtlStatus = true;
    };
    /**
      * changeLTR method is used to change the layout of template ltr.
      */
    MainAdminPanelComponent.prototype.changeLTR = function () {
        this.layout = "ltr";
        this.rtlStatus = false;
    };
    /**
      *As router outlet will emit an activate event any time a new component is being instantiated.
      */
    MainAdminPanelComponent.prototype.onActivate = function (e) {
        window.scroll(0, 0);
    };
    __decorate([
        ViewChild('sidenav', { static: true }),
        __metadata("design:type", Object)
    ], MainAdminPanelComponent.prototype, "sidenav", void 0);
    MainAdminPanelComponent = __decorate([
        Component({
            selector: 'app-main-admin-panel',
            templateUrl: './Main.component.html',
            styleUrls: ['./Main.component.scss']
        }),
        __metadata("design:paramtypes", [AdminPanelServiceService,
            Router,
            ActivatedRoute,
            DeviceDetectorService,
            MediaObserver])
    ], MainAdminPanelComponent);
    return MainAdminPanelComponent;
}());
export { MainAdminPanelComponent };
//# sourceMappingURL=Main.component.js.map