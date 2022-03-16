import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService, baseElement } from './data.service';

export interface Movie extends baseElement {
  title: string,
  description: string,
  Catégorie:string
}

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService extends DataService<Movie> {
  override url = "http://localhost:3000/movies";
  constructor(http: HttpClient) { 
    super(http);
  }
}
