import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public router: Router

  nome = environment.nome
  foto = environment.foto
  usuario = environment.usuario

  constructor() { }

  ngOnInit(){
  }

  sair(){
    this.router.navigate(['/entrada'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }
}
