import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css'],
})
export class FormsReactiveComponent implements OnInit {
  signupForm!: FormGroup;
  genders = ['male', 'female'];
  forbiddenUserNames = ['Dave', 'dave'];
  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('Name', [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl('email', [
          Validators.required,
          Validators.email,
        ]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [forbiddenName: string]: boolean } | null{
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { 'forbiddenName': true };
    }
    return null;
  }
}
