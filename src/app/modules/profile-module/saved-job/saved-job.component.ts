import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-job',
  templateUrl: './saved-job.component.html',
  styleUrls: ['./saved-job.component.scss'],
})
export class SavedJobComponent implements OnInit {
  // // To toggle the dropdown
  isActiveSort = false;
  selectedOptionSort = 'Category';
  optionsSort = ['Category', 'New', 'Job Type']; // Dropdown options
  // Toggle dropdown menu
  toggleMenuSort() {
    this.isActiveSort = !this.isActiveSort;
  }
  // Handle option selection
  selectOptionSort(optionSort: string) {
    this.selectedOptionSort = optionSort;
    this.isActiveSort = false;
  }

  //  dot fropdown

  jobs = [
    {
      image: './assets/images/media_22.png',
      title: 'Developer & expert in java c++',
      type: 'FullTime',
      salary: '$22k-$30',
      salaryPeriod: 'year',
      experienceLevel: 'Expert',
      location: 'Spain, Barcelona',
      field1: 'Developer',
      field2: 'Coder',
    },
    {
      image: './assets/images/media_23.png',
      title: 'Animator & Expert in maya 3D',
      type: 'Part Time',
      salary: '$300-$500',
      salaryPeriod: 'week',
      experienceLevel: 'Expert',
      location: 'USA, New York',
      field1: 'Finance',
      field2: 'Accounting',
    },
    {
      image: './assets/images/media_24.png',
      title: 'Developer & expert in java c++',
      type: 'FullTime',
      salary: '$300-$500',
      salaryPeriod: 'week',
      experienceLevel: 'Expert',
      location: 'USA, New York',
      field1: 'Finance',
      field2: 'Accounting',
    },
    {
      image: './assets/images/media_25.png',
      title: 'Developer & expert in java c++',
      type: 'FullTime',
      salary: '$300-$500',
      salaryPeriod: 'week',
      experienceLevel: 'Expert',
      location: 'USA, New York',
      field1: 'Finance',
      field2: 'Accounting',
    },
    {
      image: './assets/images/media_26.png',
      title: 'Developer & expert in java c++',
      type: 'FullTime',
      salary: '$300-$500',
      salaryPeriod: 'week',
      experienceLevel: 'Expert',
      location: 'USA, New York',
      field1: 'Finance',
      field2: 'Accounting',
    },
  ];

 // Keeps track of the currently open "edit box" by index
openEditBox: number | null = null;

constructor() {}

ngOnInit(): void {}

toggleEditBox(index: number): void {
  // Toggle the visibility of the clicked "edit box"
  this.openEditBox = this.openEditBox === index ? null : index;
}

closeEditBox(): void {
  this.openEditBox = null; // Close the currently open edit box
}

// Close the "edit box" when clicking outside
@HostListener('document:click', ['$event'])
onClickOutside(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  // Close the edit box if the clicked area is outside the edit box or ellipsis
  if (
    !target.closest('.editBox') &&
    !target.closest('.fa-ellipsis-vertical') &&
    this.openEditBox !== null
  ) {
    this.openEditBox = null;
  }
}
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
