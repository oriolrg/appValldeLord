import { Component, ViewChild, ElementRef, Renderer  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Coordinates} from '@ionic-native/geolocation';
import { Platform, LoadingController } from 'ionic-angular';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';
import { DatabaseProvider } from '../../providers/database/database';
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
  @ViewChild('canvasBrujola') canvasEl : ElementRef;
  /**
    * Reference Canvas object
    */
    private _CANVAS  : any;
    /**
    * Reference the context for the Canvas element
    */
    private _CONTEXT : any;
    localitzacions: Array<any>;
    private loading: any;
    public items: any;
    //private coords: Coordinates = null;
    map: any;
    json: any;
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
    testJson : any = [
      {
        "id":1,
        "nom":"portals",
        "latitud":42.136586,
        "longitud":1.591382,
        "poblacio":"Sant Lloren\u00e7 de Morunys",
        "visitat":0,
        "imatgePrincipal":"Cal-Tecu.jpg",
        "created_at":"2018-03-07 12:12:14",
        "updated_at":"2018-03-07 12:12:14"
      },
      {
        "id":2,
        "nom":"portals",
        "latitud":42.137068,
        "longitud":1.591888,
        "poblacio":"Sant Lloren\u00e7 de Morunys",
        "visitat":0,
        "imatgePrincipal":"Cal-Tecu.jpg",
        "created_at":"2018-03-07 12:12:14",
        "updated_at":"2018-03-07 12:12:14"
      },
      {
        "id":3,
        "nom":"P",
        "latitud":42.137535,
        "longitud":1.591358,
        "poblacio":"Dsa",
        "visitat":0,
        "imatgePrincipal":"jardi.jpg",
        "created_at":"2018-03-07 12:12:51",
        "updated_at":"2018-03-07 12:12:51"
      }
    ];
    desticoords : any = { lat: 42.182042, lng: 1.581289 }
    constructor(
      public DatabaseProvider: DatabaseProvider,
      public navCtrl: NavController,
      public navParams: NavParams,
      private geolocation: Geolocation,
      public  platform: Platform,
      public loadingController: LoadingController,
      private deviceOrientation: DeviceOrientation,
      public renderer: Renderer
    ) {

      platform.ready().then(() => {
        // La plataforma esta lista y ya tenemos acceso a los plugins.
        this.loading = this.loadingController.create({
          content: 'Carregant...'
        });
        this.loading.present();
        this.obtenerPosicion();
      });
    }
    initialiseCanvas() : void
    {
      if(this._CANVAS.getContext)
      {
        this.setupCanvas();
      }
    }
    setupCanvas() : void
    {
      this._CONTEXT = this._CANVAS.getContext('2d');
      this._CONTEXT.fillStyle = "#fff";
      //this._CONTEXT.fillRect(0, 0, 200, 200);
    }
    clearCanvas() : void
    {
      this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
      this.setupCanvas();
    }
    obtenerPosicion():any{
      // Watch the device compass heading change
      var PositionOptions = {
          enableHighAccuracy : true
      };
      var subscription = this.deviceOrientation.watchHeading().subscribe(res => {
        this.compass = res.magneticHeading.toFixed(0);
        this.drawAgulla();
      });
      this.geolocation.watchPosition(PositionOptions).subscribe(res => {
        this.coords.lat = res.coords.latitude;
        this.coords.lng = res.coords.longitude;
        if(this.testJson.length > 0){
            this.getDistance(this.coords.lat, this.coords.lng,this.testJson[0].latitud, this.testJson[0].longitud);
            this.loading.dismiss();
        }else{
          alert("Enorabona has completat el circuit")
        }
        if(this.distancia < 10){
          this.testJson.splice(0, 1);
          alert("cap al següent punt");
        }
      })
    }
    getDistance(lat1,lon1,lat2,lon2){
     var rad = function(x) {return x*Math.PI/180;}
     var R = 6378137; //Radio de la tierra en m
     var dLat = rad( lat2 - lat1 );
     var dLong = rad( lon2 - lon1 );
     var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
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
    drawAgulla() : void
    {
      this._CANVAS 		    = this.canvasEl.nativeElement;
      this._CANVAS.width  	= 200;
      this._CANVAS.height 	= 200;
      this.initialiseCanvas();
      var width = 200;
      var height = 200;
      this.clearCanvas();
      var ctx = this._CONTEXT;
      ctx.translate(width/2,height/2);
      ctx.fillStyle = "#fff";
      ctx.rotate( (Math.PI / 180) * this.compass );
      var img=new Image();
      img.onload = function() {
        ctx.drawImage(img,0, 0, 200, 200);
      }
      img.src='assets/imgs/compass.png';
      ctx.translate(-width/2,-height/2);
    }
    ionViewDidLoad() {

    }




  }
