import { Component } from '@angular/core';
import { RestaurantPage } from '../restaurant/restaurant';
import { InformacioPage } from '../informacio/informacio';
import { HomePage } from '../home/home';
//import { InformacioPage } from '../details-restaurant/details-restaurant';
var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = HomePage;
        this.tab2Root = RestaurantPage;
        this.tab3Root = InformacioPage;
    }
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = function () { return []; };
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map