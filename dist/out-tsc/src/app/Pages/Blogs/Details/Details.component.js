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
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { EmbryoService } from '../../../Services/Embryo.service';
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(embryoService, route, router, formGroup) {
        this.embryoService = embryoService;
        this.route = route;
        this.router = router;
        this.formGroup = formGroup;
        this.emailPattern = /\S+@\S+\.\S+/;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentForm = this.formGroup.group({
            first_name: [''],
            last_name: [''],
            email: ['', Validators.pattern(this.emailPattern)],
            message: ['']
        });
        this.route.params.subscribe(function (res) {
            _this.blogId = res.id;
            _this.getBlodDetails();
        });
    };
    DetailsComponent.prototype.getBlodDetails = function () {
        var _this = this;
        this.blogId = (this.blogId) ? this.blogId : 1;
        this.embryoService.getBlogList().valueChanges().
            subscribe(function (res) { _this.getBlogDetailsResponse(res); });
    };
    DetailsComponent.prototype.getBlogDetailsResponse = function (response) {
        for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
            var data = response_1[_i];
            if (data.id == this.blogId) {
                this.blogDetails = data;
                break;
            }
        }
    };
    DetailsComponent.prototype.submitForm = function () {
        this.commentForm.value;
    };
    DetailsComponent = __decorate([
        Component({
            selector: 'app-Details',
            templateUrl: './Details.component.html',
            styleUrls: ['./Details.component.scss']
        }),
        __metadata("design:paramtypes", [EmbryoService,
            ActivatedRoute,
            Router,
            FormBuilder])
    ], DetailsComponent);
    return DetailsComponent;
}());
export { DetailsComponent };
//# sourceMappingURL=Details.component.js.map