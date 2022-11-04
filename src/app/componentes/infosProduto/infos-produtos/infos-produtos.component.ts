import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProdutosService } from 'src/app/services/apiProdutos/api-produtos.service';
import { produto } from 'src/modelos/produtos';
import { MsgService } from 'src/app/services/msg/msg.service';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-infos-produtos',
  templateUrl: './infos-produtos.component.html',
  styleUrls: ['./infos-produtos.component.scss']
})
export class InfosProdutosComponent implements OnInit {

  constructor(
      private apiService: ApiProdutosService, 
      private route: ActivatedRoute,
      private msgService: MsgService
      ) 
  {}

  produto!: produto;
  produtoExiste: boolean = false;
  identificador!: number;
  alertClass: string[] = ["alert", "alert-danger", "w-50", "mx-auto"];
  time: any;
  validarTimer: boolean = false;

  
  deleteProduto(): void{
    this.validarTimer = false;
    this.time = setInterval(() => {
      this.timerGetProduto(this.validarTimer);
    }, 5000)
    this.msgService.notificacaoDeletar(this.produto);
  }

  timerGetProduto(tempo: boolean): void{
    if(tempo == true){
      clearInterval(this.time)
      return
    }
    console.log("teste")
    this.getProduto();
    this.validarTimer = true
    return
  };

  getProduto(): void{
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.identificador = id;
    this.apiService.getDadoIsolado(id).subscribe(dadoEntrada => {
      if(dadoEntrada){
        this.produto = dadoEntrada;
        this.produtoExiste = true;
      }
    }, error =>{
      if(error.status == "404" || error.status == "400"){
        this.produtoExiste = false
      }
    });
  }

  ngOnInit(): void {
    this.getProduto();
  }
}
