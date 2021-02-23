import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  userLogin: UserLogin = new UserLogin

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=> {
      this.userLogin = resp
    })
  }

}
