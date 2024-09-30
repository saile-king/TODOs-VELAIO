import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { ListarComponent } from './components/listar/listar.component';
import { CreateComponent } from './components/create/create.component';


@NgModule({
  declarations: [
    ListarComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule
  ]
})
export class PersonasModule { }
