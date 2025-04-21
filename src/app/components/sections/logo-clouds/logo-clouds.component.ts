import { NgFor } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { StackService } from '../../../shared/services/stack.service';
import { Stack } from '../../../shared/models/stack';

interface ClientLogo {
  id: string;
  name: string;
  publicURL: string;
}

@Component({
  selector: 'app-logo-clouds',
  imports: [NgFor],
  templateUrl: './logo-clouds.component.html'
})
export class LogoCloudsComponent {
  stacks: Stack[] = [];

  constructor(private http: HttpClient, private stackService: StackService) { }

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
