import { Component, NgZone, ViewChild } from '@angular/core';
import * as io from 'socket-io-client';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;
  messages:any = [];
  socketHost: string = "http://localhost:3000/";
  socket:any;
  chat:any;
  username:string;
  zone:any;
  
  constructor(public navCtrl: NavController) {
    this.socket = io.connent(this.socketHost);
    this.zone = new NgZone({enableLongStackTrace:false});
    this.socket.on("chat message", (msg) =>{
      this.zone.run(() =>{
        this.messages.push(msg);
        this.content.scrollToBottom();
      });
    });
  }

}
