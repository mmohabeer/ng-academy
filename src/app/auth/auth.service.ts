import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = new Subject<boolean>();

  constructor(private router: Router) { }

  private user?: User;

  isAuth() {
    if (this.user) {
      return true;
    }
    else {
      return false;
    }
  }

  login(user: User) {
    this.user = user;
    this.isLogin.next(true);
    this.router.navigate(["/"]);
  }

  logout() {
    this.user = undefined;
    this.isLogin.next(false);
    this.router.navigate(["/login"]);
  }

}
