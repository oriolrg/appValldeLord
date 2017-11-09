import { Component } from '@angular/core';

import { RestaurantPage } from '../restaurant/restaurant';
import { InformacioPage } from '../informacio/informacio';
import { HomePage } from '../home/home';
//import { InformacioPage } from '../details-restaurant/details-restaurant';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RestaurantPage;
  tab3Root = InformacioPage;

  constructor() {

  }
}
