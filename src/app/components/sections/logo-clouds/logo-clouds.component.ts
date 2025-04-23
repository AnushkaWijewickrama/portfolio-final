import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { StackService } from '../../../shared/services/stack.service';
import { Stack } from '../../../shared/models/stack';


@Component({
  selector: 'app-logo-clouds',
  imports: [NgFor],
  templateUrl: './logo-clouds.component.html'
})
export class LogoCloudsComponent {
  stacks: Stack[] = [];

  constructor(private stackService: StackService) { }

  ngOnInit(): void {
    this.loadStack();
  }

  private loadStack(): void {
    this.stackService.getstack();
    this.stackService.getstackStream().subscribe((res: Stack[]) => {
      this.stacks = res

    })
  }
}
