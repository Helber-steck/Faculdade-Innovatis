import {Component, OnInit} from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
 

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  
  
  product: Product = {
    name: '',
    quantidade: null,
    status: null,
    idfornecedor: null,
    idcategoria: null,
    

  };
 

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService
        .readById(id)
        .subscribe((product) => {
            this.product = product;
        })
}

updateProduct(): void {
  this.productService.update(this.product)
      .subscribe((product) => {
          this.productService.showMessage('Salvo com sucesso!');
          this.router.navigate(['/products']);
      });
}

cancel(): void {
  this.router.navigate(['/products']);
}
}
