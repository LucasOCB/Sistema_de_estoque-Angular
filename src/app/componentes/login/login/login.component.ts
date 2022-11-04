import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  classesNormal: string[] = ["modal", "modal-signin", "d-block", "bg-secondary", "py-5"]
  alertClass: string[] = ["alert", "alert-danger", "w-50", "mx-auto"]
  classesLogin: string[] = this.classesNormal
  usuario: string = ''
  senha: string = ''
  timerAlerta: any
  mostrarBotao: boolean = false

  fazerLogin():void{
    let validacaoFeita = this.loginService.tentativaLogin(this.usuario, this.senha)
    if(validacaoFeita == true){
      this.mostrarBotao = true
      return
    }
    this.alertClass.push("alertaApareca")
    this.usuario = ''
    this.senha = ''
    this.timerAlerta = setInterval(() =>{
      this.sumirAlerta()
    }, 3000)
  }
  entrar(){
    this.classesLogin.push("loginS")
  }

  sumirAlerta(){
    if(this.alertClass[4] === "alertaApareca"){
      this.alertClass.pop()
    }
    console.log(1)
    clearInterval(this.timerAlerta)
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
