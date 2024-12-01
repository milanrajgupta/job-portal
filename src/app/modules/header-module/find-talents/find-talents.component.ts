import { Component, HostListener, Input } from '@angular/core';

interface Candidate { 
  id: number; 
  name: string;
  role: string;
  image: string;
  skills: string[];
  salary: string;
  location: string;
  isFeatured?: boolean;
  isOnline?: boolean;
}

@Component({
  selector: 'app-find-talents',
  templateUrl: './find-talents.component.html',
  styleUrls: ['./find-talents.component.scss']
})
export class FindTalentsComponent {
  candidates: Candidate[] =  [
    {
      id: 1,
      name: 'Julia Ark',
      role: 'Graphic Designer',
      image: 'assets/filter/profile1.jpg',
      skills: ['Design', 'UI', 'Digital', '2+'],
      salary: '$30k-$50k/yr',
      location: 'California, US',
      isFeatured: true
    },
    {
      id: 2,
      name: 'Juan Marko',
      role: 'Javascript Developer',
      image: 'assets/filter/profile2.jpg',
      skills: ['Java', 'Developer', 'code', '1+'],
      salary: '$3k-$4k/mo',
      location: 'London, UK',
      isFeatured: false,
      isOnline: true
    },
    {
      id: 3,
      name: 'Rashed ka',
      role: 'UI/UX Designer',
      image: 'assets/filter/profile3.jpg',
      skills: ['Design', 'UI', 'Brand & Product'],
      salary: '$300-$400/wk',
      location: 'Dubai, UAE',
      isFeatured: true
    },
    {
      id: 4,
      name: 'Rashed ka',
      role: 'UI/UX Designer',
      image: 'assets/filter/profile3.jpg',
      skills: ['Design', 'UI', 'Brand & Product', '1+'],
      salary: '$300-$400/wk',
      location: 'Dubai, UAE',
      isFeatured: true,
      isOnline: true
    },
    {
      id: 5,
      name: 'Rashed ka',
      role: 'UI/UX Designer',
      image: 'assets/filter/profile4.jpg',
      skills: ['Design', 'UI', 'Brand & Product'],
      salary: '$300-$400/wk',
      location: 'Dubai, UAE',
      isFeatured: true
    },
    {
      id: 6,
      name: 'Rashed ka',
      role: 'UI/UX Designer',
      image: 'assets/filter/profile5.jpg',
      skills: ['Design', 'UI', 'Brand & Product','2+'],
      salary: '$300-$400/wk',
      location: 'Dubai, UAE',
      isFeatured: true,
      isOnline: true
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

  selectOption(option: any, event: Event) {
    event.stopPropagation(); 
    this.selectedSortOption = option;
    this.isDropdownOpen = false; 
  }











  // // To toggle the dropdown
  isActiveCategory = false;
  selectedOptionCategory = 'Web Design';
  optionsCategory = [
    'Web Design',
    'Design & Creative',
    'It & Development',
    'Web & Mobile Dev',
    'Writing',
    'Sales & Marketing',
  ]; // Dropdown options
  // Toggle dropdown menu
  toggleMenuCategory() {
    this.isActiveCategory = !this.isActiveCategory;
  }
  // Handle option selection
  selectOptionCategory(optionCategory: string) {
    this.selectedOptionCategory = optionCategory;
    this.isActiveCategory = false;
  }

  isActiveLocation = false;
  selectedOptionLocation = 'Washington DC';
  optionsLocation = ['Washington DC', 'California, CA', 'Bew York', 'Miami']; // Dropdown options
  // Toggle dropdown menu
  toggleMenuLocation() {
    this.isActiveLocation = !this.isActiveLocation;
  }
  // Handle option selection
  selectOptionLocation(optionLocation: string) {
    this.selectedOptionLocation = optionLocation;
    this.isActiveLocation = false;
  }

  isActiveLanguage = false;
  selectedOptionLanguage = 'Fluent';
  optionsLanguage = ['Fluent', 'Basic', 'Conversational', 'Native/Bilingual']; // Dropdown options
  // Toggle dropdown menu
  toggleMenuLanguage() {
    this.isActiveLanguage = !this.isActiveLanguage;
  }
  // Handle option selection
  selectOptionLanguage(optionLanguage: string) {
    this.selectedOptionLanguage = optionLanguage;
    this.isActiveLanguage = false;
  }

  isExpanded = true;
  minSalary = 0;
  maxSalary = 300;
  sliderValue = 150;

  updateSalaryRange() {
    this.maxSalary = this.sliderValue;
  
}


// filter button------------------------
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
