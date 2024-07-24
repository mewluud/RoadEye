// how-it-works.component.ts
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent {
  @ViewChild('carouselInner', { static: true }) carouselInner!: ElementRef;

  steps = [
    { icon: 'assets/icon1.svg', title: 'Step 1', description: 'Install the app' },
    { icon: 'assets/icon2.svg', title: 'Step 2', description: 'Drive safe.' },
    { icon: 'assets/icon3.svg', title: 'Step 3', description: 'Encounter Any Issue !' },
    { icon: 'assets/icon4.svg', title: 'Step 4', description: 'Open the App.' },
    { icon: 'assets/icon5.svg', title: 'Step 5', description: 'Start reporting' }
  ];

  scrollCarousel(direction: number) {
    const cardWidth = this.carouselInner.nativeElement.querySelector('.card').offsetWidth;
    this.carouselInner.nativeElement.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  }
}
