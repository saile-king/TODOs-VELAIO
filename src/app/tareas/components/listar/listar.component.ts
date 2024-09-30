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
  tareas: Tareas[] = [];

  ngOnInit(): void {
    // this.tareas = [
    //   {
    //     "userId": 9,
    //     "id": 165,
    //     "title": "fugiat perferendis sed aut quidem",
    //     "completed": false
    //   },
    //   {
    //     "userId": 9,
    //     "id": 166,
    //     "title": "quos quo possimus suscipit minima ut",
    //     "completed": false
    //   },
    //   {
    //     "userId": 9,
    //     "id": 167,
    //     "title": "et quis minus quo a asperiores molestiae",
    //     "completed": false
    //   },
    //   {
    //     "userId": 9,
    //     "id": 168,
    //     "title": "recusandae quia qui sunt libero",
    //     "completed": false
    //   },
    //   {
    //     "userId": 9,
    //     "id": 169,
    //     "title": "ea odio perferendis officiis",
    //     "completed": true
    //   },
    //   {
    //     "userId": 9,
    //     "id": 170,
    //     "title": "quisquam aliquam quia doloribus aut",
    //     "completed": false
    //   },
    //   {
    //     "userId": 9,
    //     "id": 171,
    //     "title": "fugiat aut voluptatibus corrupti deleniti velit iste odio",
    //     "completed": true
    //   },
    // ]
    this.tareasService.getTareas()
      .subscribe( res =>  this.tareas = res);

  }

}
