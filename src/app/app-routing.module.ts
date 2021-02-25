import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntradaComponent } from './entrada/entrada.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path: '', redirectTo: 'entrada', pathMatch: 'full'}, //ALTEREI AQUI
  {path: 'entrada', component: EntradaComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
