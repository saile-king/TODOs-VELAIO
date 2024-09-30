import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      dueDate: ['', Validators.required],
      associatedPeople: this.fb.array([])
    });
  }

  get associatedPeople() {
    return this.taskForm.get('associatedPeople') as FormArray;
  }

  addPerson() {
    const personForm = this.fb.group({
      fullName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1), Validators]],
      skills: this.fb.array([])
    });

    this.associatedPeople.push(personForm);
  }

  removePerson(index: number) {
    this.associatedPeople.removeAt(index);
  }

  addSkill(personIndex: number) {
    const skills = this.associatedPeople.at(personIndex).get('skills') as FormArray;
    skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(personIndex: number, skillIndex: number) {
    const skills = this.associatedPeople.at(personIndex).get('skills') as FormArray;
    skills.removeAt(skillIndex);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const task = this.taskForm.value;
      console.log('Task saved:', task);
      // Aquí puedes agregar la lógica para guardar la tarea
    } else {
      console.log('Form is invalid');
    }
  }
}
