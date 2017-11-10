import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { InfoRestaurantPage } from '../../pages/info-restaurant/info-restaurant';
import { DatabaseProvider } from '../../providers/database/database';
import * as Constant from '../../providers/constants';
import 'rxjs/add/operator/map';

//import { DetailsRestaurantPage } from '../details-restaurant/details-restaurant';

@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html'
})
export class RestaurantPage {
  //restaurants: Array<any>;
  private loading: any;
  public items: any;
  //restRoot = DetailsRestaurantPage;
  constructor(//private reversePipe: ReversePipe,
    public DatabaseProvider: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http:Http,
    //private geolocation: Geolocation,
    public  platform: Platform,
    public loadingController: LoadingController
  ) {
    platform.ready().then(() => {

      // La plataforma esta lista y ya tenemos acceso a los plugins.

      this.loading = this.loadingController.create({
        content: 'Carregant...'
      });

      this.loading.present();
      this.searchRestaurant();
    });
  }
  searchRestaurant(){
    //alert(Constant.SERVER_NAME_APP_TEST+'restaurant/');
    this.DatabaseProvider.getResaturant().subscribe(
      data => {

        //SERVER_NAME_APP_TEST servidor online
        //SERVER_NAME_LOCAL servudor local
        //SERVER_NAME_PROXY proxy
        this.items = JSON.parse(data['_body']);
        this.loading.dismiss();
        },
        err => {
          console.log("Error: " + err);
        },
        () => console.log('Movie Search Complete')

      );
  }
  changePage(data) {
    this.navCtrl.push(InfoRestaurantPage, {
        comData: data
    });
  };

}
