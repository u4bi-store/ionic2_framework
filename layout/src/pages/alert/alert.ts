import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Alert page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class Alert {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl : AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Alert');
  }

  basicAlert() {
      let alert = this.alertCtrl.create({
          title: '제목',
          subTitle: '부제목',
          buttons: ['버튼 1번명', '버튼2번명']
      });

      alert.present();
  }

}
