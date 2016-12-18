import { Component } from '@angular/core';

import { NavController,
         AlertController, /* 얼럿 컨트롤러 임포트*/
         ActionSheetController } from 'ionic-angular'; /* 액션시트 임포트*/

import {AngularFire, FirebaseListObservable} from 'angularfire2'; /* 파이어베이스 임포트*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  songs: FirebaseListObservable<any>; /* songs  변수만듬 */

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire, public actionSheetCtrl: ActionSheetController) { /* 생성자에 파이어베이스 넘김*/
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

  showOptions(songId, songTitle) { /* 노래번호, 노래제목*/
    let actionSheet = this.actionSheetCtrl.create({ /* 액션 시트 생성*/
      title: ' 노래를 삭제하거나 제목을 수정할 수 있습니다.',
      buttons: [
        {
          text: '노래삭제',
          role: 'destructive',
          handler: () => {
            //this.removeSong(songId); /* 인자로 받은 노래번호 삭제함*/
          }
        },{
          text: '제목수정',
          handler: () => {
            //this.updateSong(songId, songTitle);  /* 노래번호에 대입되는 제목을 수정함*/
          }
        },{
          text: '취소',
          role: 'cancel',
          handler: () => {
            console.log('클릭 취소함');
          }
        }
      ]
    });
    
    actionSheet.present(); /* 위에 객체로 정의된거 표출함*/
  }

}
