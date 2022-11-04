import { Component, OnInit } from '@angular/core';
import { produto } from 'src/modelos/produtos';
import { ApiProdutosService } from 'src/app/services/apiProdutos/api-produtos.service';
import { tipo, tipos } from 'src/modelos/tiposDeProduto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {


  estoque!: produto[];
  quantidadeEstoque: number = 0;
  quantidadeEstoquePorTipo!: number[];
  tiposPossiveis: tipo[] = tipos;
  tipoProdutoPesquisa!: string;
  mensagemEstoqueVazio!: string; 
  tipos: string[] = ["", "", "", "", "", "", "", "", "", ""]
  alertClass: string[] = ["alert", "alert-danger", "w-50", "mx-auto"] 
  timer! : any;

  getDadosTipo(tipo: string){
    this.api.getDadosPorTipo(tipo).subscribe(dadoEntrada => {
      this.estoque = dadoEntrada;
    });
  }
  
  getDadosApi(){
    this.api.getDadosApi().subscribe(dadoEntrada => {
      this.estoque = dadoEntrada;
      this.quantidadeEstoque = dadoEntrada.length
      if(dadoEntrada.length == 0){
        this.atualizarMensagemEstoqueVazio("geral");
      }
    });
  }

  atualizarTipos(){
    for(let n = 0; n < this.tiposPossiveis.length; n++){
      this.tipos[n] = this.tiposPossiveis[n].tipo;
    }
  }
  atualizarCategoriaTiposQuantidade(): void{
    this.quantidadeEstoquePorTipo = this.api.getListarQuantidadePorTipo();
  }
  atualizarMensagemEstoqueVazio(tipo: string): void{
    if(tipo == "geral"){
      this.mensagemEstoqueVazio = `Ops! parece que no momento nosso estoque está vazio`
      return
    }
    this.mensagemEstoqueVazio = `Ops! no momento não temos nenhum produto do tipo ${tipo} no estoque`
  }
  timerAtualizacao(): void{
    this.atualizarCategoriaTiposQuantidade();
    this.getDadosApi();
  }
  constructor(private api: ApiProdutosService) { }

  ngOnInit(): void {
    this.atualizarTipos();
    this.timerAtualizacao();
    this.timer = setInterval(() => {
      this.timerAtualizacao();
    }, 3000)
  }


}
