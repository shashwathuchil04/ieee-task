webpackJsonp([0],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_custom_module__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]), __WEBPACK_IMPORTED_MODULE_0__components_custom_module__["a" /* CustomComoponentModule */]],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomComoponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomComoponentModule = /** @class */ (function () {
    function CustomComoponentModule() {
    }
    CustomComoponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__custom__["a" /* CustomComoponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__custom__["a" /* CustomComoponent */])],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__custom__["a" /* CustomComoponent */]
            ]
        })
    ], CustomComoponentModule);
    return CustomComoponentModule;
}());

//# sourceMappingURL=custom.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomComoponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomComoponent = /** @class */ (function () {
    function CustomComoponent() {
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CustomComoponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.lng);
    };
    CustomComoponent.prototype.ngOnchanges = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CustomComoponent.prototype, "lng", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CustomComoponent.prototype, "lat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], CustomComoponent.prototype, "messageEvent", void 0);
    CustomComoponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-Component',template:/*ion-inline-start:"/home/basavva/ieee-task/src/pages/home/components/custom.html"*/'<div style="height:200px" (click)="sendMessage()">\n<div>Latitude:  {{ lat }}</div>\n<div>Langitude: {{ lng }}</div>\n</div>\n'/*ion-inline-end:"/home/basavva/ieee-task/src/pages/home/components/custom.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CustomComoponent);
    return CustomComoponent;
}());

//# sourceMappingURL=custom.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_map_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(195);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(map, geolocation, storage, platform) {
        var _this = this;
        this.map = map;
        this.geolocation = geolocation;
        this.storage = storage;
        this.mapId = "map_canvas1";
        this.lastUpdateTime = new Date();
        this.minFrequency = 15000; // 15-seconds
        platform.ready().then(function () {
            _this.setupWatch();
        }).catch(function (err) {
            console.log("Error watching...", err);
        });
    }
    HomePage.prototype.receiveMessage = function ($event) {
        // this.message = $event
        console.log("mesage came from child");
    };
    HomePage.prototype.setupWatch = function () {
        var _this = this;
        console.log("Setting up watch...");
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // console.log("got subscribed data", data);
            if (data.coords === undefined) {
                // this.location = data.coords;
                return;
            }
            _this.error = null;
            // Ignore if its too soon...
            var now = new Date();
            var delta = now.getTime() - _this.lastUpdateTime.getTime();
            if (_this.lastUpdateTime && delta < _this.minFrequency) {
                // console.log("Ignoring position update.. too fast");
                return;
            }
            _this.lastUpdateTime = now;
            _this.locationLatData = data.coords.latitude;
            _this.locationLangData = data.coords.longitude;
            // Process the update..
            var coords = { lat: data.coords.latitude, lng: data.coords.longitude };
            _this.storage.get('location').then(function (val) {
                var values = [];
                if (val) {
                    // Reading the full values is inefficient.. Ideally this should
                    // be a DB table where we just insert rows...
                    values = JSON.parse(val);
                    // Add values to the front..
                    values.unshift(__assign({}, coords, { id: values.length + 1 }));
                }
                _this.storage.set('location', JSON.stringify(values));
            }).catch(function (err) {
                console.log('Error accessing location object from local storage', err);
            });
            // AttachMap will re-position camera to the new position...
            _this.map.attachMap(_this.mapId, coords, data.coords.accuracy);
        }, function (err) { console.log('Subscribe error', err); });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter');
        this.map.getMyLocation().then(function (location) {
            console.log("Location ", location, _this.map);
            if (_this.map) {
                _this.locationLatData = location.latLng.lat;
                _this.locationLangData = location.latLng.lng;
                _this.map.attachMap(_this.mapId, location.latLng, location.accuracy);
            }
        }).catch(function (error) {
            _this.error = error.error_message;
            console.log('Error get location', error);
        });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.map.detachMap();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/basavva/ieee-task/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div id="map_canvas1" *ngIf="!error"></div>\n  <div *ngIf="error">{{ error }}</div>\n  <custom-Component *ngIf="locationLatData" [lat]="locationLatData" [lng]="locationLangData" (messageEvent)="receiveMessage($event)"></custom-Component>\n</ion-content>\n'/*ion-inline-end:"/home/basavva/ieee-task/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_map_map__["a" /* MapProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map