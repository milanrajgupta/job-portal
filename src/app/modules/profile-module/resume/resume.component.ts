import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  formsVisibility: boolean[] = [false, false];  // Initialize with false for each form to start them as collapsed

  toggleForm(index: number): void {
    this.formsVisibility[index] = !this.formsVisibility[index];
  }


  selectedFromYear = 2023;
  selectedToYear = 2023;
  isFromDropdownOpen = false;
  isToDropdownOpen = false;
  years = [2023, 2022, 2021, 2020, 2019, 2018];

  toggleDropdown(dropdown: 'from' | 'to') {
    if (dropdown === 'from') {
      this.isFromDropdownOpen = !this.isFromDropdownOpen;
      this.isToDropdownOpen = false;
    } else {
      this.isToDropdownOpen = !this.isToDropdownOpen;
      this.isFromDropdownOpen = false;
    }
  }

  selectFromYear(year: number) {
    this.selectedFromYear = year;
    this.isFromDropdownOpen = false;
  }

  selectToYear(year: number) {
    this.selectedToYear = year;
    this.isToDropdownOpen = false;
  }

  formsShow: boolean[] = [false, false];  // Initialize with false for each form to start them as collapsed

  toggleFormShow(index: number): void {
    this.formsShow[index] = !this.formsShow[index];
  }
}
