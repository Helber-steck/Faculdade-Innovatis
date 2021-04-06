import { fornecedorService } from './../fornecedor.service';
import { fornecedor } from './../fornecedor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class fornecedorReadComponent implements OnInit {

  fornecedors: fornecedor[]
  displayedColumns = ['id', 'name', 'cnpj', 'action']
  
  constructor(private fornecedorService: fornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.read().subscribe(fornecedors => {
      this.fornecedors = fornecedors
    })
  }

}
