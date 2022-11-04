import { Injectable } from '@angular/core';
import { usuariosLogados } from 'src/modelos/loginUsuarios';
import { loginUsuario } from 'src/modelos/loginUsuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginRealizado: boolean = false;
  usuarioValido = usuariosLogados;
  tentativaUsuario!: loginUsuario;

  usuario!: string;
  senha!: number;
  
  tentativaLogin(usuario: string, senha: string): boolean{
    let usuarioTentativa: loginUsuario = {
      nome: usuario,
      senha: parseInt(senha)
    }
    this.tentativaUsuario = usuarioTentativa; 
    return(this.validarLogin(this.tentativaUsuario));
  }
  estouLogado(): boolean{
    return this.loginRealizado;
  }
  validarLogin(usuario: loginUsuario): boolean{
    if(this.usuarioValido.nome == usuario.nome && this.usuarioValido.senha == usuario.senha){
      this.loginRealizado = true;
      return true;
    }
    this.loginRealizado = false;
    return false;

  }
  constructor() { }
}
