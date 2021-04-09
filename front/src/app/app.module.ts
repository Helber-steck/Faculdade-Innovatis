import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpInterceptor, } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule,} from  '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RedDirective } from './directives/red.directive';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { ForDirective } from './directives/for.directive';

import { categoriaCrudComponent } from './views/categoria-crud/categoria-crud.component';
import { categoriaCreateComponent } from './components/categoria/categoria-create/categoria-create.component';
import { categoriaReadComponent } from './components/categoria/categoria-read/categoria-read.component';
import { categoriaRead2Component } from './components/categoria/categoria-read2/categoria-read2.component';
import { categoriaUpdateComponent } from './components/categoria/categoria-update/categoria-update.component';
import { categoriaDeleteComponent } from './components/categoria/categoria-delete/categoria-delete.component';

import { movimentacaoCrudComponent } from './views/movimentacao-crud/movimentacao-crud.component';
import { movimentacaoCreateComponent } from './components/movimentacao/movimentacao-create/movimentacao-create.component';
import { movimentacaoReadComponent } from './components/movimentacao/movimentacao-read/movimentacao-read.component';
import { movimentacaoRead2Component } from './components/movimentacao/movimentacao-read2/movimentacao-read2.component';
import { movimentacaoUpdateComponent } from './components/movimentacao/movimentacao-update/movimentacao-update.component';
import { movimentacaoDeleteComponent } from './components/movimentacao/movimentacao-delete/movimentacao-delete.component';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

import { fornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { fornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { fornecedorReadComponent } from './components/fornecedor/fornecedor-read/fornecedor-read.component';
import { fornecedorRead2Component } from './components/fornecedor/fornecedor-read2/fornecedor-read2.component';
import { fornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { fornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';

import { LoginComponent } from './views/login/login.component';
// import { from } from 'rxjs';
import { TokenInterceptor } from './http-interceptors/token.interceptor';

 
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RedDirective,
    ForDirective,

    LoginComponent,

    categoriaCrudComponent,
    categoriaCreateComponent,
    categoriaReadComponent,
    categoriaRead2Component,
    categoriaUpdateComponent,
    categoriaDeleteComponent,

    movimentacaoCrudComponent,
    movimentacaoCreateComponent,
    movimentacaoReadComponent,
    movimentacaoRead2Component,
    movimentacaoUpdateComponent,
    movimentacaoDeleteComponent,
    
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,

    fornecedorCrudComponent,
    fornecedorCreateComponent,
    fornecedorReadComponent,
    fornecedorRead2Component,
    fornecedorUpdateComponent,
    fornecedorDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
