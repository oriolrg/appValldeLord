import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
//import { Http } from '@angular/http';


/*
  Generated class for the RestaurantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantProvider {

  constructor(public http: HttpClient)
  {
    console.log('Hello HttpProvider Provider');
  }
  //metode crida get a la web i retorna la resposta
  getUsers() {
      //var url = 'https://randomuser.me/api/?results=25';
      var url = 'http://192.168.1.46/restaurant'
      var data = this.http.get(url);
      console.log("getUsers: data => "+ data.nom);
      //return this.http.get('https://www.reddit.com/r/worldnews/.json').map(res => res.json());
      return data;
    }
}
