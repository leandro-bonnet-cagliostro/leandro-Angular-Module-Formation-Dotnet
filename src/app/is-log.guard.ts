import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from './services/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class IsLogGuard implements CanActivate {
  constructor(private currentUser : CurrentUserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.currentUser.user?true:false;
    // console.log(this.currentUser.load()?.id, typeof this.currentUser.user?.id);
    // return true;
  }
  
}
