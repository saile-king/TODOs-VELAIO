import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tareas, Task } from '../interfaces/tareas';
import { map, Observable } from 'rxjs';
import { StateTodo } from '../enum/state-todo.enum';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private baseUrl: string = environment.BaseUrl;

  constructor(private http: HttpClient) {}

  getTareas() {
    return this.http.get<Tareas[]>(`${this.baseUrl}/tareas`).pipe(
      map((tareas) => {
        tareas.map((tarea: Tareas) => {
          tarea.stateName = StateTodo[tarea.completed] as unknown as StateTodo;
          return tarea;
        });
        return tareas;
      })
    )
  }

  getTask() {
    return this.http.get<Task>(`${this.baseUrl}/task`)
  }

  agregarTarea(tarea: any):Observable<any>{
      return this.http.post<any>(`${ this.baseUrl }/task`, tarea);
  }
}
