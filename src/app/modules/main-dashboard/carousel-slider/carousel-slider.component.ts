import {  Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})
export class CarouselSliderComponent implements OnInit {
  slides = [
    {
      tag: "#1 Online Marketplace",
      heading: "Find the talents for any job.",
      description: "Unlock your potential with quality job & earn from world leading brands & co.",
      image: "assets/slider/pic1.png"  // Ensure images are stored in assets folder
    },
    {
      tag: "#1 Job Platform",
      heading: "Connect with top talent worldwide.",
      description: "Access a global pool of skilled professionals ready to bring your projects to life.",
      image: "assets/slider/pic2.png"
    },
    {
      tag: "#1 Career Platform",
      heading: "Build your dream team today.",
      description: "Post jobs, review candidates, and hire the best talent for your business.",
      image: "assets/slider/pic3.png"
    }
  ];

  currentSlide = this.slides[0];
  selectedCategory: string = 'designer';
  keyword: string = '';

  ngOnInit() {
    setInterval(() => this.updateSlide(), 5000);
  }

  updateSlide() {
    const currentIndex = this.slides.indexOf(this.currentSlide);
    const nextIndex = (currentIndex + 1) % this.slides.length;
    this.currentSlide = this.slides[nextIndex];
  }

  search() {
    // Implement search logic here
    console.log('Search triggered with:', this.selectedCategory, this.keyword);
  }



  // // To toggle the dropdown
  isActive = false;
  selectedOption = 'Designer';
  options = ['Designer', 'Content Creator', 'Web Developer', 'SEO Guru', 'Digital Market' ]; // Dropdown options
  // Toggle dropdown menu
  toggleMenu() {
    this.isActive = !this.isActive;
  }
  // Handle option selection
  selectOption(option: string) {
    this.selectedOption = option;
    this.isActive = false;
  }
}
