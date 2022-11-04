import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProdutosService } from 'src/app/services/apiProdutos/api-produtos.service';
import { produto } from 'src/modelos/produtos';
import { MsgService } from 'src/app/services/msg/msg.service';
import { tipos, tipo } from 'src/modelos/tiposDeProduto';
import { marca, tiposMarca  } from 'src/modelos/tiposDeMarca';
import { tamanho, tamanhos } from 'src/modelos/tiposDeTamanho';

@Component({
  selector: 'app-att-produto',
  templateUrl: './att-produto.component.html',
  styleUrls: ['./att-produto.component.scss']
})
export class AttProdutoComponent implements OnInit {

  tiposDeMarca: marca[] = tiposMarca;
  tiposDeTamanhos: tamanho[] = tamanhos;
  tiposDeProduto: tipo[] = tipos;
  private identificador!: number;

  produtoOriginal!: produto;
  nome!: string;
  id!: number;
  marca!: string;
  tipo!: string;
  descricao!: string;
  quantidade!: number;
  tamanho!: string;
  imagem!: string;
  nomeOriginal!: string;
  idOriginal!: number;
  marcaOriginal!: string;
  tipoOriginal!: string;
  descricaoOriginal!: string;
  quantidadeOriginal!: number;
  tamanhoOriginal!: string;
  imagemOriginal!: string;

  constructor(
    private apiService: ApiProdutosService,
    private route: ActivatedRoute,
    private msgService: MsgService
    ) { }

  getProduto(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.identificador = id;
    this.apiService.getDadoIsolado(id).subscribe(dadoEntrada => {

      if(dadoEntrada){
        this.produtoOriginal = dadoEntrada;
        this.atualizarDadosInputs();
        return
      }
    });
  }

  
  atualizarDadosInputs(): void{
    this.nome = this.produtoOriginal.nome;
    this.id = this.produtoOriginal.id;
    this.marca = this.produtoOriginal.marca;
    this.tipo = this.produtoOriginal.tipo;
    this.descricao = this.produtoOriginal.descricao;
    this.quantidade = this.produtoOriginal.quantidade;
    this.tamanho = this.produtoOriginal.tamanho;
    this.imagem = this.produtoOriginal.imagem;
    this.nomeOriginal = this.produtoOriginal.nome;
    this.idOriginal = this.produtoOriginal.id;
    this.marcaOriginal = this.produtoOriginal.marca;
    this.tipoOriginal = this.produtoOriginal.tipo;
    this.descricaoOriginal = this.produtoOriginal.descricao;
    this.quantidadeOriginal = this.produtoOriginal.quantidade;
    this.tamanhoOriginal = this.produtoOriginal.tamanho;
    this.imagemOriginal = this.produtoOriginal.imagem;
    console.log("inputs definidos")
  }
  
  atualizarProdutoMudanca(): void{
    this.produtoOriginal.descricao = this.descricao;
    this.produtoOriginal.marca = this.marca;
    this.produtoOriginal.nome = this.nome;
    this.produtoOriginal.tamanho = this.tamanho;
    this.produtoOriginal.tipo = this.tipo;
    this.produtoOriginal.quantidade = Number(this.quantidade)
    console.log("------------------")
    console.log(this.produtoOriginal)
    // console.log(this.produtoMudanca)
    console.log("------------------")
  }
  atualizarProdutoApi(): void{
    this.atualizarProdutoMudanca();
    this.msgService.notificacaoAlterar(this.produtoOriginal);
  }

  ngOnInit(): void {
    this.getProduto();
  }

  teste(){
    console.log("teste")
  }
}
