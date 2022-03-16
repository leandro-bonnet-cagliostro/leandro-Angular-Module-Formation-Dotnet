import { Injectable } from '@angular/core';
import { baseElement, DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentUserService } from './current-user.service';

export interface User extends baseElement {
  username: string,
  password: string,
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class DataUsersService extends DataService<User> {
  override url = "http://localhost:3000/users";
  constructor(http: HttpClient, private currentUser : CurrentUserService) { 
    super(http);
  }

  login(user: User) {
    return new Promise ((resolve,reject) => {
      return (this.http.get(this.url, {
        params : {
          username: user.username,
          password: user.password
        }
      }) as Observable<Array<User>>).subscribe(user => {
        if (user.length) {
          localStorage.setItem('currentUser', JSON.stringify(user[0]));
          console.log("Tu es loggé !");
          // rajout
          this.currentUser.load();
          resolve("ok");
        } else {
          localStorage.removeItem('currentUser');
          console.log("Tu n'es pas loggé !");
          // rajout
          this.currentUser.load();
          reject("pasOk");
        }
      })
    })

    // return (this.http.get(this.url, {
    //   params : {
    //     username: user.username,
    //     password: user.password
    //   }
    // }) as Observable<Array<User>>).subscribe(user => {
    //   if (user.length) {
    //     localStorage.setItem('currentUser', JSON.stringify(user[0]));
    //     console.log("Tu es loggé !");
    //     // rajout
    //     this.currentUser.load();
    //   } else {
    //     localStorage.removeItem('currentUser');
    //     console.log("Tu n'es pas loggé !");
    //     // rajout
    //     this.currentUser.load();
    //   }
    // })
    
  }

  logout() {
    localStorage.removeItem('currentUser');
    // rajout
    this.currentUser.load();
  }
}
