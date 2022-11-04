import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaComponent } from './componentes/listagem/lista/lista.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { InfosProdutosComponent } from './componentes/infosProduto/infos-produtos/infos-produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttProdutoComponent } from './componentes/attProduto/att-produto/att-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    ListaComponent,
    LoginComponent,
    InfosProdutosComponent,
    AttProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
