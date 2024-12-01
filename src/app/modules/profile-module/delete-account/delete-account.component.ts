import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent {
  constructor(private dialogRef: MatDialogRef<DeleteAccountComponent>) {}

  // Method to close the dialog
  closeDialog(): void {
    this.dialogRef.close();
  }

  deleteAccount(): void {
    console.log('Account deleted!');
    this.dialogRef.close(); // Close the dialog after deletion
  }
}
