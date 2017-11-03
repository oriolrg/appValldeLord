import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestaurantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantProvider {

  constructor(
    public http: HttpClient
  ) {}
  //metode crida get a la web i retorna la resposta
  getUsers() {
      return this.http.get('https://randomuser.me/api/?results=25');
    }
}
