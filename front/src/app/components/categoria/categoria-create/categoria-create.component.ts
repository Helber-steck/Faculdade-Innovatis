import { categoria } from './../categoria.model';
import { categoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class categoriaCreateComponent implements OnInit {

  categoria: categoria = {
    name: ''
  }

  constructor(private categoriaService: categoriaService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createcategoria(): void {
    this.categoriaService.create(this.categoria).subscribe(() => {
      this.categoriaService.showMessage('criado!')
      this.router.navigate(['/categorias'])
    })

  }

  cancel(): void {
    this.router.navigate(['/categorias'])
  }
}
