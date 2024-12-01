import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-slider',
  templateUrl: './trending-slider.component.html',
  styleUrls: ['./trending-slider.component.scss']
})
export class TrendingSliderComponent  {
  slides = [
    { image: 'assets/images/img1.jpg', title: 'Mobile App Development'},
    { image: 'assets/images/img5.jpg', title: 'Web Development'},
    { image: 'assets/images/img4.jpg', title: 'Product & Branding Design'},
    { image: 'assets/images/img3.jpg', title: 'Audio & Video Editing'},
    { image: 'assets/images/img2.jpg', title: 'Admin & Customer Support'},
    { image: 'assets/images/img1.jpg', title: 'Audio & Video Editing'},
    { image: 'assets/images/img2.jpg', title: 'Web Development'},
    { image: 'assets/images/img4.jpg', title: 'Audio & Video Editing'},
    
  ];
  currentIndex = 0;
  slidesPerPage = 1;  
  totalDots = 4;      

  get transformValue(): string {
    const numberOfSlidesToShow = this.getNumberOfSlidesToShow();
    return `translateX(-${(this.currentIndex * 100) / numberOfSlidesToShow}%)`;
  }

  getNumberOfSlidesToShow(): number {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
      return 1; 
    } else if (screenWidth <= 768) {
      return 2; 
    } else if (screenWidth <= 1200) {
      return 3; 
    } else {
      return 4; 
    }
  }

 
  getActiveDot(): number {
    return Math.floor(this.currentIndex / this.slidesPerPage);
  }

 
  getTotalPages(): number {
    return Math.ceil(this.slides.length / this.slidesPerPage);
  }

 
  goToSection(dotIndex: number): void {
    this.currentIndex = dotIndex * this.slidesPerPage;
  }


  nextSlide(): void {
    const numberOfSlidesToShow = this.getNumberOfSlidesToShow();
    if (this.currentIndex < this.slides.length - numberOfSlidesToShow) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
  }

  // Navigate to the previous slide
  previousSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - this.getNumberOfSlidesToShow(); 
    }
  }

  
  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.currentIndex = 0; 
    });
  }
}
