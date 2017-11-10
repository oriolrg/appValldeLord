import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Constant from '../constants';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  static get parameters() {
            return [[Http]];
        }
  constructor(public http: Http) {
    console.log('Hello DatabaseProvider Provider');
  }
  getResaturant() {
          //SERVER_NAME_APP_TEST servidor online
          //SERVER_NAME_LOCAL servudor local
          //SERVER_NAME_PROXY proxy
          var url = Constant.SERVER_NAME_APP_TEST+'restaurant/';
          //var url = Constant.SERVER_NAME_PROXY+'restaurant/';
          //TODO funciona var response = this.http.get(url+lat+'/'+lon);
          var response = this.http.get(url);
          console.log(url);
          //alert(response);
          return response;
      }
}
