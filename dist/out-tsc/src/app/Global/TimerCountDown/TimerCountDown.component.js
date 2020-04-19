var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { interval as observableInterval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, Input } from '@angular/core';
var TimerCountDownComponent = /** @class */ (function () {
    function TimerCountDownComponent() {
    }
    TimerCountDownComponent.prototype.dhms = function (t) {
        if (t && t > 0) {
            var days = void 0, hours = void 0, minutes = void 0, seconds = void 0;
            days = Math.floor(t / 86400);
            t -= days * 86400;
            hours = Math.floor(t / 3600) % 24;
            t -= hours * 3600;
            minutes = Math.floor(t / 60) % 60;
            t -= minutes * 60;
            seconds = t % 60;
            if (hours < 10) {
                this.hours = '0' + hours;
            }
            else {
                this.hours = hours;
            }
            if (minutes < 10) {
                this.minutes = '0' + minutes;
            }
            else {
                this.minutes = minutes;
            }
            if (seconds < 10) {
                this.seconds = '0' + seconds;
            }
            else {
                this.seconds = seconds;
            }
        }
        else {
            this.hours = '00';
            this.minutes = '00';
            this.seconds = '00';
            this.subscription.unsubscribe();
        }
    };
    TimerCountDownComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dateTime) {
            this.future = this.dateTime;
            this.$counter = observableInterval(1000).pipe(map(function (x) {
                _this.diff = Math.floor((_this.future.getTime() - new Date().getTime()) / 1000);
                return x;
            }));
            this.subscription = this.$counter.subscribe(function (x) { return _this.dhms(_this.diff); });
        }
    };
    TimerCountDownComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TimerCountDownComponent.prototype, "dateTime", void 0);
    TimerCountDownComponent = __decorate([
        Component({
            selector: 'embryo-TimerCountDown',
            templateUrl: './TimerCountDown.component.html',
            styleUrls: ['./TimerCountDown.component.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], TimerCountDownComponent);
    return TimerCountDownComponent;
}());
export { TimerCountDownComponent };
//# sourceMappingURL=TimerCountDown.component.js.map