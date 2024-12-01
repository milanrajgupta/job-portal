import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent  implements OnInit {
  completedJobs: number = 0;
  worldwideClients: number = 0;
  dollarPayout: number = 0;

  ngOnInit() {
    this.animateCounter();
  }

  private animateCounter() {
    this.countTo('completedJobs', 7, 3000);
    this.countTo('worldwideClients', 30, 2000); 
    this.countTo('dollarPayout', 13, 3000); 
  }

  private countTo(property: 'completedJobs' | 'worldwideClients' | 'dollarPayout', target: number, duration: number) {
    const startValue = 0; 
    const stepTime = duration / target; 
    let currentValue = startValue;

    const interval = setInterval(() => {
      // Check if currentValue is less than target
      if (currentValue < target) {
        // Increment currentValue
        currentValue += Math.ceil(target / (duration / stepTime)); // Increment towards target
        this[property] = currentValue; // Assign currentValue to the property
      } else {
        this[property] = target; 
        clearInterval(interval); 
      }
    }, stepTime);
  }
  

}
