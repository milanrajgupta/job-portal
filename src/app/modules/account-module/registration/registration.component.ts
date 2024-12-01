import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  selectedRole = 'candidates';

  selectRole(role: string) {
    this.selectedRole = role;
  }

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  

  registerForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    // Initialize the form group with controls
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value); // Access form values
    }
  }
}
