import { Component, OnInit } from '@angular/core';
import { ApiProdutosService } from 'src/app/services/apiProdutos/api-produtos.service';
import { produto } from 'src/modelos/produtos';
import { MsgService } from 'src/app/services/msg/msg.service';
import { tipos, tipo } from 'src/modelos/tiposDeProduto';
import { marca, tiposMarca } from 'src/modelos/tiposDeMarca';
import { tamanho, tamanhos } from 'src/modelos/tiposDeTamanho';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  
  private produtoCriado!: produto
  private proximoId!: number;
  tiposDeMarca: marca[] = tiposMarca;
  tiposDeTamanhos: tamanho[] = tamanhos;

  tiposDeProduto: tipo[] = tipos;
  nome: string = "";
  quantidade: number = 0;
  descricao: string = "";
  imagem: string = '/assets/';
  nomeImagem: string = "";
  marca: string = "";
  tipo: string = "";
  tamanho: string = "";
  produto!: produto;
  
  guardarImagem(event: any): void{
    this.nomeImagem = `/assets/${event.target.files[0].name}`;
  }
  criarNovoProduto(): void{
    let produtoNovo: produto = {
      nome: this.nome,
      id: this.apiSrevice.getProximoId(),
      marca: this.marca,
      tipo: this.tipo,
      descricao: this.descricao,
      quantidade: Number(this.quantidade),
      tamanho: this.tamanho,
      imagem: this.nomeImagem
    };
    console.log(this.produtoCriado)
    this.produtoCriado = produtoNovo;
    this.cadastrarPorduto(this.produtoCriado);
  }

  cadastrarPorduto(novoProduto: produto): void{
    if( 
      novoProduto.imagem == "" ||
      novoProduto.nome == "" ||
      novoProduto.tamanho == "" ||
      novoProduto.tipo == "" ||
      novoProduto.marca == ""
      )
    {
      this.msgService.notificacaoProdutoInvalido();
      return
    }
    let resposta = this.apiSrevice.postDadosApi(novoProduto);
    if(resposta == true){
      this.msgService.notificacaoProdutoCriado();
    }else{
      this.msgService.notificacaoProdutoDuplicado();
    }
  }

  constructor(private apiSrevice: ApiProdutosService, private msgService: MsgService) {}

  ngOnInit(): void {
  }

}
