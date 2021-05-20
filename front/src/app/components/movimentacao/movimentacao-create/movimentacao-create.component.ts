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
    id_produto: null,
    id_usuario: null,
    idmovimentacao: null, 
    data_hora: null,
    login_usuario: '',
    nome_produto: '',
    quantidade: null,
    tipo_movimentacao: '', 
  }

  movimentacoes: movimentacao[]
 
  constructor(
    private movimentacaoService: movimentacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.movimentacaoService.read().subscribe(movimentacao => {
      this.movimentacoes = movimentacao
    })
  }

  createmovimentacao(): void {
    this.movimentacaoService.create(this.movimentacao).subscribe(data => {
      this.movimentacaoService.showMessage('criado!')
      this.router.navigate(['/movimentacoes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/movimentacoes'])
  }
}
