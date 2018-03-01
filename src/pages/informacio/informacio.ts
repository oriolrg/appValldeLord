import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-informacio',
  templateUrl: 'informacio.html'
})
export class InformacioPage {
  ionic: any;
  prova: string;
  constructor(
    public navCtrl: NavController,
    private emailComposer: EmailComposer) {
    this.prova = 'ionic';
  }
  sendEmail() {
    let email = {
      to: 'info@lavalldelord.com',
      cc: '',
      subject: 'App Vall de Lord Consulta',
      body: '',
      isHtml: true
    };

    this.emailComposer.open(email);
  }

}
