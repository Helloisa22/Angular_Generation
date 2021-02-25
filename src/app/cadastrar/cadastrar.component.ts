import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipo: string

  constructor( //INJEÇÃO DE DEPENDENCIAS
    private authService: AuthService,
    private router: Router
  ) { }

  //Quando a minha aplicação iniciar, faço o que estiver aqui no ngOnInit()
  ngOnInit() {
    window.scroll(0,0) //Iniciar no topo da tela
  }

  //METODO
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipo = event.target.value
  }

  cadastrar(){
    this.usuario.tipoUsuario = this.tipo

    if(this.usuario.senha != this.confirmarSenha){
      alert("As senhas estão incorretas")
    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrada'])
        alert("Usuário cadastrado com sucesso")
      })
    }
  }
}
