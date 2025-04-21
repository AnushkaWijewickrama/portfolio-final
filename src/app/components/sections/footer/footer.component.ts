import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface SocialLink {
  name: string;
  href: string;
}
@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  social: SocialLink[] = [
    { name: 'Instagram', href: 'https://www.instagram.com/anushka_wijewickrama_official/' },
    { name: 'Linkedin', href: 'https://www.linkedin.com/in/anushka-wijewickrama/' }
  ];
}
