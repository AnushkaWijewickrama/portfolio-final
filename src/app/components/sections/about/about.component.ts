import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';


interface Metric {
  count: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  counter = signal(0);
  metrics: Metric[] = [
    { count: '3+', label: 'YEARS OF EXPERIENCE' },
    { count: '20+', label: 'Web Application' },
    // { count: '18', label: 'DESIGN AWARDS' }
  ];


  constructor() { }

  ngOnInit(): void {
    this.counter.update(event => event + 1)
  }
}
