import { movimentacao } from './../movimentacao.model';
import { movimentacaoService } from './../movimentacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimentacao-create',
  templateUrl: './movimentacao-create.component.html',
  styleUrls: ['./movimentacao-create.component.css']
})
export class movimentacaoCreateComponent implements OnInit {

  movimentacao: movimentacao = {
    quantidade: null,
    name: '',
    data: null,
    idusuario: null,
    idproduto: null,
  }

  constructor(private movimentacaoService: movimentacaoService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createmovimentacao(): void {
    this.movimentacaoService.create(this.movimentacao).subscribe(() => {
      this.movimentacaoService.showMessage('criado!')
      this.router.navigate(['/movimentacoes'])
    })

  }

  cancel(): void {
    this.router.navigate(['/movimentacoes'])
  }
}
