import { Component, HostListener } from '@angular/core';

export interface Company {
  id: number;
  name: string;
  imageUrl?: string;
  location: string;
  vacancies: number;
  isFeatured?: boolean;
}
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  companies: Company[] = [
    {
      id: 1,
      name: 'Payoneer',
      imageUrl: 'assets/icon/media_29.png',
      location: 'New York, New York; Seattle, Washington',
      vacancies: 3,
      isFeatured: true
    },
    {
      id: 2,
      name: 'Medium',
      imageUrl: 'assets/icon/media_30.png',
      location: 'New York, New York; Seattle, Washington',
      vacancies: 5,
      isFeatured: false
    },
    {
      id: 3,
      name: 'LinkedIn',
      imageUrl: 'assets/icon/media_31.png',
      location: 'New York, New York; Seattle, Washington',
      vacancies: 9,
      isFeatured: false
    },
    {
      id: 4,
      name: 'Radiant',
      imageUrl: 'assets/icon/media_38.png',
      location: 'New York, New York; Seattle, Washington',
      vacancies: 5,
      isFeatured: true
    },
    {
      id: 5,
      name: 'Panoroma',
      imageUrl: 'assets/icon/media_39.png',
      location: 'New York, New York; Seattle, Washington',
      vacancies: 9,
      isFeatured: true
    },
    {
      id: 6,
      name: 'Colorrib',
      imageUrl: 'assets/icon/media_40.png',
      location: 'New York, New York; Seattle, Washington',
      vacancies: 9,
      isFeatured: false
    },
    {
      id: 7,
      name: 'Alpha',
      imageUrl: 'assets/icon/media_41.png',
      location: 'New York, New York; Seattle, Washington',
      vacancies: 5,
      isFeatured: false
    },
    {
      id: 8,
      name: 'MacDonald’s',
      imageUrl: 'assets/icon/media_32.png',
      location: 'New York, New York; Seattle, Washington',
      vacancies: 9,
      isFeatured: true
    },
    {
      id: 9,
      name: 'Bootstrap',
      imageUrl: 'assets/icon/media_42.png',
      location: 'New York, New York; Seattle, Washington',
      vacancies: 9,
      isFeatured: true
    }

  ];


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

  selectOptionDown(option: any, event: Event) {
    event.stopPropagation(); 
    this.selectedSortOption = option;
    this.isDropdownOpen = false; 
  }




    // // To toggle the dropdown
    isActiveOne = false;
    selectedOptionOne = 'All Location';
    optionsOne = ['Washington DC', 'California, CA', 'Bew York', 'Miami']; // Dropdown options
    // Toggle dropdown menu
    toggleMenuOne() {
      this.isActiveOne = !this.isActiveOne;
    }
    // Handle option selection
    selectOptionOne(optionOne: string) {
      this.selectedOptionOne = optionOne;
      this.isActiveOne = false;
    }
    isExpanded = true;
    minSalary = 0;
    maxSalary = 300;
    sliderValue = 150;
  
    updateSalaryRange() {
      this.maxSalary = this.sliderValue;
    }






    isSmallScreen: boolean = false;
    isSidebarOpen: boolean = false;
  
    constructor() {
      this.checkScreenSize();
    }
  
    @HostListener('window:resize', ['$event'])
    onResize() {
      this.checkScreenSize();
      console.log('Small Screen:', this.isSmallScreen); // Debug log
    }
    
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 768; // Adjust breakpoint if necessary
    }
    
  
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }

 





}
