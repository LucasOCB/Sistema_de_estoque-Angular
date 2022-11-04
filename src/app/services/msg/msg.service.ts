import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ApiProdutosService } from '../apiProdutos/api-produtos.service';
import { produto } from 'src/modelos/produtos';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private snackBar: MatSnackBar, private apiProdutos: ApiProdutosService) { }

  aparecerMensagemERRO(msg: string): void{
    this.snackBar.open(`${msg}`, "ERRO", {
      duration:3000,
      verticalPosition:"top",
      horizontalPosition: "center"
    })
  }
  aparecerMensagemOK(msg: string): void{
    this.snackBar.open(`${msg}`, "OK", {
      duration:3000,
      verticalPosition:"top",
      horizontalPosition: "center"
    })
  }
  notificacaoAlterar(produto: produto){
    let msg = this.snackBar.open("Tem certeza que quer alterar o produto?", "sim", {
      duration:2000,
      verticalPosition:"top",
      horizontalPosition: "center",
    });
    msg.onAction().subscribe(() => {
      this.confirmarAlterarMsg(produto);
    })
  }
  notificacaoDeletar(produto: produto): void{
    let msg = this.snackBar.open("Tem certeza que quer deletar?", "sim", {
      duration:3000,
      verticalPosition:"top",
      horizontalPosition: "center",
    });
    msg.onAction().subscribe(() => {
      this.confirmarDeleteMsg(produto);
    });
  }
  notificacaoProdutoCriado(){
    this.aparecerMensagemOK("Produto criado");
  }
  notificacaoProdutoDuplicado(){
    this.aparecerMensagemERRO("OPS! já existe um produto igual");
  }

  notificacaoProdutoInvalido(): void{
    this.aparecerMensagemERRO("OPS! alguns dados estão faltando");
  }

  confirmarAlterarMsg(produto: produto){
    this.apiProdutos.atualizarDadoApi(produto);
    this.aparecerMensagemOK("Produto atualizado com sucesso");
  }
  confirmarDeleteMsg(produto: produto){
    this.apiProdutos.deleteDadosApi(produto.id);
    this.aparecerMensagemOK("Produto deletado");
  }
}
