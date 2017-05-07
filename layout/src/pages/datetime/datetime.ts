import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Datetime page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html',
})
export class Datetime {

  month : string;
  date  : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.month = '2017-05-07';
    this.date = '14:21';
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Datetime');
  }

}
