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
    distancia: any;
    angle: any;
    direccioSN: any;
    direccioEW: any;
    dLat: any;
    dLong: any;
    coords : any = { lat: 0, lng: 0 }
    desticoords : any = { lat: 42.13730167, lng: 1.59154236 }
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
        [this.distancia, this.angle, this.direccioSN, this.direccioEW,this.dLat, this.dLong] = this.getDistance(this.coords.lat, this.coords.lng, this.desticoords.lat, this.desticoords.lng);
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
     var d = R * c;
     var direccio;
     var Lat;
     var Long;
     if(dLat < 0 && dLong < 0){
       //SE
       direccio = 'SW';
     }else if(dLat < 0 && dLong > 0){
       //NE
       direccio = 'NW';
     }else if(dLat > 0 && dLong < 0){
       //SW
       direccio = 'SE';
     }else if(dLat > 0 && dLong > 0){
       //NW
       direccio = 'NE';
     }
     var difLat = ( lat2 - lat1 )*100000;
     var difLong = ( lon2 - lon1 )*100000;
     if(difLat < 0){
       Lat= 'S';
     }else{
       Lat= 'N';
     }
     if(difLong < 0){
       Long= 'E';
     }else{
       Long= 'W';
     }
     var angle = Math.atan(( lon2 - lon1 )/( lat2 - lat1 ));
     return [d.toFixed(3), this.radians_to_degrees(angle).toFixed(0), Lat, Long, Math.abs(difLat), Math.abs(difLong)]; //Retorna tres decimales
    }
    radians_to_degrees(radians)
    {
      var pi = Math.PI;
      return radians * (180/pi);
    }

    ionViewDidLoad() {
      //alert('ionViewDidLoad LocalitzacionsPage');
      //this.searchLocalitzacio(this.coords.lat,this.coords.lng);
    }




  }
