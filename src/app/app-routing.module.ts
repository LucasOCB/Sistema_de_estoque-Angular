import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaComponent } from './componentes/listagem/lista/lista.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { InfosProdutosComponent } from './componentes/infosProduto/infos-produtos/infos-produtos.component';
import { AttProdutoComponent } from './componentes/attProduto/att-produto/att-produto.component';{}
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'formulario', component: FormularioComponent, canActivate:[LoginGuard]},
  {path: 'estoque', component: ListaComponent, canActivate:[LoginGuard]},
  {path: 'estoque/:id', component: InfosProdutosComponent, canActivate:[LoginGuard]},
  {path: 'atualizar/:id', component: AttProdutoComponent, canActivate:[LoginGuard]},
  {path: "**", redirectTo: "estoque", pathMatch: "full"},
  {path: "", redirectTo: "estoque", pathMatch: "full"}
];
// canActivate:[LoginGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
