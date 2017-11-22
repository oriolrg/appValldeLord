import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
import { InfoRestaurantPage } from '../../pages/info-restaurant/info-restaurant';
import { DatabaseProvider } from '../../providers/database/database';
import 'rxjs/add/operator/map';
var RestaurantPage = (function () {
    function RestaurantPage(DatabaseProvider, navCtrl, navParams, network, toastCtrl, platform, loadingController) {
        var _this = this;
        this.DatabaseProvider = DatabaseProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingController = loadingController;
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
        this.DatabaseProvider.getResaturant().subscribe(function (data) {
            _this.items = JSON.parse(data['_body']);
            _this.loading.dismiss();
        }, function (err) {
            console.log("Error: " + err);
        }, function () { return console.log('Movie Search Complete'); });
    };
    RestaurantPage.prototype.changePage = function (data) {
        this.navCtrl.push(InfoRestaurantPage, {
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
    RestaurantPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-restaurant',
                    templateUrl: 'restaurant.html'
                },] },
    ];
    /** @nocollapse */
    RestaurantPage.ctorParameters = function () { return [
        { type: DatabaseProvider, },
        { type: NavController, },
        { type: NavParams, },
        { type: Network, },
        { type: ToastController, },
        { type: Platform, },
        { type: LoadingController, },
    ]; };
    return RestaurantPage;
}());
export { RestaurantPage };
//# sourceMappingURL=restaurant.js.map