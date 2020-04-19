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
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
        this.userReviews = [];
    }
    ReviewComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    ReviewComponent.prototype.getReviews = function () {
        this.userReviews = [];
        if (this.reviews && this.reviews.length > 0) {
            for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
                var review = _a[_i];
                for (var _b = 0, _c = review.user_rating; _b < _c.length; _b++) {
                    var userReview = _c[_b];
                    this.userReviews.push(userReview);
                }
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ReviewComponent.prototype, "reviews", void 0);
    ReviewComponent = __decorate([
        Component({
            selector: 'embryo-Review',
            templateUrl: './Review.component.html',
            styleUrls: ['./Review.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());
export { ReviewComponent };
//# sourceMappingURL=Review.component.js.map