import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'; /* rxjs observable 임폴트*/
import 'rxjs/add/operator/map';

import { User } from '../models/user'; /* user 모델 가져옴*/

/* 프로바이더 만들어줌 User 의존성 찾기 위한 DI*/

@Injectable()
export class GithubUsers {
  githubApiUrl = 'https://api.github.com'; /* 가져올 데이터 api 주소 정의함*/

  constructor(public http: Http) {
    console.log('Hello GithubUsers Provider');
  }

  /* api 파싱하기 위해 로드함 */
  load(): Observable<User[]>{ /*user 어레이*/
    return this.http.get(`${this.githubApiUrl}/users`)
    .map(res => <User[]> res.json()); /* user모델에 맞게 담아 반환함*/
  }
    
  loadDetails(login: string): Observable<User>{ /* 디테일 데이터*/
    return this.http.get(`${this.githubApiUrl}/users/${login}`)
    .map(res => <User>(res.json()))
  }
    
  searchUsers(searchParam: string): Observable<User[]>{/* 서치 데이터*/
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
    .map(res => <User[]>(res.json().items)) 
  }
}
