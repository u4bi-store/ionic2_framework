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
          buttons: ['확인']
      });

      alert.present();
  }

  basicConfirm(){
    let alert = this.alertCtrl.create({
      title : '제목',
      message : '내용입니다',
      buttons : [
        {
          text : '1번 버튼',
          handler : () => {
            console.log('1번 버튼 누름');
          }
        },
        {
          text : '2번 버튼',
          handler : () => {
            console.log('2번 버튼 누름');
          }
        }
      ]
    });

    alert.present();
  }

}
