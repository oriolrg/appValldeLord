import { Component } from '@angular/core';

import { RestaurantsPage } from '../restaurants/restaurants';
import { InformacioPage } from '../informacio/informacio';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RestaurantsPage;
  tab3Root = InformacioPage;

  constructor() {

  }
}
