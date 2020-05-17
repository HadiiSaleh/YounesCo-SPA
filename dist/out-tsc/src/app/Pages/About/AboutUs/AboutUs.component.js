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
import { EmbryoService } from '../../../Services/Embryo.service';
var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(embryoService) {
        this.embryoService = embryoService;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        this.getAboutInfo();
        this.getMissionVision();
        this.getTestimonialData();
        this.getTeamData();
    };
    AboutUsComponent.prototype.getAboutInfo = function () {
        var _this = this;
        this.embryoService.getAboutInfo().valueChanges().subscribe(function (res) { _this.aboutInfo = res; });
    };
    AboutUsComponent.prototype.getMissionVision = function () {
        var _this = this;
        this.embryoService.getMissionVision().valueChanges().subscribe(function (res) { _this.missionVisionData = res; });
    };
    AboutUsComponent.prototype.getTeamData = function () {
        var _this = this;
        this.embryoService.getTeam().valueChanges().subscribe(function (res) { _this.teamData = res; });
    };
    AboutUsComponent.prototype.getTestimonialData = function () {
        var _this = this;
        this.embryoService.getTestimonial().valueChanges().subscribe(function (res) { _this.testimonialData = res; });
    };
    AboutUsComponent = __decorate([
        Component({
            selector: 'app-AboutUs',
            templateUrl: './AboutUs.component.html',
            styleUrls: ['./AboutUs.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
export { AboutUsComponent };
//# sourceMappingURL=AboutUs.component.js.map