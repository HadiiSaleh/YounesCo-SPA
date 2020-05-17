var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { take, finalize, tap } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { EmbryoService } from '../Services/Embryo.service';
import { MenuItems } from '../Core/menu/menu-items/menu-items';
import { Directionality } from '@angular/cdk/bidi';
import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from "@angular/platform-browser";
var MainComponent = /** @class */ (function () {
    function MainComponent(loader, embryoService, menuItems, dir, translate, router, meta, title, activatedRoute) {
        var _this = this;
        this.loader = loader;
        this.embryoService = embryoService;
        this.menuItems = menuItems;
        this.translate = translate;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.timer = 0;
        this._dirChangeSubscription = Subscription.EMPTY;
        title.setTitle('Embryo - Angular Material Design eCommerce Template');
        meta.addTags([
            { name: 'author', content: 'The IRON Network' },
            { name: 'keywords', content: ' angular, angular 2, angular 6, angular 7, angular material, clean, creative, ecommerce, frontend, online store, shop, shopping, store, typescript, ui framework ' },
            { name: 'description', content: 'Embryo is an E-Commerce angular 7 based template with material design. It also comes with Angular cli. Now you have all the power to maintain your ecommerce site. Responsive design gives your user to use in any modern devices. Clean Code gives you the power to customize the code as per as your requirments. Embryo has all the basics functionality which is required in ecommerce site. Rtl design makes the multi-language support with more easy way.' }
        ]);
        if (this.embryoService.isDirectionRtl) {
            this.isRtl = 'rtl';
        }
        else {
            this.isRtl = 'ltr';
        }
        this.router.events
            .subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                _this.currentUrl = event.url;
            }
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        this.startTimer();
        document.getElementById('html').classList.remove("admin-panel");
        document.getElementById('html').classList.add("user-end");
    };
    MainComponent.prototype.startTimer = function () {
        var _this = this;
        this.timer = 0;
        interval(1000).pipe(take(3), tap(function (value) { _this.timer = value + 1; }), finalize(function () { return _this.loader.complete(); })).subscribe();
        // We're sure that subscription has been made, we can start loading bar service
        this.loader.start();
    };
    MainComponent.prototype.hideSideNav = function () {
        this.embryoService.sidenavOpen = false;
    };
    MainComponent.prototype.changeDirection = function () {
        if (this.isRtl == "rtl") {
            this.isRtl = "ltr";
            this.embryoService.isDirectionRtl = false;
        }
        else {
            this.isRtl = "rtl";
            this.embryoService.isDirectionRtl = true;
        }
        this.embryoService.featuredProductsSelectedTab = 0;
        this.embryoService.newArrivalSelectedTab = 0;
    };
    /**
     * On window scroll add class header-fixed.
     */
    MainComponent.prototype.onScrollEvent = function ($event) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollTop >= 200) {
            document.querySelector('app-main').classList.add("header-fixed");
        }
        else {
            document.querySelector('app-main').classList.remove("header-fixed");
        }
    };
    /**
      *As router outlet will emit an activate event any time a new component is being instantiated.
      */
    MainComponent.prototype.onActivate = function (e) {
        window.scroll(0, 0);
    };
    __decorate([
        HostListener('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainComponent.prototype, "onScrollEvent", null);
    MainComponent = __decorate([
        Component({
            selector: 'app-main',
            templateUrl: './Main.component.html',
            styleUrls: ['./Main.component.scss']
        }),
        __metadata("design:paramtypes", [LoadingBarService,
            EmbryoService,
            MenuItems,
            Directionality,
            TranslateService,
            Router,
            Meta, Title,
            ActivatedRoute])
    ], MainComponent);
    return MainComponent;
}());
export { MainComponent };
//# sourceMappingURL=Main.component.js.map