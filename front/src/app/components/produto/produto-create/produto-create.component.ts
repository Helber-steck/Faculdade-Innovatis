import { Produto } from './../produto.model';
import { ProdutoService } from './../produto.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  @Input() loginUsuario: any

  produto: Produto = {
    id_categoria: null,
    id_fornecedor: null,
    idproduto: null,     //id
    nome_produto: '',  //nome
    quantidade: null,
    status_produto: '',
  }

  produtos: Produto

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.produtoService.teste().subscribe(produtos => {
      this.produtos = produtos
    })

    var usuario = window.localStorage.getItem('idUsuario');
    this.loginUsuario = usuario
  }

  createProduto(): void {

    if(this.produto.quantidade <= 0) {
      this.produtoService.showMessage('Quantidade deve ser maior que 0', true)
      return;
    }

    this.produtoService.create(this.produto)
    .subscribe(data => {
      this.produtoService.showMessage('criado!')
      this.router.navigate(['/produtos'])
    })

  }

  cancel(): void {
    this.router.navigate(['/produtos'])
  }
}
