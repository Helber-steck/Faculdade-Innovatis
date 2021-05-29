import { LoginServiceService } from './login-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
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
    private router: Router,
    private http: HttpClient
  ) { }





  ngOnInit() {
  }

  login(): void {
    this.loginService.login(this.usuario); 
  }

  adm(): void {
    if(this.usuario.login == "adm" && this.usuario.senha == "adm") this.loginService.adm(this.usuario);
    else{
      console.log("erro")
    }
  }
 
 
}
