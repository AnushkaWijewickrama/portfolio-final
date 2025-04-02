import { Component, OnInit } from '@angular/core';
import { WorkItemComponent } from "../work-item/work-item.component";
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../../../shared/services/project.service';
import { Project } from '../../../shared/models/project';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-works',
  imports: [WorkItemComponent, NgFor],
  templateUrl: './works.component.html'
})
export class WorksComponent implements OnInit {
  projects: Project[] = [];

  constructor(private http: HttpClient, private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProjects()
  }
  private loadProjects(): void {
    this.projectService.getProject();
    this.projectService.getProjectStream().subscribe((res: any) => {
      this.projects = res
      console.log(res)

    })
  }
}
