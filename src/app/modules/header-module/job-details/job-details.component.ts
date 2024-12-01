
import { Component, HostListener, OnInit } from '@angular/core';
interface Job {
  id: number;
  logo: string;
  type: 'Part-time' | 'Fulltime';
  title: string;
  salary: string;
  period: string;
  location: string;
}

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit{
  jobs: Job[] = [
    { id: 1, logo: '/assets/images/media_22.png', type: 'Part-time', title: 'Marketing specialist in SEO & Affiliate.', salary: '$40k', period: 'Yearly', location: 'AUS, Sydney' },
    { id: 2, logo: '/assets/images/media_23.png', type: 'Fulltime', title: 'Lead & Product & Web Designer.', salary: '$2k-3k', period: 'Month', location: 'UAE, Dubai' },
    { id: 3, logo: '/assets/images/media_22.png', type: 'Fulltime', title: 'Lead designer & expert in Maya 3D', salary: '$300-$450', period: 'Week', location: 'USA, California' },
    { id: 4, logo: '/assets/images/media_22.png', type: 'Fulltime', title: 'Lead designer & expert in Maya 3D', salary: '$300-$450', period: 'Week', location: 'USA, California' },
    { id: 5, logo: '/assets/images/media_22.png', type: 'Fulltime', title: 'Lead designer & expert in Maya 3D', salary: '$300-$450', period: 'Week', location: 'USA, California' },
    { id: 6, logo: '/assets/images/media_22.png', type: 'Fulltime', title: 'Lead designer & expert in Maya 3D', salary: '$300-$450', period: 'Week', location: 'USA, California' },
    // Additional jobs as needed
  ];

  currentSlide = 0;
  itemsToShow = 3;
  translateValue = 0;

  ngOnInit() {
    this.updateItemsToShow();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsToShow();
  }

  updateItemsToShow() {
    if (window.innerWidth <= 768) {
      this.itemsToShow = 1;
    } else if (window.innerWidth <= 1024) {
      this.itemsToShow = 2;
    } else {
      this.itemsToShow = 3;
    }
    this.currentSlide = 0;
    this.updateTranslateValue();
  }

  nextSlide() {
    if (this.currentSlide < this.jobs.length - this.itemsToShow) {
      this.currentSlide++;
      this.updateTranslateValue();
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateTranslateValue();
    }
  }

  updateTranslateValue() {
    const cardWidth = window.innerWidth <= 768 ? 
      window.innerWidth - 32 : 
      window.innerWidth <= 1024 ? 
        (window.innerWidth - 64) / 2 : 
        (window.innerWidth - 64) / 3; 
    
    this.translateValue = -(this.currentSlide * (cardWidth + 24)); 
  }
}
