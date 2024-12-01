import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup({
      inputName: new FormControl(null, Validators.required),
      inputEmail: new FormControl(null, Validators.required),
      textarea: new FormControl(null, Validators.required),
    });
  }

  get inputName(): AbstractControl {
    return this.validationForm.get('inputName')!;
  }

  get inputEmail(): AbstractControl {
    return this.validationForm.get('inputEmail')!;
  }

  get textarea(): AbstractControl {
    return this.validationForm.get('textarea')!;
  }
}
