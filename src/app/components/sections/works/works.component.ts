import { Component, OnInit } from '@angular/core';
import { WorkItemComponent } from "../work-item/work-item.component";
import { NgFor } from '@angular/common';
import { ProjectService } from '../../../shared/services/project.service';
import { Project } from '../../../shared/models/project';


@Component({
  selector: 'app-works',
  imports: [WorkItemComponent, NgFor],
  templateUrl: './works.component.html'
})
export class WorksComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProjects()
  }
  private loadProjects(): void {
    this.projectService.getProject();
    this.projectService.getProjectStream().subscribe((res: Project[]) => {
      this.projects = res

    })
  }
}
