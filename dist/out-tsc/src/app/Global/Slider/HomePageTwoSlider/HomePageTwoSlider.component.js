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
var HomePageTwoSliderComponent = /** @class */ (function () {
    function HomePageTwoSliderComponent() {
        this.slides = [
            {
                img: "assets/images/home2-slider-1.jpg",
                content: "<h4>New Arrival</h4><h1 class='text-main'>Biggest Sale</h1><h1 class='text-bold mb-4'>50% <sup class='bold-sup'>Flat Off</sup></h1>"
            },
            {
                img: "assets/images/home2-slider-2.jpg",
                content: "<h4>Women's Special</h4><h1 class='text-main'>Winter Sale </h1><h1 class='text-bold mb-4'>40% <sup class='bold-sup'>Off</sup></h1>"
            },
            {
                img: "assets/images/home2-slider-3.jpg",
                content: "<h4>Special Deal</h4><h1 class='text-main'>Mens Collection</h1><h1 class='text-bold mb-4'>30% <sup class='bold-sup'>Off</sup></h1>"
            },
            {
                img: "assets/images/home2-slider-4.jpg",
                content: "<h4>Sunglasses</h4><h1 class='text-main'>Weekly Offer</h1><h1 class='text-bold mb-4'>30% <sup class='bold-sup'>Off</sup></h1>"
            },
            {
                img: "assets/images/home2-slider-5.jpg",
                content: "<h4>New Arrival</h4><h1 class='text-main'>Sports Shoes</h1><h1 class='text-bold mb-4'>50% <sup class='bold-sup'>Flat Off</sup></h1>"
            },
            {
                img: "assets/images/home2-slider-6.jpg",
                content: "<h4>Accessories</h4><h1 class='text-main'>Smart Offer</h1><h1 class='text-bold mb-4'>40% <sup class='bold-sup'>Flat Off</sup></h1>"
            }
        ];
    }
    HomePageTwoSliderComponent.prototype.ngOnInit = function () {
    };
    HomePageTwoSliderComponent.prototype.ngOnChanges = function () {
        this.slideConfig = {
            infinite: true,
            centerMode: true,
            centerPadding: '400px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '300px',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '150px',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 899,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '75px',
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
                        centerMode: false,
                        centerPadding: '0',
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
                        centerMode: false,
                        centerPadding: '0',
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
        __metadata("design:type", Object)
    ], HomePageTwoSliderComponent.prototype, "isRTL", void 0);
    HomePageTwoSliderComponent = __decorate([
        Component({
            selector: 'embryo-HomePageTwoSlider',
            templateUrl: './HomePageTwoSlider.component.html',
            styleUrls: ['./HomePageTwoSlider.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], HomePageTwoSliderComponent);
    return HomePageTwoSliderComponent;
}());
export { HomePageTwoSliderComponent };
//# sourceMappingURL=HomePageTwoSlider.component.js.map