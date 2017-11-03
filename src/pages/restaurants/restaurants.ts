import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html'
})
export class RestaurantsPage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public RestaurantProvider: RestaurantProvider
  ) {}
  ionViewDidLoad(){
    //crida a metode del provider restaurants. Obté resposta crida http en format json
    this.RestaurantProvider.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
