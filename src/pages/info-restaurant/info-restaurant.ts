import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

import * as Constant from '../../providers/constants';

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
  private loading: any;
  public items: any;
  checkmark: string;
  constructor(public DatabaseProvider: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.checkmark='#f53d3d';
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoRestaurantPage');
    this.data = this.navParams.get('comData');
    //alert(this.data.id);
    //alert(this.navParams.get('param2'));
    this.DatabaseProvider.getItems(this.data.id).subscribe(
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
  obreMaps(direccio, poblacio){
    window.open('https://www.google.com/maps/search/'+direccio+','+poblacio+'/', '_system', 'location=yes');
  }
  obreMapsIndicacions(direccio, poblacio){
    window.open('https://www.google.com/maps/dir//'+direccio+','+poblacio+'/', '_system', 'location=yes');
  }

}
