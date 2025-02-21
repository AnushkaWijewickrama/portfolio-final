import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface SocialLink {
  name: string;
  href: string;
}
@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  social: SocialLink[] = [
    { name: 'Instagram', href: '#' },
    { name: 'Dribbble', href: '#' },
    { name: 'Behance', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'YouTube', href: '#' },
  ];
}
