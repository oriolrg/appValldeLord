import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Constant from '../constants';
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
            return [[Http]];
        },
        enumerable: true,
        configurable: true
    });
    //Obté informació dels diferents restaurants
    //Obté informació dels diferents restaurants
    DatabaseProvider.prototype.getResaturant = 
    //Obté informació dels diferents restaurants
    function () {
        //SERVER_NAME_APP_TEST servidor online
        //SERVER_NAME_LOCAL servudor local
        //SERVER_NAME_PROXY proxy
        var url = Constant.SERVER_NAME_APP_TEST + 'restaurant/';
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
        var url = Constant.SERVER_NAME_APP_TEST + 'restaurant/';
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
        var url = Constant.SERVER_NAME_APP_TEST + 'restaurant/' + dia;
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
        var url = Constant.SERVER_NAME_APP_TEST + 'restaurant/item/' + $id;
        var response = this.http.get(url);
        return response;
    };
    DatabaseProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DatabaseProvider.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return DatabaseProvider;
}());
export { DatabaseProvider };
//# sourceMappingURL=database.js.map