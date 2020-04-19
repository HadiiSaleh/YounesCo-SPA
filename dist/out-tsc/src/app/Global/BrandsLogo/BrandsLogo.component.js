var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { EmbryoService } from '../../Services/Embryo.service';
var BrandslogoComponent = /** @class */ (function () {
    function BrandslogoComponent(embryoService) {
        this.embryoService = embryoService;
        this.brandsLogoArray = [
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
                image: "assets/images/client-logo-2.png"
            },
            {
                id: 6,
                image: "assets/images/client-logo-1.png"
            },
            {
                id: 7,
                image: "assets/images/client-logo-3.png"
            },
        ];
    }
    BrandslogoComponent.prototype.ngOnInit = function () {
    };
    BrandslogoComponent.prototype.ngOnChanges = function () {
        this.slideConfig = {
            infinite: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                }
            ]
        };
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BrandslogoComponent.prototype, "isRTL", void 0);
    BrandslogoComponent = __decorate([
        Component({
            selector: 'embryo-BrandsLogo',
            templateUrl: './BrandsLogo.component.html',
            styleUrls: ['./BrandsLogo.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService])
    ], BrandslogoComponent);
    return BrandslogoComponent;
}());
export { BrandslogoComponent };
//# sourceMappingURL=BrandsLogo.component.js.map