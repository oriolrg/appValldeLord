webpackJsonp([1],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeodescobrirPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device_orientation__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the GeodescobrirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeodescobrirPage = (function () {
    function GeodescobrirPage(DatabaseProvider, navCtrl, navParams, geolocation, platform, loadingController, deviceOrientation, renderer) {
        var _this = this;
        this.DatabaseProvider = DatabaseProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.platform = platform;
        this.loadingController = loadingController;
        this.deviceOrientation = deviceOrientation;
        this.renderer = renderer;
        this.coords = { lat: 0, lng: 0 };
        this.testJson = [
            {
                "id": 1,
                "nom": "portals",
                "latitud": 42.136586,
                "longitud": 1.591382,
                "poblacio": "Sant Lloren\u00e7 de Morunys",
                "visitat": 0,
                "imatgePrincipal": "Cal-Tecu.jpg",
                "created_at": "2018-03-07 12:12:14",
                "updated_at": "2018-03-07 12:12:14"
            },
            {
                "id": 2,
                "nom": "portals",
                "latitud": 42.137068,
                "longitud": 1.591888,
                "poblacio": "Sant Lloren\u00e7 de Morunys",
                "visitat": 0,
                "imatgePrincipal": "Cal-Tecu.jpg",
                "created_at": "2018-03-07 12:12:14",
                "updated_at": "2018-03-07 12:12:14"
            },
            {
                "id": 3,
                "nom": "P",
                "latitud": 42.137535,
                "longitud": 1.591358,
                "poblacio": "Dsa",
                "visitat": 0,
                "imatgePrincipal": "jardi.jpg",
                "created_at": "2018-03-07 12:12:51",
                "updated_at": "2018-03-07 12:12:51"
            }
        ];
        this.desticoords = { lat: 42.182042, lng: 1.581289 };
        platform.ready().then(function () {
            // La plataforma esta lista y ya tenemos acceso a los plugins.
            _this.loading = _this.loadingController.create({
                content: 'Carregant...'
            });
            _this.loading.present();
            _this.obtenerPosicion();
        });
    }
    GeodescobrirPage.prototype.initialiseCanvas = function () {
        if (this._CANVAS.getContext) {
            this.setupCanvas();
        }
    };
    GeodescobrirPage.prototype.setupCanvas = function () {
        this._CONTEXT = this._CANVAS.getContext('2d');
        this._CONTEXT.fillStyle = "#fff";
        //this._CONTEXT.fillRect(0, 0, 200, 200);
    };
    GeodescobrirPage.prototype.clearCanvas = function () {
        this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
        this.setupCanvas();
    };
    GeodescobrirPage.prototype.obtenerPosicion = function () {
        var _this = this;
        // Watch the device compass heading change
        var PositionOptions = {
            enableHighAccuracy: true
        };
        var subscription = this.deviceOrientation.watchHeading().subscribe(function (res) {
            _this.compass = res.magneticHeading.toFixed(0);
            _this.drawAgulla();
        });
        this.geolocation.watchPosition(PositionOptions).subscribe(function (res) {
            _this.coords.lat = res.coords.latitude;
            _this.coords.lng = res.coords.longitude;
            if (_this.testJson.length > 0) {
                _this.getDistance(_this.coords.lat, _this.coords.lng, _this.testJson[0].latitud, _this.testJson[0].longitud);
                _this.loading.dismiss();
            }
            else {
                alert("Enorabona has completat el circuit");
            }
            if (_this.distancia < 10) {
                _this.testJson.splice(0, 1);
                alert("cap al següent punt");
            }
        });
    };
    GeodescobrirPage.prototype.getDistance = function (lat1, lon1, lat2, lon2) {
        var rad = function (x) { return x * Math.PI / 180; };
        var R = 6378137; //Radio de la tierra en m
        var dLat = rad(lat2 - lat1);
        var dLong = rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        this.distancia = (R * c).toFixed(1);
        this.dLat = (lat2 - lat1) * 100000;
        this.dLong = (lon2 - lon1) * 100000;
        this.getOrientacio();
        this.getAngle();
        this.dLat = Math.abs(this.dLat).toFixed(1);
        this.dLong = Math.abs(this.dLong).toFixed(1);
    };
    GeodescobrirPage.prototype.radians_to_degrees = function (radians) {
        var pi = Math.PI;
        return radians * (180 / pi);
    };
    GeodescobrirPage.prototype.getOrientacio = function () {
        if (this.dLat > 0) {
            this.direccioSN = 'N';
        }
        else {
            this.direccioSN = 'S';
        }
        if (this.dLong > 0) {
            this.direccioEW = 'E';
        }
        else {
            this.direccioEW = 'W';
        }
    };
    GeodescobrirPage.prototype.getAngle = function () {
        this.angleGrad = Math.atan2(Math.abs(this.dLat), Math.abs(this.dLong));
        //if( this.angleGrad <= 0 ){ this.angleGrad = this.angleGrad + ( 2 * Math.PI ) }
        this.angleGrad = this.radians_to_degrees(this.angleGrad).toFixed(0);
        if (this.dLat > 0 && this.dLong < 0) {
            this.angleGrad = parseInt(this.angleGrad) + 270;
        }
        else if (this.dLat > 0 && this.dLong > 0) {
            //this.angleGrad = parseInt(this.angleGrad) +270;
        }
        else if (this.dLat < 0 && this.dLong > 0) {
            this.angleGrad = parseInt(this.angleGrad) + 90;
        }
        else if (this.dLat < 0 && this.dLong < 0) {
            this.angleGrad = 270 - parseInt(this.angleGrad);
        }
    };
    GeodescobrirPage.prototype.drawAgulla = function () {
        this._CANVAS = this.canvasEl.nativeElement;
        this._CANVAS.width = 200;
        this._CANVAS.height = 200;
        this.initialiseCanvas();
        var width = 200;
        var height = 200;
        this.clearCanvas();
        var ctx = this._CONTEXT;
        ctx.translate(width / 2, height / 2);
        ctx.fillStyle = "#fff";
        ctx.rotate((Math.PI / 180) * this.compass);
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0, 200, 200);
        };
        img.src = 'assets/imgs/compass.png';
        ctx.translate(-width / 2, -height / 2);
    };
    GeodescobrirPage.prototype.ionViewDidLoad = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('canvasBrujola'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GeodescobrirPage.prototype, "canvasEl", void 0);
    GeodescobrirPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geodescobrir',template:/*ion-inline-start:"/home/oriol/apps/appValldeLord/src/pages/geodescobrir/geodescobrir.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n        <img class="left" src="assets/imgs/logo-vdl-mini.png"/>\n        <h2>Descobreix la Vall de Lord jugant</h2>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content  padding class="restaurant_background">\n\n    <ion-item>\n      <div>\n        <h1 text-center>{{compass}}°</h1>\n        <div class="brujola1">\n          <div text-center>\n            <ion-icon text-center name="md-arrow-dropdown" class="indicador"></ion-icon>\n          </div>\n          <div class="brujola" text-center>\n            <canvas #canvasBrujola></canvas>\n          </div>\n        </div>\n      </div>\n    </ion-item>\n    <ion-item text-center >\n      <h2>Proxim punt a:</h2>\n      <h2> Distancia: {{distancia}} m </h2>\n      <h2> Direcció: {{angleGrad}}°</h2>\n    </ion-item>\n</ion-content>\n`/*ion-inline-end:"/home/oriol/apps/appValldeLord/src/pages/geodescobrir/geodescobrir.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device_orientation__["a" /* DeviceOrientation */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], GeodescobrirPage);
    return GeodescobrirPage;
}());

