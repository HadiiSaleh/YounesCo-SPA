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
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.mapOptions = {
            lat: 33.5362475,
            lng: -111.9267386,
            zoom: 10,
            fillColor: '#DC143C',
            draggable: true,
            editable: true,
            visible: true,
        };
        this.showMap = false;
        this.icon = {
            url: './assets/images/flag.svg',
            scaledSize: {
                width: 40,
                height: 60
            }
        };
    }
    MapComponent.prototype.ngOnInit = function () {
        if (this.address) {
            this.getLatitudeLongitude(this.address);
        }
    };
    MapComponent.prototype.getLatitudeLongitude = function (address) {
        // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
        address = address || 'Ferrol, Galicia, Spain';
        var NewMapOptions = this.mapOptions;
        // Initialize the Geocoder
        var geocoder = new google.maps.Geocoder();
        if (geocoder) {
            geocoder.geocode({
                'address': address
            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    NewMapOptions.lat = results[0].geometry.location.lat();
                    NewMapOptions.lng = results[0].geometry.location.lng();
                }
            });
            this.mapOptions.lat = NewMapOptions.lat;
            this.mapOptions.lng = NewMapOptions.lng;
            this.showMap = true;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "address", void 0);
    MapComponent = __decorate([
        Component({
            selector: 'embryo-Map',
            templateUrl: './Map.component.html',
            styleUrls: ['./Map.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());
export { MapComponent };
//# sourceMappingURL=Map.component.js.map