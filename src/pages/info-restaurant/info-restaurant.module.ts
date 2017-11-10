import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoRestaurantPage } from './info-restaurant';

@NgModule({
  declarations: [
    InfoRestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoRestaurantPage),
  ],
})
export class InfoRestaurantPageModule {}
