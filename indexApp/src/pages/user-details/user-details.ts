import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  login : string;

  constructor(public navCtrl: NavController, private navParams: NavParams) { /* 받아냄*/ 
    /* https://ionicframework.com/docs/v2/api/navigation/NavParams/ */
    this.login = navParams.get('login'); /* this.login 내 파람값 login 주입*/
  }

  ionViewDidLoad() {
    console.log('Hello UserDetailsPage Page');
  }

}
