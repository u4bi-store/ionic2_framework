import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/* 프로바이더 만들어줌 User 의존성 찾기 위한 DI*/

@Injectable()
export class GithubUsers {

  constructor(public http: Http) {
    console.log('Hello GithubUsers Provider');
  }

}
