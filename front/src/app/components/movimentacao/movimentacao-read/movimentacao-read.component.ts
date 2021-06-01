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

  displayedColumns = ['id_produto', 'id_usuario', 'idmovimentacao', 'data_hora', 'login_usuario', 'nome_produto', 'quantidade', 'tipo_movimentacao', /*'action'*/]

  collection = [];

  constructor(
    private movimentacaoService: movimentacaoService,
  ) { }



  ngOnInit(): void {
    this.movimentacaoService.read().subscribe(movimentacoes => {
      this.movimentacoes = movimentacoes
    })
  }

}
