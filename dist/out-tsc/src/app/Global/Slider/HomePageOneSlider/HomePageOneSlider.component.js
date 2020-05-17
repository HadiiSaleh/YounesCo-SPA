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
var HomePageOneSliderComponent = /** @class */ (function () {
    function HomePageOneSliderComponent() {
        this.isRTL = false;
    }
    HomePageOneSliderComponent.prototype.ngOnInit = function () {
    };
    HomePageOneSliderComponent.prototype.ngOnChanges = function () {
        this.slideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        };
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], HomePageOneSliderComponent.prototype, "isRTL", void 0);
    HomePageOneSliderComponent = __decorate([
        Component({
            selector: 'embryo-HomePageOneSlider',
            templateUrl: './HomePageOneSlider.component.html',
            styleUrls: ['./HomePageOneSlider.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], HomePageOneSliderComponent);
    return HomePageOneSliderComponent;
}());
export { HomePageOneSliderComponent };
//# sourceMappingURL=HomePageOneSlider.component.js.map