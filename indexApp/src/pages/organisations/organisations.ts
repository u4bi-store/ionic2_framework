import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Organisations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organisations',
  templateUrl: 'organisations.html'
})
export class OrganisationsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() { /* 아이오닉 라이프 사이클 고리임 */
    console.log('Hello OrganisationsPage Page');
  }

}