//# sourceMappingURL=geodescobrir.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/geodescobrir/geodescobrir.module": [
		303,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restaurant_restaurant__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informacio_informacio__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geodescobrir_geodescobrir__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../home/home';
//import { InformacioPage } from '../details-restaurant/details-restaurant';
var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__geodescobrir_geodescobrir__["a" /* GeodescobrirPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__restaurant_restaurant__["a" /* RestaurantPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__informacio_informacio__["a" /* InformacioPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/oriol/apps/appValldeLord/src/pages/tabs/tabs.html"*/`<ion-tabs class="tabs-icon">\n  <ion-tab [root]="tab1Root" tabTitle="Geodescobrir" tabIcon="locate"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Restaurants" tabIcon="ios-restaurant"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Informació" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/home/oriol/apps/appValldeLord/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_info_restaurant_info_restaurant__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RestaurantPage = (function () {
    function RestaurantPage(DatabaseProvider, navCtrl, navParams, network, toastCtrl, platform, loadingController, device) {
        var _this = this;
        this.DatabaseProvider = DatabaseProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingController = loadingController;
        this.device = device;
        platform.ready().then(function () {
            //missatge de no connexió
            /*let disconnectSub = network.onDisconnect().subscribe(() => {
              this.offLine();
            });
      
            let connectSub = network.onConnect().subscribe(()=> {
              this.onLine();
            });*/
            //si tenim connexio carreguem pagina i mostrem missatge
            if (_this.network.type != 'none') {
                _this.onLine();
            }
            else {
                _this.offLine();
            }
        });
    }
    RestaurantPage.prototype.onLine = function () {
        var toast = this.toastCtrl.create({
            message: 'S\'està connectant',
            duration: 2000,
            position: 'bottom'
        });
        // La plataforma esta lista y ya tenemos acceso a los plugins.
        //toastCtrl.present();
        this.loading = this.loadingController.create({
            content: 'Carregant...'
        });
        this.loading.present();
        this.searchRestaurant();
        toast.present();
    };
    RestaurantPage.prototype.offLine = function () {
        var toast = this.toastCtrl.create({
            message: 'No hi ha connexió',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    RestaurantPage.prototype.searchRestaurant = function () {
        var _this = this;
        this.DatabaseProvider.getResaturant(this.device.uuid).subscribe(function (data) {
            _this.items = JSON.parse(data['_body']);
            _this.loading.dismiss();
        }, function (err) {
            console.log("Error: " + err);
        }, function () { return console.log('Busqueda restaurant completada'); });
    };
    RestaurantPage.prototype.changePage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_info_restaurant_info_restaurant__["a" /* InfoRestaurantPage */], {
            comData: data
        });
    };
    RestaurantPage.prototype.onChangeDia = function (dia) {
        var data;
        if (this.tmpHora) {
            if (dia == 0) {
                //obtenim dades segons data actual
                data = this.dataDiaHoraActual();
            }
            else {
                //obtenim dades segons dia
                data = this.dataDiaHora(dia);
            }
        }
        else {
            if (dia == 0) {
                //obtenim dades segons data actual
                data = this.dataDiaActual();
            }
            else {
                //obtenim dades segons dia
                data = this.dataDia(dia);
            }
        }
        this.sendData(data);
    };
    RestaurantPage.prototype.onChangeHora = function (hora) {
        var data;
        if (this.tmpDia) {
            if (hora == 'Hora actual') {
                data = this.dataHoraDiaActual();
            }
            else {
                data = this.dataHoraDia(hora);
            }
        }
        else {
            if (hora == 'Hora actual') {
                data = this.dataHoraActual();
            }
            else {
                data = this.dataHora(hora);
            }
        }
        this.sendData(data);
    };
    RestaurantPage.prototype.sendData = function (data) {
        var _this = this;
        this.DatabaseProvider.getResaturantFiltre(data).subscribe(function (data) {
            _this.items = JSON.parse(data['_body']);
            _this.loading.dismiss();
        }, function (err) {
            console.log("Error: " + err);
        }, function () { return console.log('Movie Search Complete'); });
    };
    RestaurantPage.prototype.dataDia = function (dia) {
        this.tmpDia = dia;
        return "dia/" + dia;
    };
    RestaurantPage.prototype.dataDiaActual = function () {
        var String = new Date();
        this.tmpDia = String.getDay();
        return "dia/" + this.tmpDia;
    };
    RestaurantPage.prototype.dataHora = function (hora) {
        this.tmpHora = hora;
        return "hora/" + hora;
    };
    RestaurantPage.prototype.dataHoraActual = function () {
        var String = new Date();
        this.tmpHora = String.getHours();
        return "hora/" + this.tmpHora;
    };
    RestaurantPage.prototype.dataDiaHora = function (dia) {
        this.tmpDia = dia;
        return "diahora/" + this.tmpDia + "/" + this.tmpHora;
    };
    RestaurantPage.prototype.dataDiaHoraActual = function () {
        var String = new Date();
        this.tmpDia = String.getDay();
        return "diahora/" + this.tmpDia + "/" + this.tmpHora;
    };
    RestaurantPage.prototype.dataHoraDia = function (hora) {
        this.tmpHora = hora;
        return "diahora/" + this.tmpDia + "/" + this.tmpHora;
    };
    RestaurantPage.prototype.dataHoraDiaActual = function () {
        var String = new Date();
        this.tmpHora = String.getHours();
        return "diahora/" + this.tmpDia + "/" + this.tmpHora;
    };
    RestaurantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurant',template:/*ion-inline-start:"/home/oriol/apps/appValldeLord/src/pages/restaurant/restaurant.html"*/`<ion-header>\n  <ion-navbar>\n        <ion-title>\n      <ion-grid class="graellaHeader">\n        <ion-row align-items-start class="filaHeader">\n          <ion-col col-2 class="imageHeader">\n          <img src="assets/imgs/logo-vdl-no-text.png"/>\n          </ion-col>\n          <ion-col col-10 class="colSelectHeader">\n          <ion-item class="selecHeader" no-lines>\n            <ion-select [(ngModel)]="dia" (ionChange)="onChangeDia(dia)" action-sheet placeholder="Dia Obert">\n              <ion-option value="0">Dia actual</ion-option>\n              <ion-option value="1">Dilluns</ion-option>\n              <ion-option value="2">Dimarts</ion-option>\n              <ion-option value="3">Dimecres</ion-option>\n              <ion-option value="4">Dijous</ion-option>\n              <ion-option value="5">Divendres</ion-option>\n              <ion-option value="6">Dissabte</ion-option>\n              <ion-option value="7">Diumenge</ion-option>\n            </ion-select>\n            <ion-select [(ngModel)]="hora" (ionChange)="onChangeHora(hora)" action-sheet   placeholder="Hora Cuina">\n              <ion-option>Hora actual</ion-option>\n              <ion-option>08:00</ion-option>\n              <ion-option>09:00</ion-option>\n              <ion-option>10:00</ion-option>\n              <ion-option>11:00</ion-option>\n              <ion-option>12:00</ion-option>\n              <ion-option>13:00</ion-option>\n              <ion-option>14:00</ion-option>\n              <ion-option>15:00</ion-option>\n              <ion-option>16:00</ion-option>\n              <ion-option>17:00</ion-option>\n              <ion-option>18:00</ion-option>\n              <ion-option>19:00</ion-option>\n              <ion-option>20:00</ion-option>\n              <ion-option>21:00</ion-option>\n              <ion-option>22:00</ion-option>\n              <ion-option>23:00</ion-option>\n              <ion-option>00:00</ion-option>\n            </ion-select>\n          </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="restaurant_background">\n  <ion-item *ngIf="items?.length == 0" text-center>\n    <ion-item text-center no-lines><ion-icon name="warning" [ngStyle]="{\'color\': \'red\', \'font-size\': \'50px\'}"></ion-icon></ion-item>\n    <ion-item text-center no-lines>No hi ha dades disponibles</ion-item>\n    <ion-item *ngIf="dia==0" text-center no-lines>Dia: Avui</ion-item>\n    <ion-item *ngIf="dia==1" text-center no-lines>Dia: Dilluns</ion-item>\n    <ion-item *ngIf="dia==2" text-center no-lines>Dia: Dimarts</ion-item>\n    <ion-item *ngIf="dia==3" text-center no-lines>Dia: Dimecres</ion-item>\n    <ion-item *ngIf="dia==4" text-center no-lines>Dia: Dijous</ion-item>\n    <ion-item *ngIf="dia==5" text-center no-lines>Dia: Divendres</ion-item>\n    <ion-item *ngIf="dia==6" text-center no-lines>Dia: Dissabte</ion-item>\n    <ion-item *ngIf="dia==7" text-center no-lines>Dia: Diumenge</ion-item>\n   <ion-item *ngIf="hora" text-center no-lines>Hora: {{hora}} </ion-item>\n  </ion-item>\n  <ion-item *ngFor="let item of items">\n    <ion-item no-lines>\n      <ion-icon name="restaurant" item-left></ion-icon>\n      <h1>{{item.nom}}</h1>\n    </ion-item>\n    <ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12 col-sm>\n            <img (click)="changePage(item)" src="http://lavalldelord.com/appvallLord/storage/app/images/{{item.imatgePrincipal}}" class="img_thumbnail">\n          </ion-col>\n          <ion-col col-12 col-sm>\n            <ion-item no-lines>\n              <ion-icon name="locate" item> {{item.poblacio}}</ion-icon>\n            </ion-item>\n            <ion-item no-lines>\n              <ion-icon name="clock" item>\n                <ng-container *ngIf="item.obertura_dia">Cuina de {{item.obertura_dia}}h a {{item.tancament_dia}}h i </ng-container>\n                <ng-container *ngIf="!item.obertura_dia">Dinars tancat i </ng-container>\n                <ng-container *ngIf="item.obertura_nit">de {{item.obertura_nit}}h a {{item.tancament_nit}}h</ng-container>\n                <ng-container *ngIf="!item.obertura_nit">Sopars tancat</ng-container>\n              </ion-icon><br />\n            </ion-item>\n            <ion-item no-lines>\n              <a href="tel:{{item.telefon}}"><ion-icon name="call" item> {{item.telefon}}</ion-icon></a>\n            </ion-item>\n          </ion-col>\n            <button ion-button full (click)="changePage(item)">Detalls</button>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n  </ion-item>\n\n</ion-content>\n`/*ion-inline-end:"/home/oriol/apps/appValldeLord/src/pages/restaurant/restaurant.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], RestaurantPage);
    return RestaurantPage;
}());

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoRestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InfoRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoRestaurantPage = (function () {
    function InfoRestaurantPage(DatabaseProvider, navCtrl, navParams) {
        this.DatabaseProvider = DatabaseProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkmark = '#f53d3d';
    }
    InfoRestaurantPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InfoRestaurantPage');
        this.data = this.navParams.get('comData');
        this.DatabaseProvider.getItems(this.data.id).subscribe(function (data) {
            _this.items = JSON.parse(data['_body']);
            _this.loading.dismiss();
        }, function (err) {
            console.log("Error: " + err);
        }, function () { return console.log('Movie Search Complete'); });
    };
    InfoRestaurantPage.prototype.obreMaps = function (direccio, poblacio) {
        window.open('https://www.google.com/maps/search/' + direccio + ',' + poblacio + '/', '_system', 'location=yes');
    };
    InfoRestaurantPage.prototype.obreMapsIndicacions = function (direccio, poblacio) {
        window.open('https://www.google.com/maps/dir//' + direccio + ',' + poblacio + '/', '_system', 'location=yes');
    };
    InfoRestaurantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-restaurant',template:/*ion-inline-start:"/home/oriol/apps/appValldeLord/src/pages/info-restaurant/info-restaurant.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n        <img src="assets/imgs/logo-vdl-mini.png"/>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-card *ngIf="data">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-sm>\n          <img src="http://lavalldelord.com/appvallLord/storage/app/images/{{data.imatgeSecundaria}}">\n          <ion-fab right top>\n            <button ion-fab (click)="obreMaps(data.direccio,data.poblacio)">\n              <ion-icon name="pin"></ion-icon>\n            </button>\n          </ion-fab>\n        </ion-col>\n        <ion-col col-12 col-sm>\n          <ion-item>\n            <h1>\n              <strong>{{data.nom}}</strong>\n            </h1>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="logo-euro" item></ion-icon> Des de {{data.preu}}€\n          </ion-item>\n          <ion-item no-lines>\n            <ion-icon name="locate" item> {{data.poblacio}}</ion-icon>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-icon name="clock" item> Cuina de {{data.obertura_dia}}h a {{data.tancament_dia}}h i <br /> de {{data.obertura_nit}}h a {{data.tancament_nit}}h</ion-icon><br />\n          </ion-item>\n          <ion-item no-lines>\n            <a href="tel:{{data.telefon}}"><ion-icon name="call" item> {{data.telefon}}</ion-icon></a>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-sm>\n          <ion-item *ngFor="let item of items">\n            <ion-list inset>\n              <ion-item>\n                Menú\n                <ion-icon *ngIf="item.Menu===\'checkmark-circle\'" name={{item.Menu}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n                <ion-icon *ngIf="item.Menu===\'close-circle\'" name={{item.Menu}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                Menu infantil\n                <ion-icon *ngIf="item.MenuInfantil===\'checkmark-circle\'" name={{item.MenuInfantil}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n                <ion-icon *ngIf="item.MenuInfantil===\'close-circle\'" name={{item.MenuInfantil}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                Carta\n                <ion-icon *ngIf="item.Carta===\'checkmark-circle\'" name={{item.Carta}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n                <ion-icon *ngIf="item.Carta===\'close-circle\'" name={{item.Carta}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                Cuina Catalana\n                <ion-icon *ngIf="item.CuinaCatalana===\'checkmark-circle\'" name={{item.CuinaCatalana}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n                <ion-icon *ngIf="item.CuinaCatalana===\'close-circle\'" name={{item.CuinaCatalana}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                Pizza\n                <ion-icon *ngIf="item.Pizza===\'checkmark-circle\'" name={{item.Pizza}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n                <ion-icon *ngIf="item.Pizza===\'close-circle\'" name={{item.Pizza}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                Plats combinats\n                <ion-icon *ngIf="item.PlatsCombinats===\'checkmark-circle\'" name={{item.PlatsCombinats}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n                <ion-icon *ngIf="item.PlatsCombinats===\'close-circle\'" name={{item.PlatsCombinats}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                Entrepans\n                <ion-icon *ngIf="item.Entrepans===\'checkmark-circle\'" name={{item.Entrepans}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n                <ion-icon *ngIf="item.Entrepans===\'close-circle\'" name={{item.Entrepans}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                <!--<ion-icon name="eye" [ngStyle]="{\'color\': \'orange\'}" item> </ion-icon>-->\n                Brasa\n                <ion-icon *ngIf="item.Brasa===\'checkmark-circle\'" name={{item.Brasa}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n                <ion-icon *ngIf="item.Brasa===\'close-circle\'" name={{item.Brasa}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                Terrassa\n                <ion-icon *ngIf="item.Terrasa===\'checkmark-circle\'" name={{item.Terrasa}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n                <ion-icon *ngIf="item.Terrasa===\'close-circle\'" name={{item.Terrasa}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n              </ion-item>\n              <ion-item>\n                Tapes\n                <ion-icon *ngIf="item.Tapes===\'checkmark-circle\'" name={{item.Tapes}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n                <ion-icon *ngIf="item.Tapes===\'close-circle\'" name={{item.Tapes}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n              </ion-item>\n              <!--<ion-item>\n              <ion-icon name="eye" [ngStyle]="{\'color\': \'orange\'}" item> </ion-icon> <i>Trucar prèviament</i>\n              </ion-item>-->\n            </ion-list>\n          </ion-item>\n          <button ion-button full (click)="obreMapsIndicacions(data.direccio,data.poblacio)">\n            <ion-icon name="navigate" text-center [ngStyle]="{\'font-size\': \'40px\'}"></ion-icon> Com arribar\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n`/*ion-inline-end:"/home/oriol/apps/appValldeLord/src/pages/info-restaurant/info-restaurant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InfoRestaurantPage);
    return InfoRestaurantPage;
}());

//# sourceMappingURL=info-restaurant.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformacioPage = (function () {
    function InformacioPage(navCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.emailComposer = emailComposer;
        this.prova = 'ionic';
    }
    InformacioPage.prototype.sendEmail = function () {
        var email = {
            to: 'info@lavalldelord.com',
            cc: '',
            subject: 'App Vall de Lord Consulta',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    InformacioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-informacio',template:/*ion-inline-start:"/home/oriol/apps/appValldeLord/src/pages/informacio/informacio.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n        <img src="assets/imgs/logo-vdl-mini.png"/>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding class="restaurant_background">\n  <ion-list ion-item>\n    <h2>App de la Vall de Lord</h2>\n    <span>Per qualsevol comentari o problemàtica, poseu-vos en contacte amb l\'Oficina de Turisme de la Vall de Lord</span><br />\n    <h3>Segueix-nos a:</h3><br />\n    <button ion-item onclick="window.open(\'https://twitter.com/valldelord\', \'_system\', \'location=yes\'); return false;">\n      <ion-icon name="logo-twitter" [ngStyle]="{\'color\': \'blue\'}" item></ion-icon>\n        <span [ngStyle]="{\'color\': \'blue\'}">Twitter</span>\n    </button>\n    <button ion-item onclick="window.open(\'https://www.instagram.com/turismevalldelord/\', \'_system\', \'location=yes\'); return false;">\n      <ion-icon name="logo-instagram" [ngStyle]="{\'color\': \'blue\'}" item></ion-icon>\n        <span [ngStyle]="{\'color\': \'blue\'}">Instagram</span>\n    </button>\n    <button ion-item onclick="window.open(\'https://www.facebook.com/turismevalldelord\', \'_system\', \'location=yes\'); return false;">\n      <ion-icon name="logo-facebook" [ngStyle]="{\'color\': \'blue\'}" item></ion-icon>\n        <span [ngStyle]="{\'color\': \'blue\'}">Faceboock</span>\n    </button>\n    <button ion-item onclick="window.open(\'http://lavalldelord.com\', \'_system\', \'location=yes\'); return false;">\n      <ion-icon name="logo-wordpress" [ngStyle]="{\'color\': \'blue\'}" item></ion-icon>\n        <span [ngStyle]="{\'color\': \'blue\'}">Web de la Vall de Lord</span>\n    </button>\n    <!--<button ion-item (click)="sendEmail()">\n      <ion-icon name="mail" [ngStyle]="{\'color\': \'blue\'}" item></ion-icon>\n        <span [ngStyle]="{\'color\': \'blue\'}">info@lavalldelord.com</span>\n    </button>-->\n    <br />\n    <h3><strong>Associació Turisme Vall de Lord</strong><br />\n    <span>Oficina de turisme de la Vall de Lord<br />\n    25282 St. Llorenç de Morunys<br />\n    info@lavalldelord.com<br />\n    Telèfon: <a href="tel:973492181"><ion-icon name="call" item>973492181</ion-icon></a></span></h3>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/oriol/apps/appValldeLord/src/pages/informacio/informacio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], InformacioPage);
    return InformacioPage;
}());

//# sourceMappingURL=informacio.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_email_composer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_restaurant_restaurant__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_informacio_informacio__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_geodescobrir_geodescobrir__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_info_restaurant_info_restaurant__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_database_database__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_geolocation_geolocation__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_device_orientation__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_geodescobrir_geodescobrir__["a" /* GeodescobrirPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_restaurant_restaurant__["a" /* RestaurantPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_informacio_informacio__["a" /* InformacioPage */],
                //HomePage,
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_info_restaurant_info_restaurant__["a" /* InfoRestaurantPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/geodescobrir/geodescobrir.module#GeodescobrirPageModule', name: 'GeodescobrirPage', segment: 'geodescobrir', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__["a" /* IonicImageLoader */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_geodescobrir_geodescobrir__["a" /* GeodescobrirPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_restaurant_restaurant__["a" /* RestaurantPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_informacio_informacio__["a" /* InformacioPage */],
                //HomePage,
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_info_restaurant_info_restaurant__["a" /* InfoRestaurantPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_18__providers_geolocation_geolocation__["a" /* GeolocationProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_device_orientation__["a" /* DeviceOrientation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_NAME_APP_TEST; });
/* unused harmony export SERVER_NAME_LOCAL */
/* unused harmony export SERVER_NAME_LOCAL2 */
/* unused harmony export SERVER_NAME_PROXY */
/* unused harmony export SERVER_NAME_APP_PUB_IMG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SERVER_NAME_GEO; });
var SERVER_NAME_APP_TEST = "http://lavalldelord.com/appvallLord/public/";
var SERVER_NAME_LOCAL = "http://lavalldelord.com/appvallLordbeta/public/";
var SERVER_NAME_LOCAL2 = "http://localhost/";
var SERVER_NAME_PROXY = "";
var SERVER_NAME_APP_PUB_IMG = "http://lavalldelord.com/appvallLord/storage/app/images/";
var SERVER_NAME_GEO = "";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, geolocation) {
        this.geolocation = geolocation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/oriol/apps/appValldeLord/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/home/oriol/apps/appValldeLord/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeolocationProvider = (function () {
    function GeolocationProvider(http) {
        this.http = http;
        console.log('Hello GeolocationProvider Provider');
    }
    GeolocationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GeolocationProvider);
    return GeolocationProvider;
}());

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = (function () {
    function DatabaseProvider(http) {
        this.http = http;
        console.log('Hello DatabaseProvider Provider');
    }
    Object.defineProperty(DatabaseProvider, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    //Obté informació dels diferents restaurants
    DatabaseProvider.prototype.getResaturant = function (device) {
        //SERVER_NAME_APP_TEST servidor online
        //SERVER_NAME_LOCAL servudor local
        //SERVER_NAME_PROXY proxy
        var url = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* SERVER_NAME_APP_TEST */] + 'restaurant/' + device;
        //var url = Constant.SERVER_NAME_PROXY+'restaurant/';
        //TODO funciona var response = this.http.get(url+lat+'/'+lon);
        var response = this.http.get(url);
        console.log(url);
        //alert(response);
        return response;
    };
    DatabaseProvider.prototype.getResaturantDia = function () {
        //SERVER_NAME_APP_TEST servidor online
        //SERVER_NAME_LOCAL servudor local
        //SERVER_NAME_PROXY proxy
        var url = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* SERVER_NAME_APP_TEST */] + 'restaurant/';
        //var url = Constant.SERVER_NAME_PROXY+'restaurant/';
        //TODO funciona var response = this.http.get(url+lat+'/'+lon);
        var response = this.http.get(url);
        console.log(url);
        //alert(response);
        return response;
    };
    DatabaseProvider.prototype.getResaturantFiltre = function (dia) {
        //SERVER_NAME_APP_TEST servidor online
        //SERVER_NAME_LOCAL servudor local
        //SERVER_NAME_PROXY proxy
        var url = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* SERVER_NAME_APP_TEST */] + 'restaurant/' + dia;
        //alert(url);
        //var url = Constant.SERVER_NAME_PROXY+'restaurant/';
        //TODO funciona var response = this.http.get(url+lat+'/'+lon);
        var response = this.http.get(url);
        console.log(url);
        //alert(response);
        return response;
    };
    DatabaseProvider.prototype.getItems = function ($id) {
        //alert("databaseprovider"+$id);
        var url = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* SERVER_NAME_APP_TEST */] + 'restaurant/item/' + $id;
        var response = this.http.get(url);
        return response;
    };
    DatabaseProvider.prototype.getRutes = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* SERVER_NAME_GEO */] + 'rutes/';
        var response = this.http.get(url);
        return response;
    };
    DatabaseProvider.prototype.getPunts = function ($id) {
        //alert("databaseprovider"+$id);
        var url = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* SERVER_NAME_GEO */] + 'rutes/' + $id;
        var response = this.http.get(url);
        return response;
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map