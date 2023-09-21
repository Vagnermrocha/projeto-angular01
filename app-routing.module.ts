import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { PaginasComponent } from './paginas/paginas.component';

const routes: Routes = [
  {path:"" ,component:HomeComponent},
  {path:"cursos", component:CursosComponent, children: [
    {path:"angular/:pagina" ,component:PaginasComponent},
    {path:"react/:pagina" ,component:PaginasComponent},
    {path:"vue/:pagina" ,component:PaginasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
