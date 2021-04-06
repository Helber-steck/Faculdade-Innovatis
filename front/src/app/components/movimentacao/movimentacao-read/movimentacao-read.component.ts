import { movimentacaoService } from './../movimentacao.service';
import { movimentacao } from './../movimentacao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimentacao-read',
  templateUrl: './movimentacao-read.component.html',
  styleUrls: ['./movimentacao-read.component.css']
})
export class movimentacaoReadComponent implements OnInit {

  movimentacoes: movimentacao[]
  displayedColumns = ['id', 'quantidade', 'name', 'data',  'idusuario', 'idproduto', 'action']
  
  constructor(private movimentacaoService: movimentacaoService) { }

  ngOnInit(): void {
    this.movimentacaoService.read().subscribe(movimentacoes => {
      this.movimentacoes = movimentacoes
    })
  }

}
