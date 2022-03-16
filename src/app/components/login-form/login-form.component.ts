import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataUsersService } from 'src/app/services/data-users.service';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private userService : DataUsersService, public currentUser: CurrentUserService ,private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    try {
      await this.userService.login(this.form.value);
      // console.log("this.currentUser.user :",this.currentUser.user?true:false);
      if (this.currentUser?.user) {
        const navigationDetails: string[] = ['movie'];
        this.router.navigate(navigationDetails);
      }
    }
    catch(e) {
      console.log("Problème de connexion !");
    }
    // console.log("connecté ? :",this.currentUser.user?true:false);
    
    
  }



  

  logout() {
    this.userService.logout();
    // console.log("deconnecté ? :",this.currentUser.user?true:false);
    console.log("Vous êtes déconnectés !");
  }

}
