var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer2, ElementRef, ViewChild, Input } from '@angular/core';
var ImgZoomComponent = /** @class */ (function () {
    function ImgZoomComponent(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.hide = true;
        this._triggerAnimationIn = false;
        this.notFirstTime = false;
        this.imgStyle = '';
        this.resultStyle = 'width:300px; height:300px';
        this.lensStyle = 'width:30px; height:30px';
        this.containerStyle = 'position: absolute';
    }
    Object.defineProperty(ImgZoomComponent.prototype, "_imgSrc", {
        set: function (val) {
            this.imgSrc = val;
            if (this.notFirstTime === true) {
                this.renderer.setStyle(this.result, 'backgroundImage', "url('" + val + "')");
            }
            this.notFirstTime = true;
            // this.renderer.setStyle(this.result, 'backgroundImage', val);
        },
        enumerable: true,
        configurable: true
    });
    ImgZoomComponent.prototype.ngOnInit = function () {
    };
    ImgZoomComponent.prototype.ngAfterViewInit = function () {
        this.img = this.imgElmRef.nativeElement;
        this.result = this.resultElmRef.nativeElement;
        this.container = this.containerElmRef.nativeElement;
        this.renderer.setAttribute(this.img, 'style', this.imgStyle);
        this.renderer.setAttribute(this.result, 'style', this.resultStyle);
        this.renderer.setAttribute(this.container, 'style', this.containerStyle);
        this.imageZoom();
        this.renderer.setStyle(this.lens, 'visibility', 'hidden');
    };
    ImgZoomComponent.prototype.imageZoom = function () {
        /*create lens:*/
        this.lens = this.renderer.createElement('DIV');
        this.renderer.addClass(this.lens, 'img-zoom-lens');
        this.renderer.setAttribute(this.lens, 'style', this.lensStyle);
        /*insert lens:*/
        this.renderer.insertBefore(this.img.parentElement, this.lens, this.img);
        /*calculate the ratio between result DIV and lens:*/
        this.cx = this.result.offsetWidth / this.lens.offsetWidth;
        this.cy = this.result.offsetHeight / this.lens.offsetHeight;
        /*set background properties for the result DIV:*/
        this.renderer.setStyle(this.result, 'backgroundImage', "url('" + this.imgSrc + "')");
        this.renderer.setStyle(this.result, 'backgroundSize', (this.img.width * this.cx) + 'px ' + (this.img.height * this.cy) + 'px');
        // this.renderer.setStyle(this.img.parentElement, 'position', 'relative')
        /*execute a function when someone moves the cursor over the image, or the lens:*/
        this.renderer.listen(this.lens, 'mousemove', this.moveLens.bind(this));
        this.renderer.listen(this.img, 'mousemove', this.moveLens.bind(this));
        /*and also for touch screens:*/
        this.renderer.listen(this.img, 'touchmove', this.moveLens.bind(this));
        this.renderer.listen(this.lens, 'touchmove', this.moveLens.bind(this));
    };
    ImgZoomComponent.prototype.moveLens = function (e) {
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = this.getCursorPos(e);
        /*calculate the position of the lens:*/
        x = pos.x - (this.lens.offsetWidth / 2);
        y = pos.y - (this.lens.offsetHeight / 2);
        /*prevent the lens from being positioned outside the image:*/
        if (x > this.img.width - this.lens.offsetWidth) {
            x = this.img.width - this.lens.offsetWidth;
            this.hide = true;
            this.renderer.setStyle(this.lens, 'visibility', 'hidden');
        }
        else {
            this.hide = false;
            this.renderer.setStyle(this.lens, 'visibility', 'visible');
        }
        if (x < 0) {
            x = 0;
            this.hide = true;
            this.renderer.setStyle(this.lens, 'visibility', 'hidden');
        }
        if (y > this.img.height - this.lens.offsetHeight) {
            y = this.img.height - this.lens.offsetHeight;
            this.hide = true;
            this.renderer.setStyle(this.lens, 'visibility', 'hidden');
        }
        if (y < 0) {
            y = 0;
            this.hide = true;
            this.renderer.setStyle(this.lens, 'visibility', 'hidden');
        }
        /*set the position of the lens:*/
        this.renderer.setStyle(this.lens, 'left', x + 'px');
        this.renderer.setStyle(this.lens, 'top', y + 'px');
        /*display what the lens 'sees':*/
        this.renderer.setStyle(this.result, 'backgroundPosition', '-' + (x * this.cx) + 'px -' + (y * this.cy) + 'px');
    };
    ImgZoomComponent.prototype.getCursorPos = function (e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = this.img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    };
    __decorate([
        ViewChild('img', { static: false }),
        __metadata("design:type", ElementRef)
    ], ImgZoomComponent.prototype, "imgElmRef", void 0);
    __decorate([
        ViewChild('result', { static: false }),
        __metadata("design:type", ElementRef)
    ], ImgZoomComponent.prototype, "resultElmRef", void 0);
    __decorate([
        ViewChild('container', { static: false }),
        __metadata("design:type", ElementRef)
    ], ImgZoomComponent.prototype, "containerElmRef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ImgZoomComponent.prototype, "imgStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ImgZoomComponent.prototype, "resultStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ImgZoomComponent.prototype, "lensStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ImgZoomComponent.prototype, "containerStyle", void 0);
    __decorate([
        Input('imgSrc'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ImgZoomComponent.prototype, "_imgSrc", null);
    ImgZoomComponent = __decorate([
        Component({
            selector: 'embryo-ImgZoom',
            templateUrl: './ImgZoom.component.html',
            styleUrls: ['./ImgZoom.component.scss']
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], ImgZoomComponent);
    return ImgZoomComponent;
}());
export { ImgZoomComponent };
//# sourceMappingURL=ImgZoom.component.js.map