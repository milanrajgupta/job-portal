import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  
  isLoginPopupVisible = true;
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private router: Router) {}

  close() {
    this.dialogRef.close();
  }


  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  registerForm!: FormGroup;

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




  navigateToSignUp() {
    this.isLoginPopupVisible = false;
    this.router.navigate(['/main/common/registration']);
  }
}
