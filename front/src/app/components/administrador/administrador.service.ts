import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { administrador } from "./administrador.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})

export class administradoService {
 
  baseUrl = "http://54.90.39.27:5000/usuarios";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(administrador: administrador): Observable<administrador> {
    return this.http.post(`${this.baseUrl}/novo`, administrador).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<administrador[]> {
    return this.http.get<administrador[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(idusuario: number): Observable<administrador> {
    const url = `${this.baseUrl}/${idusuario}`;
    return this.http.get<administrador>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(administrador: administrador): Observable<administrador> {
    const url = `${this.baseUrl}/${administrador.idusuario}`;
    return this.http.put<administrador>(url, administrador).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(idusuario: number): Observable<administrador> {
    const url = `${this.baseUrl}/${idusuario}`;
    return this.http.delete<administrador>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
