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

  basicPrompt(){
    let alert = this.alertCtrl.create({
      title : '아이디 입력',
      inputs:[
        {
          label : '아이디',
          name : 'id',
          placeholder : '아이디 입력해주세요'
        },
        {
          label : '비밀번호',
          name : 'pass',
          placeholder : '비밀번호 입력해주세요.',
          type : 'password'
        }
      ],
      buttons : [
        {
          text : '취소',
          handler : data =>{
            console.log('취소버튼 누름');
          }
        },
        {
          text : '로그인',
          handler : data =>{
            console.log('로그인 버튼 누름');
            console.log('아이디 : ', data.id);
            console.log('비밀번호 : ', data.pass);
          }
        }
      ]
    });

    alert.present();
  }

  basicRadio(){
    let alert = this.alertCtrl.create({
      title : '선택',
      inputs : [
        {
          type : 'radio',
          label : '1번',
          value : '1'
        },
        {
          type : 'radio',
          label : '2번',
          value : '2',
          checked : true
        },
        {
          type : 'radio',
          label : '3번',
          value : '3'
        },
        {
          type : 'radio',
          label : '4번',
          value : '4'
        }
      ],
      buttons : [
        {
          text : '취소',
          handler : data =>{
            console.log('취소버튼 누름');
          }
        },
        {
          text : '확인',
          handler : data =>{
            console.log('확인 버튼 누름', data);
          }
        }
      ]
    });

    alert.present();
  }

}
