import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-informacio',
  templateUrl: 'informacio.html'
})
export class InformacioPage {
  ionic: any;
  prova: string;
  constructor(
    public navCtrl: NavController) {
    this.prova = 'ionic';
  }

}
