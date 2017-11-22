import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';

import { InfoRestaurantPage } from '../../pages/info-restaurant/info-restaurant';
import { DatabaseProvider } from '../../providers/database/database';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html'
})
export class RestaurantPage {
  private loading: any;
  public items: any;
  public disconnectSubscription:any;
  public connectSubscription:any;
  private tmpDia:any;
  private tmpHora:any;
  public dia:any;
  public hora:any;
  constructor(
    public DatabaseProvider: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private network: Network,
    private toastCtrl: ToastController,
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
    this.DatabaseProvider.getResaturant().subscribe(
      data => {
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
    var data;
    if(this.tmpHora){
      if(dia ==0 ){
        //obtenim dades segons data actual
        data = this.dataDiaHoraActual();
      }else{
        //obtenim dades segons dia
        data = this.dataDiaHora(dia);
      }
    }else{
      if(dia ==0 ){
        //obtenim dades segons data actual
        data = this.dataDiaActual();
      }else{
        //obtenim dades segons dia
        data = this.dataDia(dia);
      }
    }
    this.sendData(data);
  }
  onChangeHora(hora) {
    var data;
    if(this.tmpDia){
      if(hora == 'Hora actual'){
        data = this.dataHoraDiaActual();
      }else{
        data = this.dataHoraDia(hora);
      }
    }else{
      if(hora == 'Hora actual'){
        data = this.dataHoraActual();
      }else{
        data = this.dataHora(hora);
      }
    }
    this.sendData(data);
  }
  sendData(data){
    this.DatabaseProvider.getResaturantFiltre(data).subscribe(
      data => {
        this.items = JSON.parse(data['_body']);
        this.loading.dismiss();
        },
        err => {
          console.log("Error: " + err);
        },
        () => console.log('Movie Search Complete')

      );
  }
  dataDia(dia){
    this.tmpDia = dia;
    return "dia/"+dia;
  }
  dataDiaActual(){
    let String = new Date();
    this.tmpDia = String.getDay();
    return "dia/"+this.tmpDia;
  }
  dataHora(hora){
    this.tmpHora = hora;
    return "hora/"+hora;
  }
  dataHoraActual(){
    let String = new Date();
    this.tmpHora = String.getHours();
    return "hora/"+this.tmpHora;
  }
  dataDiaHora(dia){
    this.tmpDia = dia;
    return "diahora/"+this.tmpDia+"/"+this.tmpHora;
  }
  dataDiaHoraActual(){
    let String = new Date();
    this.tmpDia = String.getDay();
    return "diahora/"+this.tmpDia+"/"+this.tmpHora;
  }
  dataHoraDia(hora){
    this.tmpHora = hora;
    return "diahora/"+this.tmpDia+"/"+this.tmpHora;
  }
  dataHoraDiaActual(){
    let String = new Date();
    this.tmpHora = String.getHours();
    return "diahora/"+this.tmpDia+"/"+this.tmpHora;
  }

}
