import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: '**',
        component: ListarComponent
      }
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
