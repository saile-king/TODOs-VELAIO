import { StateTodo } from "../enum/state-todo.enum";

export interface Tareas {
    userId:    number;
    id:        number;
    title:     string;
    completed: number;
    stateName?: StateTodo
}


export interface Task {
  id?:        number;
  name:      string;
  date:      Date;
  people:    Person[];
  completed: boolean;
  stateName?: StateTodo
}

export interface Person {
  name:   string;
  age:    number;
  skills: string[];
}
