import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface baseElement {
  id?:number
}

@Injectable({
  providedIn: 'root'
})
export abstract class DataService<T extends baseElement> {
  url!: string;
  constructor(protected http: HttpClient) { }

  get() {
    return this.http.get(this.url) as Observable<T[]>;
  }

  getOne(id:number) {
    return this.http.get(`${this.url}/${id}`) as Observable<T>;
  }

  // object : T
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  deleteObject(object: T) {
    return this.http.delete(`${this.url}/${object.id}`);
  }

  update(object: T) {
    return this.http.patch(`${this.url}/${object.id}`,object);
  }

  add(object: T) {
    return this.http.post(this.url,object);
  }
}
