import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


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
  metrics: Metric[] = [
    { count: '3', label: 'YEARS OF EXPERIENCE' },
    { count: '250+', label: 'MOBILE APPS SHIPPED' },
    { count: '18', label: 'DESIGN AWARDS' }
  ];


  constructor() { }

  ngOnInit(): void { }
}
