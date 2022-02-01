import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-web-academy';

  isLogin!: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      this.isLogin = this.authService.isLogin;
  }

  onLogout() {
    this.authService.logout();
  }

}
