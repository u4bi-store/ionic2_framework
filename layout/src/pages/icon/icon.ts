import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Icon page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-icon',
  templateUrl: 'icon.html',
})
export class Icon {

  myIcon: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.myIcon = "home";
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Icon');
  }

}
