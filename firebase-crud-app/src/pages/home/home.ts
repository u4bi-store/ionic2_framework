import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular'; /* 얼럿 컨트롤러 임포트*/

import {AngularFire, FirebaseListObservable} from 'angularfire2'; /* 파이어베이스 임포트*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  songs: FirebaseListObservable<any>; /* songs  변수만듬 */

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire) { /* 생성자에 파이어베이스 넘김*/
    this.songs = af.database.list('/songs'); /*파이어 베이스에 주입 후에 songs를 초기화함*/
  }

  addSong(){
    
    let prompt = this.alertCtrl.create({ /* 얼럿 생성함 객체형식으로 속성정의*/
      title: '노래 제목',
      message: "등록하실 노래의 제목을 입력해주세요.",
      inputs: [
        {
          name: 'title',
          placeholder: '노래제목'
        },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => { /* 취소시 핸들러 지정 */
            console.log('클릭 취소함');
          }
        },
        {
          text: '저장',
          handler: data => { /* 저장시 핸들러 지정 */
            this.songs.push({ /* songs에 푸시함*/
              title: data.title /* title에 data의 title을 주입*/
            });
          }
        }
      ]
    });
    
    prompt.present(); /* 위에 객체로 정의된거 표출함*/
  }
    
}
