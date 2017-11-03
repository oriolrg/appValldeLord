import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { InformacioPage } from '../pages/informacio/informacio';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestaurantProvider } from '../providers/restaurant/restaurant';
//modul http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    RestaurantsPage,
    InformacioPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),//per colocar el menu tab. buttom abaix top a dalt
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RestaurantsPage,
    InformacioPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantProvider
  ]
})
export class AppModule {}
