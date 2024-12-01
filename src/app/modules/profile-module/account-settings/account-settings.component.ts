import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent {
  constructor(private dialog: MatDialog) {}
 
  // openChangePassword(): void {
  //   this.dialog.open(ChangePasswordComponent); 
  // }
}
