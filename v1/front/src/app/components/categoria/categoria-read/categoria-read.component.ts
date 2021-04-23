import { categoriaService } from './../categoria.service';
import { categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";


@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class categoriaReadComponent implements OnInit {

  categorias: Observable<categoria[]>;
  // categorias: categoria[] = [];
  // books: any = []; 
  
  displayedColumns = ['idcategoria', 'nome_categoria']
  
  constructor(private categoriaService: categoriaService) { }

  ngOnInit(): void {
    // this.categoriaService.read().subscribe(categorias => {
    //   this.categorias = this.categoriaService.read();
    //   console.log(categorias)
    // })

    this.categoriaService.read().subscribe((categorias: categoria[])=>{
      this.categorias = this.categoriaService.read();
      console.log(categorias);
    })
  }

  

  // ngOnInit() {
  //   this.categoriaService.read().subscribe((categorias: categoria[]) => {
  //     this.categorias = categorias;
  //   });
  // }
 
}
