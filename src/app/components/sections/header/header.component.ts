import { Component } from '@angular/core';
import { ButtonComponent } from "../../common/button/button.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, NgFor],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  navigation = [
    { name: 'Work', href: 'work' },
    { name: 'Services', href: 'services' },
    { name: 'About', href: 'about' }
  ];
  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
