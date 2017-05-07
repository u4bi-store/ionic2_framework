import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Range page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class Ranges {

  brightness: number;
  contrast: number;
  warmth: number;
  structure: any;
  text: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.brightness = 20;
    this.contrast = 0;
    this.warmth = 1300;
    this.structure = {
      lower: 33,
      upper: 60
    };
    this.text = 0;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Range');
  }

}
