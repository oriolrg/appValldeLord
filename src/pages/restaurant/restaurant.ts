import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';

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
  private online:boolean = false;
  private wifi:boolean = false;
  public disconnectSubscription:any;
  public connectSubscription:any;
  //restRoot = DetailsRestaurantPage;
  constructor(//private reversePipe: ReversePipe,
    public DatabaseProvider: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http:Http,
    private network: Network,
    private toastCtrl: ToastController,
    //private geolocation: Geolocation,
    public  platform: Platform,
    public loadingController: LoadingController
  ) {
    platform.ready().then(() => {
      //missatge de no connexió

      let disconnectSub = network.onDisconnect().subscribe(() => {
        this.offLine();
      });

      let connectSub = network.onConnect().subscribe(()=> {
        this.onLine();
      });

      //si tenim connexio carreguem pagina i mostrem missatge
      if(this.network.type!='none'){
        this.onLine();
      }else{
        this.offLine();
      }

    });
  }
  onLine(){
    let toast = this.toastCtrl.create({
      message: 'S\'està connectant',
      duration: 2000,
      position: 'bottom'
    });
    // La plataforma esta lista y ya tenemos acceso a los plugins.
    //toastCtrl.present();
    this.loading = this.loadingController.create({
      content: 'Carregant...'
    });

    this.loading.present();
    this.searchRestaurant();
    toast.present();
  }
  offLine(){
    let toast = this.toastCtrl.create({
      message: 'No hi ha connexió',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
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
  }
  onChangeDia(dia) {
    if(dia !=0 ){
      let data = "dia/"+dia;
      this.DatabaseProvider.getResaturantFiltre(data).subscribe(
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
    }else{
      //obtenim dades segons data actual
      let String = new Date();
      //alert(String.getDay());
      let data = "dia/"+String.getDay();
      this.DatabaseProvider.getResaturantFiltre(data).subscribe(
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
  }
  onChangeHora(hora) {
    //alert(hora);
    if(hora == 'Hora actual'){
      let String = new Date();

      let data = "hora/"+String.getHours();
      //alert(String.getHours());
      this.DatabaseProvider.getResaturantFiltre(data).subscribe(
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
    }else{
    let data = "hora/"+hora;
    this.DatabaseProvider.getResaturantFiltre(data).subscribe(
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
  }

}
