import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-informacio',
  templateUrl: 'informacio.html'
})
export class InformacioPage {

  constructor(public navCtrl: NavController) {

  }
  navigateToAnotherModule() {
    this.navCtrl.push('page-details-restaurant');
  }
}
