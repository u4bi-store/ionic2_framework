import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2'; /* 파이어베이스 임포트*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  songs: FirebaseListObservable<any>; /* songs  변수만듬 */

  constructor(public navCtrl: NavController, af: AngularFire) { /* 생성자에 파이어베이스 넘김*/
    this.songs = af.database.list('/songs'); /*파이어 베이스에 주입 후에 songs를 초기화함*/
  }

}
