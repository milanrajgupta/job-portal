import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent {
  jobItems = [
    { title: 'Web & Mobile Prototype', type: 'Fulltime', location: 'Spain', logo: '/assets/images/media_22.png' },
    { title: 'Document Writer', type: 'Part-time', location: 'Italy', logo: '/assets/images/media_26.png' },
    { title: 'Outbound Call Service', type: 'Fulltime', location: 'USA', logo: '/assets/images/media_25.png' },
    { title: 'Product Designer', type: 'Part-time', location: 'Dubai', logo: '/assets/images/media_24.png' },
    { title: 'Marketing Specialist', type: 'Part-time', location: 'UK', logo: '/assets/images/media_23.png' }
  ];

  isDropdownHidden: boolean[] = [];

  ngOnInit() {
    // Initialize the dropdown state for each job item
    this.isDropdownHidden = new Array(this.jobItems.length).fill(true);
  }

  toggleDropdown(event: Event, index: number) {
    console.log("Dropdown toggle clicked for button " + index); 
    this.isDropdownHidden[index] = !this.isDropdownHidden[index];
    event.stopPropagation(); // Prevent click event from bubbling up to document
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    // Close dropdowns if click happens outside of any dropdown
    if (!target.closest('.profileDropdown')) {
      this.isDropdownHidden = this.isDropdownHidden.map(() => true); // Close all dropdowns
    }
  }
}
