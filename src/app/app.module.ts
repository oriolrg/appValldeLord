import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicImageLoader } from 'ionic-image-loader';
import { Network } from '@ionic-native/network';
import { Device } from '@ionic-native/device';
import { EmailComposer } from '@ionic-native/email-composer';
import { Geolocation } from '@ionic-native/geolocation';

import { RestaurantPage } from '../pages/restaurant/restaurant';
import { InformacioPage } from '../pages/informacio/informacio';
import { GeodescobrirPage } from '../pages/geodescobrir/geodescobrir';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoRestaurantPage } from '../pages/info-restaurant/info-restaurant';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

@NgModule({
  declarations: [
    MyApp,
    GeodescobrirPage,
    RestaurantPage,
    InformacioPage,
    //HomePage,
    TabsPage,
    InfoRestaurantPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GeodescobrirPage,
    RestaurantPage,
    InformacioPage,
    //HomePage,
    TabsPage,
    InfoRestaurantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    Device,
    HttpModule,
    Network,
    EmailComposer,
    Geolocation,
    GeolocationProvider,
    DeviceOrientation
]
})
export class AppModule {}
