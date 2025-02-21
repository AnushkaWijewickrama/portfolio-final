import { Component, OnInit } from '@angular/core';
import { WorkItemComponent } from "../work-item/work-item.component";
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-works',
  imports: [WorkItemComponent, NgFor],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent implements OnInit {
  works: WorkItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<WorkItem[]>('/works.json').subscribe((data) => {
      this.works = data;
    });


  }
}
