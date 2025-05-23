import { Component, Input } from '@angular/core';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-work-item',
  imports: [],
  templateUrl: './work-item.component.html'
})
export class WorkItemComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() longDescription: string = '';
  @Input() projectLink: any = '';
  @Input() projectType: string = '';
  @Input() techStack = [];
  @Input() role: string = '';

}
