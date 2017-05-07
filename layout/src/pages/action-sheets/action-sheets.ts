import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the ActionSheets page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-action-sheets',
  templateUrl: 'action-sheets.html',
})
export class ActionSheets {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl : ActionSheetController){
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheets');
  }

  presentActionSheet() {
      let actionSheet = this.actionSheetCtrl.create({
        title: '액션 시트 타이틀',
        buttons: [
          {
            text: '버튼 1번',
            role: 'destructive',
            handler: () => {
              console.log('버튼 1번');
            }
          },
          {
            text: '버튼 2번',
            handler: () => {
              console.log('버튼 2번');
            }
          },
          {
            text: '버튼 3번',
            role: 'cancel',
            handler: () => {
              console.log('버튼 3번');
            }
          }
        ]
      });
      
      actionSheet.present();
  }

}
