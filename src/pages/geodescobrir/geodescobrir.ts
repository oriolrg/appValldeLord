import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Coordinates} from '@ionic-native/geolocation';
import { Platform, LoadingController } from 'ionic-angular';
/**
 * Generated class for the GeodescobrirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geodescobrir',
  templateUrl: 'geodescobrir.html',
})
export class GeodescobrirPage {
  localitzacions: Array<any>;
    private loading: any;
    public items: any;
    //private coords: Coordinates = null;
    map: any;
    coords : any = { lat: 0, lng: 0 }
    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private geolocation: Geolocation,
      public  platform: Platform,
      public loadingController: LoadingController
    ) {

      platform.ready().then(() => {

        // La plataforma esta lista y ya tenemos acceso a los plugins.

        this.loading = this.loadingController.create({
          content: 'Carregant...'
        });
        this.obtenerPosicion();
        this.loading.present();
        //this.searchLocalitzacio(this.coords.lat,this.coords.lng);
      });
    }
    obtenerPosicion():any{
      this.geolocation.watchPosition().subscribe(res => {
        this.coords.lat = res.coords.latitude;
        this.coords.lng = res.coords.longitude;
        console.log(this.coords.lat);
        console.log(this.coords.lng);
        this.loading.dismiss();
        //this.searchLocalitzacio(this.coords.lat,this.coords.lng);
      })
    }

    ionViewDidLoad() {
      //alert('ionViewDidLoad LocalitzacionsPage');
      //this.searchLocalitzacio(this.coords.lat,this.coords.lng);
    }




  }
