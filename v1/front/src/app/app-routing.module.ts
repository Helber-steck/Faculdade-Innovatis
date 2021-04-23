import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";

import { categoriaCrudComponent } from "./views/categoria-crud/categoria-crud.component";

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

  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
