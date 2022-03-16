import { Component, OnInit } from '@angular/core';
import { FormGroup, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { DataMoviesService, Movie } from 'src/app/services/data-movies.service';
import { DataUsersService, User } from 'src/app/services/data-users.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  params!: string | null;
  queryParamsId: any;
  queryParamsType: any;
  objectReceive!: any;
  // val!:string;
  // val2!:string;
  constructor(private route: ActivatedRoute, private movieService: DataMoviesService, private userService: DataUsersService, public currentUser: CurrentUserService) { }

  

  ngOnInit(): void {
    console.log("Route : ",this.route.snapshot.paramMap.keys);
    // this.params = this.route.snapshot.paramMap.get('id');
    // console.log("id = ",this.params);
    this.queryParamsId = this.route.snapshot.queryParamMap.get('id');
    this.queryParamsType = this.route.snapshot.queryParams['type'];
    
    console.log(this.queryParamsId,this.queryParamsType);
    if(this.queryParamsType==="movie") {
      this.objectReceive = this.movieService.getOne(this.queryParamsId).subscribe(movie => {
        this.objectReceive = movie;
        // this.val = this.objectReceive.title;
      });
    }
    else if (this.queryParamsType==="user") {
      this.objectReceive = this.userService.getOne(this.queryParamsId).subscribe(user => {
        this.objectReceive = user;
      });
    }
    else {

    }
    
  }

  changeTitle(title:string) {

    if(this.currentUser?.user?.role === "admin")
    {
      // && this.currentUser?.user?.role === "admin"

      //console.log(title);
      //console.log("Avant le changement : "+this.objectReceive.title);
      this.objectReceive.title = title;
      //console.log("Après le changement : "+this.objectReceive.title);
      this.movieService.update(this.objectReceive).subscribe(movie => {
        console.log(movie);
        console.log((movie as Movie).title);
      });

      //console.log("Après le changement V2 : "+this.objectReceive.title);
      // this.val = title;
      // this.val2 = title+" : chocolat";
    }
  }
  changeDescription() {
    if(this.currentUser?.user?.role === "admin")
    {
      //this.objectReceive.description = description;
      this.movieService.update(this.objectReceive).subscribe(movie => {
        console.log(movie);
        console.log((movie as Movie)["description"]);
      });
    }
  }
  changeCategorie() {
    if(this.currentUser?.user?.role === "admin")
    {
      this.movieService.update(this.objectReceive).subscribe(movie => {
        console.log(movie);
        console.log((movie as Movie)["Catégorie"]);
      });
    }
  }

  changeUsername(username:string) {
    if(this.currentUser?.user?.role === "admin")
    {
      //console.log(title);
      //console.log("Avant le changement : "+this.objectReceive.title);
      this.objectReceive.username = username;
      //console.log("Après le changement : "+this.objectReceive.title);
      this.userService.update(this.objectReceive).subscribe(user => {
        console.log(user);
        console.log((user as User).username);
      });
    }
  }

  changerRole(role:string) {
    if(this.currentUser?.user?.role === "admin")
    {
      this.objectReceive.role = role;
      this.userService.update(this.objectReceive).subscribe(user => {
        console.log(user);
        console.log((user as User).role);
      });
    }
  }
  
}
