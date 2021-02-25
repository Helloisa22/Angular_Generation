import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar() {
    this.auth.logar(this.userLogin).subscribe((resp: UserLogin)=> {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.id = this.userLogin.id
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto

      console.log(environment.token)
      console.log(environment.id)
      console.log(environment.nome)
      console.log(environment.foto)

      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status == 500){
        alert("erro")
      }
    })
  }
}


/*
logar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=> {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.id = this.userLogin.id
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto

      console.log(environment.token)
      console.log(environment.id)
      console.log(environment.nome)
      console.log(environment.foto)

      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status == 500){
        alert("Usuario ou senha incorreto")
      }
    })
  }
*/