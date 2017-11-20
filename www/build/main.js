webpackJsonp([1],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoRestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(79);
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
        this.ionViewDidLoad();
    }
    InfoRestaurantPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InfoRestaurantPage');
        this.data = this.navParams.get('comData');
        //alert(this.data.id);
        //alert(this.navParams.get('param2'));
        this.DatabaseProvider.getItems(this.data.id).subscribe(function (data) {
            //SERVER_NAME_APP_TEST servidor online
            //SERVER_NAME_LOCAL servudor local
            //SERVER_NAME_PROXY proxy
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
            selector: 'page-info-restaurant',template:/*ion-inline-start:"/home/oriol/ValldeLord/appValldeLord/src/pages/info-restaurant/info-restaurant.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n        <img src="assets/imgs/logo-vdl-mini.png"/>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-card *ngIf="data">\n    <img src="http://lavalldelord.com/appvallLord/storage/app/images/{{data.imatgeSecundaria}}">\n    <ion-fab right top>\n      <button ion-fab (click)="obreMaps(data.direccio,data.poblacio)">\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n\n    <ion-item>\n      <ion-list>\n        <ion-item>\n          <!--<ion-icon name="restaurant" item-left large ></ion-icon>-->\n          <h1>\n            <strong>{{data.nom}}</strong>\n          </h1>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="logo-euro" item></ion-icon> Des de {{data.preu}}€\n        </ion-item>\n      </ion-list>\n    </ion-item>\n\n    <ion-item *ngFor="let item of items">\n      <ion-list inset>\n        <ion-item>\n          Menú\n          <ion-icon *ngIf="item.Menu===\'checkmark-circle\'" name={{item.Menu}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n          <ion-icon *ngIf="item.Menu===\'close-circle\'" name={{item.Menu}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          Menu infantil\n          <ion-icon *ngIf="item.MenuInfantil===\'checkmark-circle\'" name={{item.MenuInfantil}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n          <ion-icon *ngIf="item.MenuInfantil===\'close-circle\'" name={{item.MenuInfantil}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          Carta\n          <ion-icon *ngIf="item.Carta===\'checkmark-circle\'" name={{item.Carta}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n          <ion-icon *ngIf="item.Carta===\'close-circle\'" name={{item.Carta}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          Cuina Catalana\n          <ion-icon *ngIf="item.CuinaCatalana===\'checkmark-circle\'" name={{item.CuinaCatalana}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n          <ion-icon *ngIf="item.CuinaCatalana===\'close-circle\'" name={{item.CuinaCatalana}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          Pizza\n          <ion-icon *ngIf="item.Pizza===\'checkmark-circle\'" name={{item.Pizza}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n          <ion-icon *ngIf="item.Pizza===\'close-circle\'" name={{item.Pizza}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          Plats combinats\n          <ion-icon *ngIf="item.PlatsCombinats===\'checkmark-circle\'" name={{item.PlatsCombinats}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n          <ion-icon *ngIf="item.PlatsCombinats===\'close-circle\'" name={{item.PlatsCombinats}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          Entrepans\n          <ion-icon *ngIf="item.Entrepans===\'checkmark-circle\'" name={{item.Entrepans}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n          <ion-icon *ngIf="item.Entrepans===\'close-circle\'" name={{item.Entrepans}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          Apte per celiacs\n          <ion-icon *ngIf="item.ApteCeliacs===\'checkmark-circle\'" name={{item.ApteCeliacs}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n          <ion-icon *ngIf="item.ApteCeliacs===\'close-circle\'" name={{item.ApteCeliacs}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          Terrassa\n          <ion-icon *ngIf="item.Terrasa===\'checkmark-circle\'" name={{item.Terrasa}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n          <ion-icon *ngIf="item.Terrasa===\'close-circle\'" name={{item.Terrasa}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n          Zona d’esbarjo\n          <ion-icon *ngIf="item.ZonaEsbarjo===\'checkmark-circle\'" name={{item.ZonaEsbarjo}}  [ngStyle]="{\'color\': \'green\'}" item-end></ion-icon>\n          <ion-icon *ngIf="item.ZonaEsbarjo===\'close-circle\'" name={{item.ZonaEsbarjo}}  [ngStyle]="{\'color\': \'red\'}" item-end></ion-icon>\n        </ion-item>\n      </ion-list>\n    </ion-item>\n    <ion-item>\n\n    </ion-item>\n    <ion-item>\n        <button ion-button icon-left (click)="obreMapsIndicacions(data.direccio,data.poblacio)">\n          <ion-icon name="navigate"></ion-icon>\n          {{data.direccio}}\n        </button>\n<!--window.open(\'https://www.google.com/maps/dir//\'[data.direccio]\',\'data.poblacio\'/\', \'_system\', \'location=yes\'); return false;-->\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"/home/oriol/ValldeLord/appValldeLord/src/pages/info-restaurant/info-restaurant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InfoRestaurantPage);
    return InfoRestaurantPage;
}());

//# sourceMappingURL=info-restaurant.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/info-restaurant/info-restaurant.module": [
		292,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restaurant_restaurant__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informacio_informacio__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { InformacioPage } from '../details-restaurant/details-restaurant';
var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__restaurant_restaurant__["a" /* RestaurantPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__informacio_informacio__["a" /* InformacioPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/oriol/ValldeLord/appValldeLord/src/pages/tabs/tabs.html"*/`<ion-tabs class="tabs-icon">\n  <!--<ion-tab [root]="tab1Root" tabTitle="Inici" tabIcon="home"></ion-tab>-->\n  <ion-tab [root]="tab2Root" tabTitle="Restaurants" tabIcon="ios-restaurant"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Informació" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/home/oriol/ValldeLord/appValldeLord/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_info_restaurant_info_restaurant__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(159);
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










//import { DetailsRestaurantPage } from '../details-restaurant/details-restaurant';
var RestaurantPage = (function () {
    //restRoot = DetailsRestaurantPage;
    function RestaurantPage(//private reversePipe: ReversePipe,
        DatabaseProvider, navCtrl, navParams, http, network, toastCtrl, 
        //private geolocation: Geolocation,
        platform, loadingController) {
        var _this = this;
        this.DatabaseProvider = DatabaseProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingController = loadingController;
        this.online = false;
        this.wifi = false;
        platform.ready().then(function () {
            //missatge de no connexió
            var disconnectSub = network.onDisconnect().subscribe(function () {
                _this.offLine();
            });
            var connectSub = network.onConnect().subscribe(function () {
                _this.onLine();
            });
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
        //alert(Constant.SERVER_NAME_APP_TEST+'restaurant/');
        this.DatabaseProvider.getResaturant().subscribe(function (data) {
            //SERVER_NAME_APP_TEST servidor online
            //SERVER_NAME_LOCAL servudor local
            //SERVER_NAME_PROXY proxy
            _this.items = JSON.parse(data['_body']);
            _this.loading.dismiss();
        }, function (err) {
            console.log("Error: " + err);
        }, function () { return console.log('Movie Search Complete'); });
    };
    RestaurantPage.prototype.changePage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_info_restaurant_info_restaurant__["a" /* InfoRestaurantPage */], {
            comData: data
        });
    };
    RestaurantPage.prototype.onChangeDia = function (dia) {
        var _this = this;
        if (dia != 0) {
            var data = "dia/" + dia;
            this.DatabaseProvider.getResaturantFiltre(data).subscribe(function (data) {
                //SERVER_NAME_APP_TEST servidor online
                //SERVER_NAME_LOCAL servudor local
                //SERVER_NAME_PROXY proxy
                _this.items = JSON.parse(data['_body']);
                _this.loading.dismiss();
            }, function (err) {
                console.log("Error: " + err);
            }, function () { return console.log('Movie Search Complete'); });
        }
        else {
            //obtenim dades segons data actual
            var String_1 = new Date();
            alert(String_1.getDay());
            var data = "dia/" + String_1.getDay();
            this.DatabaseProvider.getResaturantFiltre(data).subscribe(function (data) {
                //SERVER_NAME_APP_TEST servidor online
                //SERVER_NAME_LOCAL servudor local
                //SERVER_NAME_PROXY proxy
                _this.items = JSON.parse(data['_body']);
                _this.loading.dismiss();
            }, function (err) {
                console.log("Error: " + err);
            }, function () { return console.log('Movie Search Complete'); });
        }
    };
    RestaurantPage.prototype.onChangeHora = function (hora) {
        var _this = this;
        //alert(hora);
        if (hora == 'Hora actual') {
            var String_2 = new Date();
            //alert(String.getHours());
            var data_1 = "hora/" + String_2.getDay();
            this.DatabaseProvider.getResaturantFiltre(data_1).subscribe(function (data) {
                //SERVER_NAME_APP_TEST servidor online
                //SERVER_NAME_LOCAL servudor local
                //SERVER_NAME_PROXY proxy
                _this.items = JSON.parse(data['_body']);
                _this.loading.dismiss();
            }, function (err) {
                console.log("Error: " + err);
            }, function () { return console.log('Movie Search Complete'); });
        }
        var data = "hora/" + hora;
        this.DatabaseProvider.getResaturantFiltre(data).subscribe(function (data) {
            //SERVER_NAME_APP_TEST servidor online
            //SERVER_NAME_LOCAL servudor local
            //SERVER_NAME_PROXY proxy
            _this.items = JSON.parse(data['_body']);
            _this.loading.dismiss();
        }, function (err) {
            console.log("Error: " + err);
        }, function () { return console.log('Movie Search Complete'); });
    };
    RestaurantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-restaurant',template:/*ion-inline-start:"/home/oriol/ValldeLord/appValldeLord/src/pages/restaurant/restaurant.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n        <img src="assets/imgs/logo-vdl-mini.png"/>\n    </ion-title>\n    <ion-item>\n        <ion-select [(ngModel)]="dia" (ionChange)="onChangeDia(dia)">\n          <ion-option value="" [selected]="true">Filtra Dia</ion-option>\n          <ion-option value="0">Dia actual</ion-option>\n          <ion-option value="1">Dilluns</ion-option>\n          <ion-option value="2">Dimarts</ion-option>\n          <ion-option value="3">Dimecres</ion-option>\n          <ion-option value="4">Dijous</ion-option>\n          <ion-option value="5">Divendres</ion-option>\n          <ion-option value="6">Dissabte</ion-option>\n          <ion-option value="7">Diumenge</ion-option>\n        </ion-select>\n      <ion-select [(ngModel)]="hora" (ionChange)="onChangeHora(hora)">\n        <ion-option [selected]="true">Filtra Hora</ion-option>\n        <ion-option>Hora actual</ion-option>\n        <ion-option value="0">00</ion-option>\n        <ion-option value="1">01</ion-option>\n        <ion-option value="2">02</ion-option>\n        <ion-option value="3">03</ion-option>\n        <ion-option value="4">04</ion-option>\n        <ion-option value="5">05</ion-option>\n        <ion-option value="6">06</ion-option>\n        <ion-option value="7">07</ion-option>\n        <ion-option value="8">08</ion-option>\n        <ion-option value="9">09</ion-option>\n        <ion-option>10</ion-option>\n        <ion-option>11</ion-option>\n        <ion-option>12</ion-option>\n        <ion-option>13</ion-option>\n        <ion-option>14</ion-option>\n        <ion-option>15</ion-option>\n        <ion-option>16</ion-option>\n        <ion-option>17</ion-option>\n        <ion-option>18</ion-option>\n        <ion-option>19</ion-option>\n        <ion-option>20</ion-option>\n        <ion-option>21</ion-option>\n        <ion-option>22</ion-option>\n        <ion-option>23</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="restaurant_background">\n  <ion-item *ngFor="let item of items">\n    <ion-item no-lines>\n      <ion-icon name="restaurant" item-left></ion-icon>\n      <h1>{{item.nom}}</h1>\n    </ion-item>\n    <ion-list>\n      <img (click)="changePage(item)" src="http://lavalldelord.com/appvallLord/storage/app/images/{{item.imatgePrincipal}}" class="img_thumbnail">\n      <ion-item no-lines>\n        <ion-icon name="locate" item> {{item.poblacio}}</ion-icon>\n\n      </ion-item>\n      <ion-item no-lines>\n        <ion-icon name="clock" item></ion-icon> Cuina de {{item.obertura_dia}}h a {{item.tancament_dia}}h i {{item.obertura_nit}}h a {{item.tancament_nit}}h<br />\n      </ion-item>\n      <ion-item no-lines>\n        <a href="tel:{{item.telefon}}"><ion-icon name="call" item> {{item.telefon}}</ion-icon></a>\n      </ion-item>\n      <button ion-button full (click)="changePage(item)">Detalls</button>\n    </ion-list>\n  </ion-item>\n</ion-content>\n`/*ion-inline-end:"/home/oriol/ValldeLord/appValldeLord/src/pages/restaurant/restaurant.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], RestaurantPage);
    return RestaurantPage;
}());

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(22);
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
    function InformacioPage(navCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.ionic = sanitizer.bypassSecurityTrustStyle("'{'color': 'red'}'");
        this.prova = 'ionic';
    }
    InformacioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-informacio',template:/*ion-inline-start:"/home/oriol/ValldeLord/appValldeLord/src/pages/informacio/informacio.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n        <img src="assets/imgs/logo-vdl-mini.png"/>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding class="restaurant_background">\n  <ion-list ion-item>\n    <h2>App de la Vall de Lord</h2>\n    <h3>Segueix-nos a:</h3><br />\n    <button ion-item onclick="window.open(\'https://twitter.com/valldelord\', \'_system\', \'location=yes\'); return false;">\n      <ion-icon name="logo-twitter" [ngStyle]="{\'color\': \'blue\'}" item></ion-icon>\n        <span [ngStyle]="{\'color\': \'blue\'}">Twitter</span>\n    </button>\n    <button ion-item onclick="window.open(\'https://www.instagram.com/turismevalldelord/\', \'_system\', \'location=yes\'); return false;">\n      <ion-icon name="logo-instagram" [ngStyle]="{\'color\': \'blue\'}" item></ion-icon>\n        <span [ngStyle]="{\'color\': \'blue\'}">Instagram</span>\n    </button>\n    <button ion-item onclick="window.open(\'https://www.facebook.com/turismevalldelord\', \'_system\', \'location=yes\'); return false;">\n      <ion-icon name="logo-facebook" [ngStyle]="{\'color\': \'blue\'}" item></ion-icon>\n        <span [ngStyle]="{\'color\': \'blue\'}">Faceboock</span>\n    </button>\n    <button ion-item onclick="window.open(\'http://lavalldelord.com\', \'_system\', \'location=yes\'); return false;">\n      <ion-icon name="logo-wordpress" [ngStyle]="{\'color\': \'blue\'}" item></ion-icon>\n        <span [ngStyle]="{\'color\': \'blue\'}">Web de la Val de Lord</span>\n    </button>\n    <br />\n    <h3><strong>Associació Turisme Vall de Lord</strong><br />\n    <span>Oficina de turisme de la Vall de Lord<br />\n    25282 St. Llorenç de Morunys<br />\n    info@lavalldelord.com</span></h3>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/oriol/ValldeLord/appValldeLord/src/pages/informacio/informacio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], InformacioPage);
    return InformacioPage;
}());

//# sourceMappingURL=informacio.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/oriol/ValldeLord/appValldeLord/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n        <img class="left" src="assets/imgs/logo-vdl-mini.png"/>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Benvinguts a l\'App de la Vall de Lord</h2>\n  <h3>\n    Associació Turisme Vall de Lord\n\n  </h3>\n  <p>\n    Oficina de turisme de la Vall de Lord\n  </p>\n  <p>\n    25282 St. Llorenç de Morunys\n  </p>\n  <p>\n    info@lavalldelord.com\n  </p>\n</ion-content>\n`/*ion-inline-end:"/home/oriol/ValldeLord/appValldeLord/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_restaurant_restaurant__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_informacio_informacio__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_info_restaurant_info_restaurant__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_database_database__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { ReversePipe } from 'ngx-pipes/src/app/pipes/array/reverse';








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_restaurant_restaurant__["a" /* RestaurantPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_informacio_informacio__["a" /* InformacioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_restaurant_info_restaurant__["a" /* InfoRestaurantPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/info-restaurant/info-restaurant.module#InfoRestaurantPageModule', name: 'InfoRestaurantPage', segment: 'info-restaurant', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__["a" /* IonicImageLoader */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_restaurant_restaurant__["a" /* RestaurantPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_informacio_informacio__["a" /* InformacioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_restaurant_info_restaurant__["a" /* InfoRestaurantPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_database_database__["a" /* DatabaseProvider */],
                //ReversePipe,
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_NAME_APP_TEST; });
/* unused harmony export SERVER_NAME_LOCAL */
/* unused harmony export SERVER_NAME_LOCAL2 */
/* unused harmony export SERVER_NAME_PROXY */
/* unused harmony export SERVER_NAME_APP_PUB_IMG */
var SERVER_NAME_APP_TEST = "http://lavalldelord.com/appvallLord/public/";
var SERVER_NAME_LOCAL = "http://lavalldelord.com/appvallLordbeta/public/";
var SERVER_NAME_LOCAL2 = "http://localhost/";
var SERVER_NAME_PROXY = "";
var SERVER_NAME_APP_PUB_IMG = "http://lavalldelord.com/appvallLord/storage/app/images/";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(202);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/oriol/ValldeLord/appValldeLord/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/home/oriol/ValldeLord/appValldeLord/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(258);
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
    DatabaseProvider.prototype.getResaturant = function () {
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
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map