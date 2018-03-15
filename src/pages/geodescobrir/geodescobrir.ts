import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Coordinates} from '@ionic-native/geolocation';
import { Platform, LoadingController } from 'ionic-angular';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';
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
    distancia: any;
    angle: any;
    angleGrad: any;
    angleRad: any;
    compass: any;
    direccioSN: any;
    direccioEW: any;
    dLat: any;
    dLong: any;
    coords : any = { lat: 0, lng: 0 }
    desticoords : any = { lat: 42.135690, lng: 1.587751 }
    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private geolocation: Geolocation,
      public  platform: Platform,
      public loadingController: LoadingController,
      private deviceOrientation: DeviceOrientation
    ) {

      platform.ready().then(() => {

        // La plataforma esta lista y ya tenemos acceso a los plugins.

        this.loading = this.loadingController.create({
          content: 'Carregant...'
        });
        this.obtenerPosicion();
        this.loading.present();
        this.rotateImage();
        //this.searchLocalitzacio(this.coords.lat,this.coords.lng);
      });
    }
    obtenerPosicion():any{
      // Watch the device compass heading change
      var PositionOptions = {
          enableHighAccuracy : true
      };
      var subscription = this.deviceOrientation.watchHeading().subscribe(res => {
        this.compass = res.magneticHeading.toFixed(0);
      });

      this.geolocation.watchPosition(PositionOptions).subscribe(res => {
        this.coords.lat = res.coords.latitude;
        this.coords.lng = res.coords.longitude;
        this.getDistance(this.coords.lat, this.coords.lng, this.desticoords.lat, this.desticoords.lng);
        console.log(this.coords.lat);
        console.log(this.coords.lng);
        this.loading.dismiss();
        var testJson = ['{"id":1,"nom":"portals","latitud":42.137336730957,"longitud":1.5915549993515,"poblacio":"Sant Lloren\u00e7 de Morunys","actiu":1,"imatgePrincipal":"Cal-Tecu.jpg","created_at":"2018-03-07 12:12:14","updated_at":"2018-03-07 12:12:14"},{"id":2,"nom":"P","latitud":42.1338427,"longitud":1.592683,"poblacio":"Dsa","actiu":1,"imatgePrincipal":"jardi.jpg","created_at":"2018-03-07 12:12:51","updated_at":"2018-03-07 12:12:51"}'];
        testJson.push('"distancia":"2.45"');
        console.log(testJson);
        //this.searchLocalitzacio(this.coords.lat,this.coords.lng);
      })
    }
    getDistance(lat1,lon1,lat2,lon2){
     var rad = function(x) {return x*Math.PI/180;}
     var R = 6378137; //Radio de la tierra en m
     var dLat = rad( lat2 - lat1 );
     var dLong = rad( lon2 - lon1 );
     var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
     //var d = R * c;
     this.distancia = (R * c).toFixed(1);
     this.dLat = ( lat2 - lat1 )*100000;
     this.dLong = ( lon2 - lon1 )*100000;
     this.getOrientacio();
     this.getAngle();
     this.dLat = Math.abs(this.dLat).toFixed(1);
     this.dLong = Math.abs(this.dLong).toFixed(1);
    }
    radians_to_degrees(radians)
    {
      var pi = Math.PI;
      return radians * (180/pi);
    }
    getOrientacio(){
      if(this.dLat > 0){
        this.direccioSN= 'N';
      }else{
        this.direccioSN= 'S';
      }
      if(this.dLong > 0){
         this.direccioEW= 'E';
      }else{
         this.direccioEW= 'W';
      }
    }
    getAngle(){
      this.angleGrad = Math.atan2( Math.abs(this.dLat) , Math.abs(this.dLong) );
      //if( this.angleGrad <= 0 ){ this.angleGrad = this.angleGrad + ( 2 * Math.PI ) }
      this.angleGrad = this.radians_to_degrees(this.angleGrad).toFixed(0);
      if(this.dLat > 0 && this.dLong < 0){
        this.angleGrad = parseInt(this.angleGrad) + 270;
      }else if(this.dLat > 0 && this.dLong > 0){
        //this.angleGrad = parseInt(this.angleGrad) +270;
      }else if(this.dLat < 0 && this.dLong > 0){
        this.angleGrad = parseInt(this.angleGrad) + 90;
      }else if(this.dLat < 0 && this.dLong < 0){
        this.angleGrad = 270 - parseInt(this.angleGrad) ;
      }

    }
    rotateImage(){
      var image = document.getElementById('agulla');
      var canvas = document.getElementById('canvasBrujola');
    }

    ionViewDidLoad() {
      //alert('ionViewDidLoad LocalitzacionsPage');
      //this.searchLocalitzacio(this.coords.lat,this.coords.lng);
    }




  }
