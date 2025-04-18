import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() size: 'lg' | 'sm' = 'sm';
  @Input() link: string = '#';
  @Input() label: string = 'Button';
}
