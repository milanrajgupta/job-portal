import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.scss']
})
export class FindJobsComponent {
  expandedSections: { [key: string]: boolean } = {
    location: false,
    jobType: false,
    experience: false,
    salary: false,
    category: false,
    tags: false,
  };

  jobs = [
    {
      id: 1,
      company: 'Animation Co',
      logo: 'assets/filter/img1.png',
      title: 'Animator & 3D Artist',
      type: 'Part-time',
      location: 'Spain, Barcelona',
      salary: '$30-$50 ',
      experience: '/ hour Intermediate'
    },
    {
      id: 1,
      company: 'Animation Co',
      logo: 'assets/filter/img1.png',
      title: 'Animator & 3D Artist',
      type: 'Fulltime',
      location: 'Spain, Barcelona',
      salary: '$30-$50 ',
      experience: '/ hour Intermediate'
    },
    {
      id: 2,
      company: 'Animation Co',
      logo: 'assets/filter/img2.png',
      title: 'Marketing Specialist.',
      type: 'Part-time',
      location: 'Spain, Barcelona',
      salary: '$22k-$30k',
      experience: '  / year . Expert'
    },
    {
      id: 3,
      company: 'Animation Co',
      logo: 'assets/filter/img1.png',
      title: 'Web Desginer.',
      type: 'Fulltime',
      location: 'Rome, Italy',
      salary: '$400-$550',
      experience: '  / week . Expert'
    },
  
    // Add more job listings...
  ];

  toggleSection(section: string): void {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  getSectionState(section: string): string {
    return this.expandedSections[section] ? 'expanded' : 'collapsed';
  }


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


    // // To toggle the dropdown
    isActiveOne = false;
    selectedOptionOne = 'Washington DC';
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
