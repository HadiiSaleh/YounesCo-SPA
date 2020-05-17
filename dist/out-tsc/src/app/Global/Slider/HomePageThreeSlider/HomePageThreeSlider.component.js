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
var HomePageThreeSliderComponent = /** @class */ (function () {
    function HomePageThreeSliderComponent() {
        this.isRTL = false;
        this.slides = [
            {
                img: "assets/images/h-slider-1.jpg",
                content: "2019 Latest Collection",
                heading_one: "New Fashion Collection",
            },
            {
                img: "assets/images/h-slider-2.jpg",
                content: "2019 Latest Collection",
                heading_one: "Summer Time Collection",
            },
            {
                img: "assets/images/h-slider-3.jpg",
                content: "2019 Latest Collection",
                heading_one: "Men's Suiting and Clothing",
            }
        ];
    }
    HomePageThreeSliderComponent.prototype.ngOnInit = function () {
    };
    HomePageThreeSliderComponent.prototype.ngOnChanges = function () {
        this.slideConfig = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                }
            ]
        };
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], HomePageThreeSliderComponent.prototype, "isRTL", void 0);
    HomePageThreeSliderComponent = __decorate([
        Component({
            selector: 'embryo-HomePageThreeSlider',
            templateUrl: './HomePageThreeSlider.component.html',
            styleUrls: ['./HomePageThreeSlider.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], HomePageThreeSliderComponent);
    return HomePageThreeSliderComponent;
}());
export { HomePageThreeSliderComponent };
//# sourceMappingURL=HomePageThreeSlider.component.js.map