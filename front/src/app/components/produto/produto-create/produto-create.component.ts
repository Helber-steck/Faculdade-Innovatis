import { Produto } from './../produto.model';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    name: '',
    status: '',
    quantidade: null,
    idfornecedor: null,
    idcategoria: null,
  }

  constructor(private produtoService: ProdutoService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduto(): void {
    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.showMessage('Criado!')
      this.router.navigate(['/produtos'])
    })

  }

  cancel(): void {
    this.router.navigate(['/produtos'])
  }
}
