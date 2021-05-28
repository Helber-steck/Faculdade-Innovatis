import { LoginServiceService } from './login-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = { login: '', senha: '' };

  constructor(
    private loginService: LoginServiceService, 
    private http: HttpClient 
  ) { }





  ngOnInit() {
  }

  login(): void {
    this.loginService.login(this.usuario); 
  }
 
 
}
