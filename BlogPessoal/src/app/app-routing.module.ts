import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntradaComponent } from './entrada/entrada.component';


const routes: Routes = [
  {path: '', redirectTo: 'entrada', pathMatch: 'full'},
  {path: 'entrada', component: EntradaComponent},
  {path: 'cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
