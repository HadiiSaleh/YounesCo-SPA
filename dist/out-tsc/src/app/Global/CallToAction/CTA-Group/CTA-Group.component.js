var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var CTAGroupComponent = /** @class */ (function () {
    function CTAGroupComponent() {
        this.callToActionArray = [
            {
                img_path: "assets/images/mobile.jpg",
                route: "/products/gadgets/12"
            },
            {
                img_path: "assets/images/sports.jpg",
                route: "/products/men/3"
            },
            {
                img_path: "assets/images/headphone.jpg",
                route: "/products/gadgets/11"
            },
            {
                img_path: "assets/images/t-shirts.jpg",
                route: "/products/men/5"
            },
            {
                img_path: "assets/images/watch.jpg",
                route: "/products/gadgets/14"
            },
            {
                img_path: "assets/images/shoes.jpg",
                route: "/products/men/6"
            }
        ];
    }
    CTAGroupComponent.prototype.ngOnInit = function () {
    };
    CTAGroupComponent = __decorate([
        Component({
            selector: 'embryo-CtaGroup',
            templateUrl: './CTA-Group.component.html',
            styleUrls: ['./CTA-Group.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CTAGroupComponent);
    return CTAGroupComponent;
}());
export { CTAGroupComponent };
//# sourceMappingURL=CTA-Group.component.js.map