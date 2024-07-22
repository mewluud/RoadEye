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
    { icon: 'assets/icon1.svg', title: 'Step 1', description: 'Describe step 1 here.' },
    { icon: 'assets/icon2.svg', title: 'Step 2', description: 'Describe step 2 here.' },
    { icon: 'assets/icon3.svg', title: 'Step 3', description: 'Describe step 3 here.' },
    { icon: 'assets/icon4.svg', title: 'Step 4', description: 'Describe step 4 here.' },
    { icon: 'assets/img/Asset-3how-it-works.svg', title: 'Step 5', description: 'Describe step 5 here.' }
  ];

  scrollCarousel(direction: number) {
    const cardWidth = this.carouselInner.nativeElement.querySelector('.card').offsetWidth;
    this.carouselInner.nativeElement.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  }
}
