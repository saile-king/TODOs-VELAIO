import { StateTodo } from "../enum/state-todo.enum";

export interface Tareas {
    userId:    number;
    id:        number;
    title:     string;
    completed: number;
    stateName?: StateTodo
}
