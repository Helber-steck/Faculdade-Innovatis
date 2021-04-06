import { Router, ActivatedRoute } from "@angular/router";
import { movimentacaoService } from "./../movimentacao.service";
import { movimentacao } from "./../movimentacao.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movimentacao-delete",
  templateUrl: "./movimentacao-delete.component.html",
  styleUrls: ["./movimentacao-delete.component.css"],
})
export class movimentacaoDeleteComponent implements OnInit {
  movimentacao: movimentacao;

  constructor(
    private movimentacaoService: movimentacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movimentacaoService.readById(id).subscribe((movimentacao) => {
      this.movimentacao = movimentacao;
    });
  }

  deletemovimentacao(): void {
    this.movimentacaoService.delete(this.movimentacao.id).subscribe(() => {
      this.movimentacaoService.showMessage("Excluido com sucesso!");
      this.router.navigate(["/movimentacoes"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/movimentacoes"]);
  }
}
