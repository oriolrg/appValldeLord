import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
var InformacioPage = (function () {
    function InformacioPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.prova = 'ionic';
    }
    InformacioPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-informacio',
                    templateUrl: 'informacio.html'
                },] },
    ];
    /** @nocollapse */
    InformacioPage.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return InformacioPage;
}());
export { InformacioPage };
//# sourceMappingURL=informacio.js.map