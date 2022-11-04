import { Component, OnInit } from '@angular/core';
import { ApiProdutosService } from 'src/app/services/apiProdutos/api-produtos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  quantidadeEstoque!: number ;
  cadastro: string = "formulario";
  estoque: string = "estoque";
  timer: any;

  atualizarQuantidadeEstoque(){
    this.quantidadeEstoque = this.api.getQuantidadeEstoque();
  }
  timerAtualizacao(){
    this.atualizarQuantidadeEstoque();
  }
  constructor(private api: ApiProdutosService) { }

  ngOnInit(): void {
    this.atualizarQuantidadeEstoque();
    this.timer = setInterval(() => {
      this.timerAtualizacao()
    }, 1000)
  }

}
