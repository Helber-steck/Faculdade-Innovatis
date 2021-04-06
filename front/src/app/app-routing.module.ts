import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";

import { categoriaDeleteComponent } from './components/categoria/categoria-delete/categoria-delete.component';
import { categoriaUpdateComponent } from './components/categoria/categoria-update/categoria-update.component';
import { categoriaCrudComponent } from "./views/categoria-crud/categoria-crud.component";
import { categoriaCreateComponent } from './components/categoria/categoria-create/categoria-create.component';

import { movimentacaoDeleteComponent } from './components/movimentacao/movimentacao-delete/movimentacao-delete.component';
import { movimentacaoUpdateComponent } from './components/movimentacao/movimentacao-update/movimentacao-update.component';
import { movimentacaoCrudComponent } from "./views/movimentacao-crud/movimentacao-crud.component";
import { movimentacaoCreateComponent } from './components/movimentacao/movimentacao-create/movimentacao-create.component';

import { fornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { fornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { fornecedorCrudComponent } from "./views/fornecedor-crud/fornecedor-crud.component";
import { fornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';

import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "",
    component: LoginComponent,
  },

  {
    path: "categorias",
    component: categoriaCrudComponent
  },
  {
    path: "categorias/create",
    component: categoriaCreateComponent
  },
  {
    path: "categorias/update/:id",
    component: categoriaUpdateComponent
  },
  {
    path: "categorias/delete/:id",
    component: categoriaDeleteComponent
  },
  
  {
    path: "movimentacoes",
    component: movimentacaoCrudComponent
  },
  {
    path: "movimentacoes/create",
    component: movimentacaoCreateComponent
  },
  {
    path: "movimentacoes/update/:id",
    component: movimentacaoUpdateComponent
  },
  {
    path: "movimentacoes/delete/:id",
    component: movimentacaoDeleteComponent
  },


  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },

  {
    path: "fornecedors",
    component: fornecedorCrudComponent
  },
  {
    path: "fornecedors/create",
    component: fornecedorCreateComponent
  },
  {
    path: "fornecedors/update/:id",
    component: fornecedorUpdateComponent
  },
  {
    path: "fornecedors/delete/:id",
    component: fornecedorDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
