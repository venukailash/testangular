import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindetails = {
    'username': 'venukailash',
    'password': '',
    'error': 'Invalid Credentials',
    'invalidLogin': false
  }
  constructor(private router: Router, private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.logindetails.username,this.logindetails.password)) {
      this.logindetails.invalidLogin = false;
      this.router.navigate(['welcome',this.logindetails.username])
    }else{
      this.logindetails.invalidLogin = true;
    }
  }
}
