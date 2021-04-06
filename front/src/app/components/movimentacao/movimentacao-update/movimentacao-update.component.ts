import { movimentacao } from "./../movimentacao.model";
import { Router, ActivatedRoute } from "@angular/router";
import { movimentacaoService } from "./../movimentacao.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movimentacao-update",
  templateUrl: "./movimentacao-update.component.html",
  styleUrls: ["./movimentacao-update.component.css"],
})
export class movimentacaoUpdateComponent implements OnInit {
  movimentacao: movimentacao;

  constructor(
    private movimentacaoService: movimentacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.movimentacaoService.readById(id).subscribe((movimentacao) => {
      this.movimentacao = movimentacao;
    });
  }

  updatemovimentacao(): void {
    this.movimentacaoService.update(this.movimentacao).subscribe(() => {
      this.movimentacaoService.showMessage("Atualizado com sucesso!");
      this.router.navigate(["/movimentacoes"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/movimentacoes"]);
  }
}
