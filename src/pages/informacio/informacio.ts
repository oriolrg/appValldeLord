import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser'


@Component({
  selector: 'page-informacio',
  templateUrl: 'informacio.html'
})
export class InformacioPage {
  ionic: any;
  prova: string;
  constructor(
    public navCtrl: NavController,
    private sanitizer: DomSanitizer) {
    this.ionic = sanitizer.bypassSecurityTrustStyle("'{'color': 'red'}'");
    this.prova = 'ionic';
  }

}
