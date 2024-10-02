import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListarComponent } from './components/listar/listar.component';
import { TareasRoutingModule } from './tareas-routing.module';


@NgModule({
  declarations: [
    ListarComponent,
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
  ]
})
export class TareasModule { }
