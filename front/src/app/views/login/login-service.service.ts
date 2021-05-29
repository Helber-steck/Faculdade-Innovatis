import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
import { Router } from '@angular/router';
import { Observable, EMPTY } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar,  private router: Router) { }

  usuario = { login: '', senha: '' };

  login(usuario) {
    const options = {
      headers: { 'Content-Type': 'application/json', }
    };
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario), (options))
      .subscribe(
        data => {
          /*Retorno Http*/
          var token = JSON.parse(JSON.stringify(data)).token;
          var idUsuario = JSON.parse(JSON.stringify(data)).idUsuario;
          
          
          localStorage.setItem("token", token);
          localStorage.setItem("idUsuario",idUsuario);
          
          this.router.navigate(['/home']); 
          
          
          
          console.info(token)
          console.info(idUsuario)

        }
      ),
      catchError((e) => this.errorHandler(e))
  }

  adm(usuario) {
    const options = {
      headers: { 'Content-Type': 'application/json', }
    };
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario), (options))
      .subscribe(
        data => {
          /*Retorno Http*/
          var token = JSON.parse(JSON.stringify(data)).token;
          var idUsuario = JSON.parse(JSON.stringify(data)).idUsuario;
          
          
          localStorage.setItem("token", token);
          localStorage.setItem("idUsuario",idUsuario);
          
          this.router.navigate(['/administrador']); 
        
          console.info(token)
          console.info(idUsuario)

        }
      ),
      catchError((e) => this.errorHandler(e))
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
  
}