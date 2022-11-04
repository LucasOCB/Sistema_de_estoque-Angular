import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { produto } from 'src/modelos/produtos';
import { tipos } from 'src/modelos/tiposDeProduto';
import { tipo } from 'src/modelos/tiposDeProduto';

@Injectable({
  providedIn: 'root'
})
export class ApiProdutosService {

  private url: string = " http://localhost:3000/produtos";
  private ultimoUsuario!: produto; 
  private listaDadosApi!: produto[];
  private quantidadeDadosApi: number = 0;
  private TiposProduto: tipo[] = tipos;
  private produtosQuantidadeTipo: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  private timer: any

  //-----------------ATUALIZAÇÃO
  atualizarListaUsuariuo(): void{
    this.rodarListaPegarDadoFinal();
    this.rodarListaPegarLista();
    this.rodarListaPegarLength();
  }
  rodarListaPegarLength(){
    this.getDadosApi().subscribe(dadoRetorno => {
      this.quantidadeDadosApi = dadoRetorno.length
    })
  }
  rodarListaPegarDadoFinal(): void{
    let lista: produto[];
    this.getDadosApi().subscribe(dadoRecebe => { 
      lista = dadoRecebe;
      for(let n = 0; n < lista.length; n++){
        this.ultimoUsuario = lista[n]
      };
    })
  }
  rodarListaPegarLista(): void {
    this.getDadosApi().subscribe(listaRecebe => {
      this.listaDadosApi = listaRecebe; 
    });
  }
  rodarListaSepararPorTipo(lista: produto[], tipo: string): number{
    const listaFiltrada = lista.filter((produtoAtual) => {
      return produtoAtual.tipo.includes(tipo)
    })
    return listaFiltrada.length
  }

  //-----------VALIDAÇÃO
  validarDadoClone(produto: produto) : boolean{
    for(let n = 0; n < this.listaDadosApi.length; n++){
      if(this.listaDadosApi[n].nome.includes(produto.nome) && this.listaDadosApi[n].imagem.includes(produto.imagem)){
        return true;
      }
    }
    return false
  }
  
  //----------GET
  getProximoId(): number{
    if(!this.ultimoUsuario){
      return 1
    }
    return this.ultimoUsuario.id + 1;
  }
  getDadosApi(): Observable<produto[]>{
    return this.http.get<produto[]>(this.url);
  }
  getDadoIsolado(id: number): Observable<produto>{
    return this.http.get<produto>(`${this.url}/${id}`);
  }
  getQuantidadeEstoque(): number{
    return this.quantidadeDadosApi;
  }
  getDadosPorTipo(tipo: string): Observable<produto[]>{
    return this.http.get<produto[]>(`${this.url}?tipo=${tipo}`);
  }
  getListarQuantidadePorTipo(): number[]{
    let rodar = this.getDadosApi().subscribe(dadoEntrada => {
      for(let n = 0; n < this.TiposProduto.length; n++){
        this.produtosQuantidadeTipo[n] = this.rodarListaSepararPorTipo(dadoEntrada, this.TiposProduto[n].tipo)
      }
    })
    return this.produtosQuantidadeTipo;
  }

  //---------------POST
  postDadosApi(produto: produto): boolean{
    if(this.validarDadoClone(produto) == true){
      return false
    }
    this.http.post(`${this.url}`, produto).subscribe(
      resultado => {
        console.log("usuario cadastrado")
        this.atualizarListaUsuariuo();
      }, erro => {
        if(erro.status == 400 || erro.status == 400){
          console.log("ops! ouve um problema")
          return false;
        }
        return true;
      }
    )
    return true;
  }

  //--------------------PUT
  atualizarDadoApi(produto: produto){
    this.http.put<produto>(`${this.url}/${produto.id}`, produto).subscribe(
      resltado => {
        console.log("produto atualizado")
        this.atualizarListaUsuariuo();
      }, erro => {
        if(erro.status == 400 || erro.status == 400){
          console.log("ops! ouve um problema")
        }
      }
    )
  }
  
  //-------------DELETE
  deleteDadosApi(id: number): void{
    this.http.delete<produto>(`${this.url}/${id}`).subscribe(
      resultado => {
        console.log("usuario deletado")
        this.atualizarListaUsuariuo();
      }, erro => {
        if(erro.status == 400 || erro.status == 400){
          console.log("ops! ouve um problema")
        }
      }
    )
  }

  constructor(private http: HttpClient) { 
    this.timer = setInterval(() => {
      this.atualizarListaUsuariuo();
    }, 5000)
    this.atualizarListaUsuariuo();
  }
}
