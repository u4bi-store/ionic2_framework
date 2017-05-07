import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Gestures page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html',
})
export class Gestures {

  press : number;
  pan   : number;
  swipe : number;
  tap   : number;
  rotate: number;
  pinch : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.press  = 0;
    this.pan    = 0;
    this.swipe  = 0;
    this.tap    = 0;
    this.rotate = 0;
    this.pinch  = 0;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gestures');
  }

  pressEvent  = (e) => this.press++;
  panEvent    = (e) => this.pan++;
  swipeEvent  = (e) => this.swipe++;
  tapEvent    = (e) => this.tap++;
  rotateEvent = (e) => this.rotate++;
  pinchEvent  = (e) => this.pinch++;

}
