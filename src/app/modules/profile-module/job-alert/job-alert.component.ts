import { Component, HostListener } from '@angular/core';

interface Job {
  title: string;
  alertType: 'Fulltime' | 'Part-Time';
  alertDetails: string;
  jobsFound: number;
  time: string;
}
@Component({
  selector: 'app-job-alert',
  templateUrl: './job-alert.component.html',
  styleUrls: ['./job-alert.component.scss']
})
export class JobAlertComponent {
  sortOptions = [
    { label: 'New', value: 'new' },
    { label: 'Category', value: 'Category' },
    { label: 'Job Type', value: 'Job Type' }
  ];
  selectedSortOption = this.sortOptions[0];
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: any, event: Event) {
    event.stopPropagation(); 
    this.selectedSortOption = option;
    this.isDropdownOpen = false; 
  }




  jobs: Job[] = [
    { title: 'Product Designer', alertType: 'Fulltime', alertDetails: 'Yearly Salary • Germany Design, Product', jobsFound: 2, time: 'Weekly' },
    { title: 'Marketing', alertType: 'Part-Time', alertDetails: 'Weekly Salary • United Kingdom Account, Marketing', jobsFound: 13, time: 'Monthly' },
    { title: 'Hotel Manager', alertType: 'Fulltime', alertDetails: 'Yearly Salary • Germany Design, Product', jobsFound: 7, time: 'Daily' },
    { title: 'Developer', alertType: 'Fulltime', alertDetails: 'Monthly Salary • United States Account, Finance', jobsFound: 3, time: 'Weekly' },
    { title: 'Account Manager', alertType: 'Part-Time', alertDetails: 'Hourly Salary • Spain Account, Finance', jobsFound: 9, time: 'Monthly' },
  ];


  isDropdownHidden: boolean[] = [];

ngOnInit() {
  // Initialize the dropdown state for each job item
  this.isDropdownHidden = new Array(this.jobs.length).fill(true);
}

toggleDropdownShow(event: Event, index: number) {
  // console.log("Dropdown toggle clicked for button " + index);
  this.isDropdownHidden[index] = !this.isDropdownHidden[index];
  event.stopPropagation();
}

@HostListener('document:click', ['$event'])
closeDropdown(event: Event) {
  const target = event.target as HTMLElement;

  if (!target.closest('.profileDropdown')) {
    this.isDropdownHidden = this.isDropdownHidden.map(() => true);
  }
}




  
 
}
