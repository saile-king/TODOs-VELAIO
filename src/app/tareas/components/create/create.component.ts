import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TareasService } from '../../services/tareas.service';
import { Router, RouterModule } from '@angular/router';
import { Person, Task } from '../../interfaces/tareas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CreateComponent {
  [x: string]: any;
  taskForm: FormGroup;
  tareasService = inject(TareasService);
  task!: Task;

  constructor(private fb: FormBuilder, private router: Router) {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      dueDate: ['', Validators.required],
      peoples: this.fb.array([]),
    });
  }

  get associatedPeople() {
    return this.taskForm.get('peoples') as FormArray;
  }

  addPeople() {
    this.associatedPeople.push(
      new FormGroup({
        fullName: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        age: new FormControl('', [Validators.required, Validators.min(18)]),
        skills: this.fb.array([], Validators.required),
      })
    );
  }

  removePeople(index: number) {
    this.associatedPeople.removeAt(index);
  }

  peopleSkills(empIndex: number): FormArray {
    return this.associatedPeople.at(empIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: new FormControl('', Validators.required),
    });
  }

  addPeopleSkill(empIndex: number) {
    this.peopleSkills(empIndex).push(this.newSkill());
  }

  removePeopleSkill(empIndex: number, skillIndex: number) {
    this.peopleSkills(empIndex).removeAt(skillIndex);
  }

  addSkill(personIndex: number): FormArray {
    return this.associatedPeople.at(personIndex).get('skills') as FormArray;
  }

  removeSkill(personIndex: number, skillIndex: number) {
    const skills = this.associatedPeople
      .at(personIndex)
      .get('skills') as FormArray;
    skills.removeAt(skillIndex);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const taskFormValue = this.taskForm.value;

      const person: Person[] = [];

      taskFormValue.peoples.forEach((element: any) => {
        element.skills = element.skills.map(
          (item: { skill: string }) => item.skill
        );
        person.push(element);
      });

      this.task = {
        name: taskFormValue.taskName,
        date: taskFormValue.dueDate,
        people: person,
        completed: false,
      };
      console.log('Task saved:', this.task);
      this.tareasService.agregarTarea(this.task).subscribe(() => {
        this.router.navigate(['/tareas']);
        alert('Tarea creada');
      });
    } else {
      console.log('Form is invalid');
    }
  }

  hasDuplicateNames(peoples: any) {
    const names = peoples.map((person: { fullName: any }) => person.fullName);
    const uniqueNames = new Set(names);

    return names.length !== uniqueNames.size;
  }
}
