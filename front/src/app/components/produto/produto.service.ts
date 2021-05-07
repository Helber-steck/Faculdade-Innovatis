import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto.model";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class ProdutoService {

    produto = "";
    baseUrl = "http://54.90.39.27:5000/produtos";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false) {
        this.snackBar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ['msg-error'] : ['msg-success']
        })
    }

    create(produto: Produto): Observable<Produto> {
        return this.http.post(`${this.baseUrl}/novo`, produto).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    read(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.baseUrl)
            .pipe(
                map((obj) => obj),
                catchError((e) => this.errorHandler(e))
            );
    }

    readById(idproduto: number): Observable<Produto> {
        const url = `${this.baseUrl}/${idproduto}`;
        return this.http.get<Produto>(url).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
      }

    update(produto: Produto): Observable<Produto> {
        const url = `${this.baseUrl}/${produto.idproduto}`;
        return this.http.put<Produto>(url, produto).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    delete(idproduto: number): Observable<Produto> {
        const url = `${this.baseUrl}/${idproduto}`;
        return this.http.delete<Produto>(url).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }
    

    errorHandler(e: any): Observable<any> {
        this.showMessage('Ocorreu um erro', true);
        return EMPTY;
    }
}
