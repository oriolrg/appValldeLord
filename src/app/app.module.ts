import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicImageLoader } from 'ionic-image-loader';
import { Network } from '@ionic-native/network';
//import { ReversePipe } from 'ngx-pipes/src/app/pipes/array/reverse';

import { RestaurantPage } from '../pages/restaurant/restaurant';
import { InformacioPage } from '../pages/informacio/informacio';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoRestaurantPage } from '../pages/info-restaurant/info-restaurant';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    RestaurantPage,
    InformacioPage,
    HomePage,
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
    RestaurantPage,
    InformacioPage,
    HomePage,
    TabsPage,
    InfoRestaurantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    //ReversePipe,
    HttpModule,
    Network
  ]
})
export class AppModule {}
