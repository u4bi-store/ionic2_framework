import { Component, NgZone, ViewChild } from '@angular/core';
import * as io from 'socket-io-client'; /* 소켓 모듈 임포트*/
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content; /* 뷰차일드 부모요소 액세스*/
  messages:any = []; /* 메세지가 담겨질곳*/
  socketHost: string = "http://localhost:3000/"; /* 호스트*/
  socket:any; /* 소켓넘*/
  chat:any; /* 샌드 메세지*/
  username:string; /* 샌드 닉네임*/
  zone:any; /*구역 https://angular.io/docs/ts/latest/api/core/index/NgZone-class.html */
  
  constructor(public navCtrl: NavController) { /* 생성자선언*/
    this.socket = io.connent(this.socketHost); /* 소켓연결*/
    this.zone = new NgZone({enableLongStackTrace:false}); /* 구역설정 스택뻘스*/
    
    this.socket.on("chat message", (msg) =>{ /* 핸들러 지정 'chat message'가 오면*/
      this.zone.run(() =>{ /* 랜딩*/
        this.messages.push(msg); /* 메세지 푸쉬*/
        this.content.scrollToBottom(); /* 컴포넌트에 붙혀줌*/
      });
    });
  }
  
  chatSend(v){ /* 뷰단에서 인풋에서 샌드함*/
    let data = { /* 데이터 담음*/
      message: v.chatText, /* 메세지*/
      username: this.username /* 닉네임*/
    } /* 이 블록만 할당 let*/

    this.socket.emit('new message', data); /* 소켓을 통해 보냄*/
    this.chat = ''; /* 빈칸을 바인딩시킴*/
  }
}
