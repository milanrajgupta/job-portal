import { Component } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  reviews = [
    { 
      rating: 4.7,
      text: "It's a well created theme without much overhead. The created was very responsive and helpful.",
      name: "Zubayer Al Hasan",
      location: "Dhaka",
      avatar: "/assets/testmo/img_14.jpg" 
    },
    { 
      rating: 4.7,
      text: "It's a well created theme without much overhead. The created was very responsive and helpful.",
      name: "Rashed Ka",
      location: "Italy",
      avatar: "/assets/testmo/img_15.jpg" 
    },
    { 
      rating: 4.8,
      text: "It's a well created theme without much overhead. The created was very responsive and helpful.",
      name: "Emily Zhang",
      location: "Singapore",
      avatar: "/assets/testmo/img_14.jpg" 
    },
    { 
      rating: 4.9,
      text: "It's a well created theme without much overhead. The created was very responsive and helpful.",
      name: "John Doe",
      location: "USA",
      avatar: "/assets/testmo/img_15.jpg" 
    },
    { 
      rating: 4.6,
      text: "It's a well created theme without much overhead. The created was very responsive and helpful.",
      name: "Alice Smith",
      location: "Canada",
      avatar: "/assets/testmo/img_15.jpg" 
    },
    { 
      rating: 4.5,
      text: "It's a well created theme without much overhead. The created was very responsive and helpful.",
      name: "Martin Lee",
      location: "UK",
      avatar: "/assets/testmo/img_14.jpg" 
    }
  ];

  currentSlide = 0;
  currentDot = 0;

  // Move slides by one but control dots to always display three
  setCurrentSlideGroup(dotIndex: number) {
    this.currentDot = dotIndex;
    this.currentSlide = dotIndex; 
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const slidesElement = document.querySelector('.slides') as HTMLElement;
    slidesElement.style.transform = `translateX(-${this.currentSlide * 50}%)`;
  }
}
