import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the InfoRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoRestaurantPage = (function () {
    function InfoRestaurantPage(DatabaseProvider, navCtrl, navParams) {
        this.DatabaseProvider = DatabaseProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkmark = '#f53d3d';
        this.ionViewDidLoad();
    }
    InfoRestaurantPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InfoRestaurantPage');
        this.data = this.navParams.get('comData');
        this.DatabaseProvider.getItems(this.data.id).subscribe(function (data) {
            _this.items = JSON.parse(data['_body']);
            _this.loading.dismiss();
        }, function (err) {
            console.log("Error: " + err);
        }, function () { return console.log('Movie Search Complete'); });
    };
    InfoRestaurantPage.prototype.obreMaps = function (direccio, poblacio) {
        window.open('https://www.google.com/maps/search/' + direccio + ',' + poblacio + '/', '_system', 'location=yes');
    };
    InfoRestaurantPage.prototype.obreMapsIndicacions = function (direccio, poblacio) {
        window.open('https://www.google.com/maps/dir//' + direccio + ',' + poblacio + '/', '_system', 'location=yes');
    };
    InfoRestaurantPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-info-restaurant',
                    templateUrl: 'info-restaurant.html',
                },] },
    ];
    /** @nocollapse */
    InfoRestaurantPage.ctorParameters = function () { return [
        { type: DatabaseProvider, },
        { type: NavController, },
        { type: NavParams, },
    ]; };
    return InfoRestaurantPage;
}());
export { InfoRestaurantPage };
//# sourceMappingURL=info-restaurant.js.map