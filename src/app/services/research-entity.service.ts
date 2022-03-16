import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchEntityService {
  // isPossible = false;
  // research!:string;
  element = {isPossible : true, research : ""};
  
  constructor() { }
  ecoute!:any;
  // myObservable = of(this.element);

  myObservable = new Observable((observer) => {
    // console.log("La valeur de base");
    this.ecoute = observer;
    // observer.next("1");
    // observer.next("2");
    // observer.next("3");
  });
  // @Output('changement') newRecherche = new EventEmitter();
  // ob = {val:1};
  // myObservable2 = of(this.ob);

  // myObservable = new Observable()

  getElement() {
    return this.element;
  }

  getObservable() {
    return this.myObservable;
  }

  getResearch() {
    return this.element.research;
  }
  setResearch(text:string) {
    this.element.research = text;
    // this.myObservable = new Observable((observer) => {
    //   console.log("La valeur change");
    //   observer.next("text");
    // });
    // this.myObservable.pipe()
    this.ecoute.next(text);
    // console.log("Le set est appelé !");
    //this.ob.val++;
    //this.myObservable2.subscribe((item)=> console.log("changement recherche : "+item.val));
    // this.myObservable.subscribe((value)=> console.log("changement recherche : "+value));
  }

  getIsPossible() {
    return this.element.isPossible;
  }
  setIsPossible(change:boolean) {
    this.element.isPossible = change;
    // this.element.val++;
    // this.myObservable.subscribe((item)=> console.log("changement recherche : "+item.research));
  }
}
