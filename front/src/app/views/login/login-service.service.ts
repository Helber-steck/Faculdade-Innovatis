import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  constructor(private http: HttpClient,  private router: Router) { }

  login(usuario) {
    const options = {
      headers: { 'Content-Type': 'application/json', }
    };
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario), (options)).subscribe(data => {
       /*Retorno Http*/
      var token = JSON.parse(JSON.stringify(data)).token;
      var idUsuario = JSON.parse(JSON.stringify(data)).idUsuario;
      localStorage.setItem("token", token);
      localStorage.setItem("idUsuario",idUsuario);
      this.router.navigate(['/home']);
      console.info(token,idUsuario)
    });
  }
}