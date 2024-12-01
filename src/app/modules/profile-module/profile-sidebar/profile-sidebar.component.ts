import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteAccountComponent } from '../delete-account/delete-account.component';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent {

  // Open the dialog
  constructor(private dialog: MatDialog,  private router: Router) {}
  openDeleteDialog(): void {
    this.dialog.open(DeleteAccountComponent); 
  }
  





  isDropdownHidden = true;
  toggleDropdown(event: Event) {
    console.log("Dropdown toggle clicked"); 
    this.isDropdownHidden = !this.isDropdownHidden;
    event.stopPropagation(); 
  }
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.profileDropdown')) {
      this.isDropdownHidden = true;
    }
  }


  activeButton: string = 'dashboard';
  navigateTo(page: string) {
    this.activeButton = page; 
    setTimeout(() => {
      this.router.navigate([`/${page}`]);  
    }, 0); 
  }
}
