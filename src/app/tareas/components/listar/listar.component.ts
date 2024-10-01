import { Component, inject, OnInit } from '@angular/core';
import { TareasService } from 'src/app/tareas/services/tareas.service';
import { Tareas } from '../../interfaces/tareas';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.sass']
})


export class ListarComponent implements OnInit{

  tareasService = inject(TareasService);
  tareas: any = [];
  filtro: 'todos' | 'completados' | 'pendientes' = 'todos';
  isChecked: boolean = false;

  ngOnInit(): void {
    this.tareasService.getTask()
      .subscribe( res =>  this.tareas = res);
  }

  get filteredTasks() {
    switch (this.filtro) {
      case 'completados':
        return this.tareas.filter((task: { completed: any; }) => task.completed);
      case 'pendientes':
        return this.tareas.filter((task: { completed: any; }) => !task.completed);
      default:
        return this.tareas;
    }
  }

  setFiltro(nuevoFiltro: 'todos' | 'completados' | 'pendientes') {
    this.filtro = nuevoFiltro;
  }

  completedTask(id: number) {
    this.tareasService.completedTask(id).subscribe(res => console.log(res))
  }

}
