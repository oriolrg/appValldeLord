import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html'
})
export class RestaurantsPage {

  restaurants: any;

  constructor(
    public navCtrl: NavController,
    public RestaurantProvider: RestaurantProvider
  ) {
    console.log("constructor");
    this.ionViewDidLoad();
  }
  ionViewDidLoad(){
    //crida a metode del provider restaurants. Obté resposta crida http en format json
    console.log("ionViewDidLoad");
    this.RestaurantProvider.getUsers()
    .subscribe(
      data => { // Success
        console.log("data");
        this.restaurants = data;
        console.log("hola"+ this.restaurants);
      },
      error =>{
        console.error(" " +error.message);
      }
   );
  }
}
