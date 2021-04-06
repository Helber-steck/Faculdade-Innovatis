import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { movimentacao } from "./movimentacao.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class movimentacaoService {
  baseUrl = "http://localhost:3001/movimentacoes";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(movimentacao: movimentacao): Observable<movimentacao> {
    return this.http.post<movimentacao>(this.baseUrl, movimentacao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<movimentacao[]> {
    return this.http.get<movimentacao[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<movimentacao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<movimentacao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(movimentacao: movimentacao): Observable<movimentacao> {
    const url = `${this.baseUrl}/${movimentacao.id}`;
    return this.http.put<movimentacao>(url, movimentacao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<movimentacao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<movimentacao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
