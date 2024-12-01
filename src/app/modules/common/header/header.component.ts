import { Component, HostListener } from '@angular/core';
import { LoginComponent } from 'src/app/modules/account-module/login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // // To toggle the dropdown
  isActive = false;
  selectedOption = 'Talents';
  options = ['Talents', 'Jobs']; // Dropdown options
  // Toggle dropdown menu
  toggleMenu() {
    this.isActive = !this.isActive;
  }
  // Handle option selection
  selectOption(option: string) {
    this.selectedOption = option;
    this.isActive = false;
  }
  
  
  isOpen = false;
    isAnimating = false;
  
    toggleMenuTwo() {
      this.isAnimating = true; // Start the animation
  
      // Change the menu state after a short delay
      setTimeout(() => {
        this.isOpen = !this.isOpen;
        this.isAnimating = false; 
      }, 300); 
    }
  
    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      if (this.isOpen) {
        this.isOpen = false; // Close the menu on resize
      }
    }
  
  
  constructor(public dialog: MatDialog) {}
  
  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }

  }
  