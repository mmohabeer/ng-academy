import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email = "";
  password = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin() {
    const user: User = {email: this.email, password: this.password};
    this.authService.login(user);
  }

}
