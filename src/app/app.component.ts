import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { CurrentUserService } from './services/current-user.service';
import { ResearchEntityService } from './services/research-entity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex-final-v1';
  research = "";
  isDisplayed!:boolean;
  // textResearch(textResearch: string) {
  //   console.log("Le texte recherché est : "+textResearch);
  //   this.research = textResearch;
  // }
  constructor(private researchEntityService : ResearchEntityService, public router:Router, public currentUserService : CurrentUserService) {
    // this.router.url.includes("user")?this.isDisplayed=true:this.router.url.includes("movie")?this.isDisplayed=true:this.isDisplayed=false;
    this.isDisplayed = (this.router.url.includes("user")?true:false);
    this.isDisplayed = (this.router.url.includes("movie")?true:false);
    console.log(this.router.url);
    //console.log(this.router.)
    this.router.url.includes("user")?console.log("1"):console.log("2");
    this.router.url.includes("movie")?console.log("1"):console.log("2");
    // this.isDisplayed = true;
  }

  modifyReseach(text:string) {
    // console.log("Text du emit : "+text);
    if(this.researchEntityService.getIsPossible() === true) {
      this.research = text;
      this.researchEntityService.setResearch(this.research);
      console.log("La barre de recherche donne : "+this.researchEntityService.getResearch());
    }
  }

  modifyResearchEntity(possible:boolean) {
    console.log("on change de fenêtre !");
    this.researchEntityService.setIsPossible(possible);
    // console.log("La liste est-elle utilisable ici ? : "+this.researchEntityService.getIsPossible());
    this.isDisplayed=possible;
    if(this.isDisplayed)
      this.isDisplayed = this.currentUserService.user?true:false;
  }

  // nombre = {val:1}
  // myObservable = of(this.nombre).subscribe((n) => console.log("Je passe ici : "+n.val));

  // add() {
    // this.nombre.val++;
    // console.log(this.nombre.val);
    // console.log("Route : "+this.router.url);
  // }
}
