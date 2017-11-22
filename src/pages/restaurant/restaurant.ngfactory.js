/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "../../../node_modules/ionic-angular/components/item/item.ngfactory";
import * as i2 from "ionic-angular/components/item/item";
import * as i3 from "ionic-angular/util/form";
import * as i4 from "ionic-angular/config/config";
import * as i5 from "ionic-angular/components/item/item-reorder";
import * as i6 from "ionic-angular/components/item/item-content";
import * as i7 from "ionic-angular/components/icon/icon";
import * as i8 from "ionic-angular/components/list/list";
import * as i9 from "ionic-angular/platform/platform";
import * as i10 from "ionic-angular/gestures/gesture-controller";
import * as i11 from "ionic-angular/platform/dom-controller";
import * as i12 from "ionic-angular/components/grid/grid";
import * as i13 from "ionic-angular/components/grid/row";
import * as i14 from "ionic-angular/components/grid/col";
import * as i15 from "../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i16 from "ionic-angular/components/button/button";
import * as i17 from "ionic-angular/components/toolbar/toolbar-header";
import * as i18 from "ionic-angular/navigation/view-controller";
import * as i19 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i20 from "ionic-angular/components/toolbar/navbar";
import * as i21 from "ionic-angular/components/app/app";
import * as i22 from "ionic-angular/navigation/nav-controller";
import * as i23 from "../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i24 from "ionic-angular/components/toolbar/toolbar-title";
import * as i25 from "ionic-angular/components/toolbar/toolbar";
import * as i26 from "../../../node_modules/ionic-angular/components/select/select.ngfactory";
import * as i27 from "ionic-angular/components/select/select";
import * as i28 from "ionic-angular/navigation/deep-linker";
import * as i29 from "@angular/forms";
import * as i30 from "ionic-angular/components/option/option";
import * as i31 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i32 from "ionic-angular/components/content/content";
import * as i33 from "ionic-angular/platform/keyboard";
import * as i34 from "@angular/common";
import * as i35 from "./restaurant";
import * as i36 from "../../providers/database/database";
import * as i37 from "ionic-angular/navigation/nav-params";
import * as i38 from "@ionic-native/network/index";
import * as i39 from "ionic-angular/components/toast/toast-controller";
import * as i40 from "ionic-angular/components/loading/loading-controller";
var styles_RestaurantPage = [];
var RenderType_RestaurantPage = i0.ɵcrt({ encapsulation: 2, styles: styles_RestaurantPage, data: {} });
export { RenderType_RestaurantPage as RenderType_RestaurantPage };
function View_RestaurantPage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 84, "ion-item", [["class", "item item-block"]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(1, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 6, { contentLabel: 0 }), i0.ɵqud(603979776, 7, { _buttons: 1 }), i0.ɵqud(603979776, 8, { _icons: 1 }), i0.ɵdid(5, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n    "])), (_l()(), i0.ɵeld(7, 0, null, 2, 12, "ion-item", [["class", "item item-block"], ["no-lines", ""]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(8, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 9, { contentLabel: 0 }), i0.ɵqud(603979776, 10, { _buttons: 1 }), i0.ɵqud(603979776, 11, { _icons: 1 }), i0.ɵdid(12, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵeld(14, 0, null, 0, 1, "ion-icon", [["item-left", ""], ["name", "restaurant"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(15, 147456, [[11, 4]], 0, i7.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵeld(17, 0, null, 2, 1, "h1", [], null, null, null, null, null)), (_l()(), i0.ɵted(18, null, ["", ""])), (_l()(), i0.ɵted(-1, 2, ["\n    "])), (_l()(), i0.ɵted(-1, 2, ["\n    "])), (_l()(), i0.ɵeld(21, 0, null, 2, 62, "ion-list", [], null, null, null, null, null)), i0.ɵdid(22, 16384, null, 0, i8.List, [i4.Config, i0.ElementRef, i0.Renderer, i9.Platform, i10.GestureController, i11.DomController], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(24, 0, null, null, 58, "ion-grid", [["class", "grid"]], null, null, null, null, null)), i0.ɵdid(25, 16384, null, 0, i12.Grid, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(27, 0, null, null, 54, "ion-row", [["class", "row"]], null, null, null, null, null)), i0.ɵdid(28, 16384, null, 0, i13.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(30, 0, null, null, 4, "ion-col", [["class", "col"], ["col-12", ""], ["col-sm", ""]], null, null, null, null, null)), i0.ɵdid(31, 16384, null, 0, i14.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(33, 0, null, null, 0, "img", [["class", "img_thumbnail"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changePage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(36, 0, null, null, 40, "ion-col", [["class", "col"], ["col-12", ""], ["col-sm", ""]], null, null, null, null, null)), i0.ɵdid(37, 16384, null, 0, i14.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(39, 0, null, null, 10, "ion-item", [["class", "item item-block"], ["no-lines", ""]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(40, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 12, { contentLabel: 0 }), i0.ɵqud(603979776, 13, { _buttons: 1 }), i0.ɵqud(603979776, 14, { _icons: 1 }), i0.ɵdid(44, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n              "])), (_l()(), i0.ɵeld(46, 0, null, 2, 2, "ion-icon", [["item", ""], ["name", "locate"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(47, 147456, [[14, 4]], 0, i7.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(48, null, [" ", ""])), (_l()(), i0.ɵted(-1, 2, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(51, 0, null, null, 11, "ion-item", [["class", "item item-block"], ["no-lines", ""]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(52, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 15, { contentLabel: 0 }), i0.ɵqud(603979776, 16, { _buttons: 1 }), i0.ɵqud(603979776, 17, { _icons: 1 }), i0.ɵdid(56, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n              "])), (_l()(), i0.ɵeld(58, 0, null, 2, 1, "ion-icon", [["item", ""], ["name", "clock"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(59, 147456, [[17, 4]], 0, i7.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(60, 2, [" Cuina de ", "h a ", "h i ", "h a ", "h"])), (_l()(), i0.ɵeld(61, 0, null, 2, 0, "br", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, 2, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(64, 0, null, null, 11, "ion-item", [["class", "item item-block"], ["no-lines", ""]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(65, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 18, { contentLabel: 0 }), i0.ɵqud(603979776, 19, { _buttons: 1 }), i0.ɵqud(603979776, 20, { _icons: 1 }), i0.ɵdid(69, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n              "])), (_l()(), i0.ɵeld(71, 0, null, 2, 3, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), i0.ɵeld(72, 0, null, null, 2, "ion-icon", [["item", ""], ["name", "call"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(73, 147456, [[20, 4]], 0, i7.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(74, null, [" ", ""])), (_l()(), i0.ɵted(-1, 2, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(78, 0, null, null, 2, "button", [["full", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changePage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i15.View_Button_0, i15.RenderType_Button)), i0.ɵdid(79, 1097728, null, 0, i16.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], { full: [0, "full"] }, null), (_l()(), i0.ɵted(-1, 0, ["Detalls"])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, 2, ["\n  "]))], function (_ck, _v) { var currVal_1 = "restaurant"; _ck(_v, 15, 0, currVal_1); var currVal_5 = "locate"; _ck(_v, 47, 0, currVal_5); var currVal_8 = "clock"; _ck(_v, 59, 0, currVal_8); var currVal_15 = "call"; _ck(_v, 73, 0, currVal_15); var currVal_17 = ""; _ck(_v, 79, 0, currVal_17); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 15)._hidden; _ck(_v, 14, 0, currVal_0); var currVal_2 = _v.context.$implicit.nom; _ck(_v, 18, 0, currVal_2); var currVal_3 = i0.ɵinlineInterpolate(1, "http://lavalldelord.com/appvallLord/storage/app/images/", _v.context.$implicit.imatgePrincipal, ""); _ck(_v, 33, 0, currVal_3); var currVal_4 = i0.ɵnov(_v, 47)._hidden; _ck(_v, 46, 0, currVal_4); var currVal_6 = _v.context.$implicit.poblacio; _ck(_v, 48, 0, currVal_6); var currVal_7 = i0.ɵnov(_v, 59)._hidden; _ck(_v, 58, 0, currVal_7); var currVal_9 = _v.context.$implicit.obertura_dia; var currVal_10 = _v.context.$implicit.tancament_dia; var currVal_11 = _v.context.$implicit.obertura_nit; var currVal_12 = _v.context.$implicit.tancament_nit; _ck(_v, 60, 0, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = i0.ɵinlineInterpolate(1, "tel:", _v.context.$implicit.telefon, ""); _ck(_v, 71, 0, currVal_13); var currVal_14 = i0.ɵnov(_v, 73)._hidden; _ck(_v, 72, 0, currVal_14); var currVal_16 = _v.context.$implicit.telefon; _ck(_v, 74, 0, currVal_16); }); }
export function View_RestaurantPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 186, "ion-header", [], null, null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i17.Header, [i4.Config, i0.ElementRef, i0.Renderer, [2, i18.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(3, 0, null, null, 182, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i19.View_Navbar_0, i19.RenderType_Navbar)), i0.ɵdid(4, 49152, null, 0, i20.Navbar, [i21.App, [2, i18.ViewController], [2, i22.NavController], i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n        "])), (_l()(), i0.ɵeld(6, 0, null, 3, 178, "ion-title", [], null, null, null, i23.View_ToolbarTitle_0, i23.RenderType_ToolbarTitle)), i0.ɵdid(7, 49152, null, 0, i24.ToolbarTitle, [i4.Config, i0.ElementRef, i0.Renderer, [2, i25.Toolbar], [2, i20.Navbar]], null, null), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵeld(9, 0, null, 0, 174, "ion-grid", [["class", "graellaHeader grid"]], null, null, null, null, null)), i0.ɵdid(10, 16384, null, 0, i12.Grid, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(12, 0, null, null, 170, "ion-row", [["align-items-start", ""], ["class", "filaHeader row"]], null, null, null, null, null)), i0.ɵdid(13, 16384, null, 0, i13.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(15, 0, null, null, 4, "ion-col", [["class", "imageHeader col"], ["col-2", ""]], null, null, null, null, null)), i0.ɵdid(16, 16384, null, 0, i14.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(18, 0, null, null, 0, "img", [["src", "assets/imgs/logo-vdl-no-text.png"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(21, 0, null, null, 160, "ion-col", [["class", "colSelectHeader col"], ["col-10", ""]], null, null, null, null, null)), i0.ɵdid(22, 16384, null, 0, i14.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(24, 0, null, null, 156, "ion-item", [["class", "selecHeader item item-block"], ["no-lines", ""]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(25, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 1, { contentLabel: 0 }), i0.ɵqud(603979776, 2, { _buttons: 1 }), i0.ɵqud(603979776, 3, { _icons: 1 }), i0.ɵdid(29, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n            "])), (_l()(), i0.ɵeld(31, 0, null, 3, 39, "ion-select", [["action-sheet", ""], ["placeholder", "Dia Obert"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 32)._click($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup.space" === en)) {
        var pd_1 = (i0.ɵnov(_v, 32)._keyup() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.dia = $event) !== false);
        ad = (pd_2 && ad);
    } if (("ionChange" === en)) {
        var pd_3 = (_co.onChangeDia(_co.dia) !== false);
        ad = (pd_3 && ad);
    } return ad; }, i26.View_Select_0, i26.RenderType_Select)), i0.ɵdid(32, 1228800, null, 1, i27.Select, [i21.App, i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i2.Item], i28.DeepLinker], { placeholder: [0, "placeholder"] }, { ionChange: "ionChange" }), i0.ɵqud(603979776, 4, { options: 1 }), i0.ɵprd(1024, null, i29.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i27.Select]), i0.ɵdid(35, 671744, null, 0, i29.NgModel, [[8, null], [8, null], [8, null], [2, i29.NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i29.NgControl, null, [i29.NgModel]), i0.ɵdid(37, 16384, null, 0, i29.NgControlStatus, [i29.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(39, 0, null, null, 2, "ion-option", [["value", "0"]], null, null, null, null, null)), i0.ɵdid(40, 16384, [[4, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["Dia actual"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(43, 0, null, null, 2, "ion-option", [["value", "1"]], null, null, null, null, null)), i0.ɵdid(44, 16384, [[4, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["Dilluns"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(47, 0, null, null, 2, "ion-option", [["value", "2"]], null, null, null, null, null)), i0.ɵdid(48, 16384, [[4, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["Dimarts"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(51, 0, null, null, 2, "ion-option", [["value", "3"]], null, null, null, null, null)), i0.ɵdid(52, 16384, [[4, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["Dimecres"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(55, 0, null, null, 2, "ion-option", [["value", "4"]], null, null, null, null, null)), i0.ɵdid(56, 16384, [[4, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["Dijous"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(59, 0, null, null, 2, "ion-option", [["value", "5"]], null, null, null, null, null)), i0.ɵdid(60, 16384, [[4, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["Divendres"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(63, 0, null, null, 2, "ion-option", [["value", "6"]], null, null, null, null, null)), i0.ɵdid(64, 16384, [[4, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["Dissabte"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(67, 0, null, null, 2, "ion-option", [["value", "7"]], null, null, null, null, null)), i0.ɵdid(68, 16384, [[4, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["Diumenge"])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, 2, ["\n            "])), (_l()(), i0.ɵeld(72, 0, null, 3, 107, "ion-select", [["action-sheet", ""], ["placeholder", "Hora Cuina"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 73)._click($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup.space" === en)) {
        var pd_1 = (i0.ɵnov(_v, 73)._keyup() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.hora = $event) !== false);
        ad = (pd_2 && ad);
    } if (("ionChange" === en)) {
        var pd_3 = (_co.onChangeHora(_co.hora) !== false);
        ad = (pd_3 && ad);
    } return ad; }, i26.View_Select_0, i26.RenderType_Select)), i0.ɵdid(73, 1228800, null, 1, i27.Select, [i21.App, i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i2.Item], i28.DeepLinker], { placeholder: [0, "placeholder"] }, { ionChange: "ionChange" }), i0.ɵqud(603979776, 5, { options: 1 }), i0.ɵprd(1024, null, i29.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i27.Select]), i0.ɵdid(76, 671744, null, 0, i29.NgModel, [[8, null], [8, null], [8, null], [2, i29.NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i29.NgControl, null, [i29.NgModel]), i0.ɵdid(78, 16384, null, 0, i29.NgControlStatus, [i29.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(80, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(81, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["Hora actual"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(84, 0, null, null, 2, "ion-option", [["value", "0"]], null, null, null, null, null)), i0.ɵdid(85, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["00"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(88, 0, null, null, 2, "ion-option", [["value", "1"]], null, null, null, null, null)), i0.ɵdid(89, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["01"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(92, 0, null, null, 2, "ion-option", [["value", "2"]], null, null, null, null, null)), i0.ɵdid(93, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["02"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(96, 0, null, null, 2, "ion-option", [["value", "3"]], null, null, null, null, null)), i0.ɵdid(97, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["03"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(100, 0, null, null, 2, "ion-option", [["value", "4"]], null, null, null, null, null)), i0.ɵdid(101, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["04"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(104, 0, null, null, 2, "ion-option", [["value", "5"]], null, null, null, null, null)), i0.ɵdid(105, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["05"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(108, 0, null, null, 2, "ion-option", [["value", "6"]], null, null, null, null, null)), i0.ɵdid(109, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["06"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(112, 0, null, null, 2, "ion-option", [["value", "7"]], null, null, null, null, null)), i0.ɵdid(113, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["07"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(116, 0, null, null, 2, "ion-option", [["value", "8"]], null, null, null, null, null)), i0.ɵdid(117, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["08"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(120, 0, null, null, 2, "ion-option", [["value", "9"]], null, null, null, null, null)), i0.ɵdid(121, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["09"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(124, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(125, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["10"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(128, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(129, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["11"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(132, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(133, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["12"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(136, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(137, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["13"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(140, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(141, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["14"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(144, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(145, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["15"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(148, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(149, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["16"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(152, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(153, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["17"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(156, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(157, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["18"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(160, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(161, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["19"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(164, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(165, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["20"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(168, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(169, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["21"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(172, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(173, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["22"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(176, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), i0.ɵdid(177, 16384, [[5, 4]], 0, i30.Option, [i0.ElementRef], null, null), (_l()(), i0.ɵted(-1, null, ["23"])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, 2, ["\n          "])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, 0, ["\n    "])), (_l()(), i0.ɵted(-1, 3, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(188, 0, null, null, 5, "ion-content", [["class", "restaurant_background"], ["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i31.View_Content_0, i31.RenderType_Content)), i0.ɵdid(189, 4374528, null, 0, i32.Content, [i4.Config, i9.Platform, i11.DomController, i0.ElementRef, i0.Renderer, i21.App, i33.Keyboard, i0.NgZone, [2, i18.ViewController], [2, i22.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n  "])), (_l()(), i0.ɵand(16777216, null, 1, 1, null, View_RestaurantPage_1)), i0.ɵdid(192, 802816, null, 0, i34.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, 1, ["\n\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_10 = "Dia Obert"; _ck(_v, 32, 0, currVal_10); var currVal_11 = _co.dia; _ck(_v, 35, 0, currVal_11); var currVal_12 = "0"; _ck(_v, 40, 0, currVal_12); var currVal_13 = "1"; _ck(_v, 44, 0, currVal_13); var currVal_14 = "2"; _ck(_v, 48, 0, currVal_14); var currVal_15 = "3"; _ck(_v, 52, 0, currVal_15); var currVal_16 = "4"; _ck(_v, 56, 0, currVal_16); var currVal_17 = "5"; _ck(_v, 60, 0, currVal_17); var currVal_18 = "6"; _ck(_v, 64, 0, currVal_18); var currVal_19 = "7"; _ck(_v, 68, 0, currVal_19); var currVal_28 = "Hora Cuina"; _ck(_v, 73, 0, currVal_28); var currVal_29 = _co.hora; _ck(_v, 76, 0, currVal_29); var currVal_30 = "0"; _ck(_v, 85, 0, currVal_30); var currVal_31 = "1"; _ck(_v, 89, 0, currVal_31); var currVal_32 = "2"; _ck(_v, 93, 0, currVal_32); var currVal_33 = "3"; _ck(_v, 97, 0, currVal_33); var currVal_34 = "4"; _ck(_v, 101, 0, currVal_34); var currVal_35 = "5"; _ck(_v, 105, 0, currVal_35); var currVal_36 = "6"; _ck(_v, 109, 0, currVal_36); var currVal_37 = "7"; _ck(_v, 113, 0, currVal_37); var currVal_38 = "8"; _ck(_v, 117, 0, currVal_38); var currVal_39 = "9"; _ck(_v, 121, 0, currVal_39); var currVal_42 = _co.items; _ck(_v, 192, 0, currVal_42); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 4)._hidden; var currVal_1 = i0.ɵnov(_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 32)._disabled; var currVal_3 = i0.ɵnov(_v, 37).ngClassUntouched; var currVal_4 = i0.ɵnov(_v, 37).ngClassTouched; var currVal_5 = i0.ɵnov(_v, 37).ngClassPristine; var currVal_6 = i0.ɵnov(_v, 37).ngClassDirty; var currVal_7 = i0.ɵnov(_v, 37).ngClassValid; var currVal_8 = i0.ɵnov(_v, 37).ngClassInvalid; var currVal_9 = i0.ɵnov(_v, 37).ngClassPending; _ck(_v, 31, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_20 = i0.ɵnov(_v, 73)._disabled; var currVal_21 = i0.ɵnov(_v, 78).ngClassUntouched; var currVal_22 = i0.ɵnov(_v, 78).ngClassTouched; var currVal_23 = i0.ɵnov(_v, 78).ngClassPristine; var currVal_24 = i0.ɵnov(_v, 78).ngClassDirty; var currVal_25 = i0.ɵnov(_v, 78).ngClassValid; var currVal_26 = i0.ɵnov(_v, 78).ngClassInvalid; var currVal_27 = i0.ɵnov(_v, 78).ngClassPending; _ck(_v, 72, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_40 = i0.ɵnov(_v, 189).statusbarPadding; var currVal_41 = i0.ɵnov(_v, 189)._hasRefresher; _ck(_v, 188, 0, currVal_40, currVal_41); }); }
export function View_RestaurantPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-restaurant", [], null, null, null, View_RestaurantPage_0, RenderType_RestaurantPage)), i0.ɵdid(1, 49152, null, 0, i35.RestaurantPage, [i36.DatabaseProvider, i22.NavController, i37.NavParams, i38.Network, i39.ToastController, i9.Platform, i40.LoadingController], null, null)], null, null); }
var RestaurantPageNgFactory = i0.ɵccf("page-restaurant", i35.RestaurantPage, View_RestaurantPage_Host_0, {}, {}, []);
export { RestaurantPageNgFactory as RestaurantPageNgFactory };
//# sourceMappingURL=restaurant.ngfactory.js.map