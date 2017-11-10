import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-restaurant',
  templateUrl: 'info-restaurant.html',
})
export class InfoRestaurantPage {
  public data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoRestaurantPage');
    this.data = this.navParams.get('comData');
    //alert(this.data.nom);
    //alert(this.navParams.get('param2'));
  }

}
