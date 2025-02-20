import { Component } from '@angular/core';

import { HeroComponent } from "../components/sections/hero/hero.component";
import { AboutComponent } from "../components/sections/about/about.component";
import { QualificationComponent } from "../components/sections/qualification/qualification.component";
import { ServicesComponent } from "../components/sections/services/services.component";
import { SkillsComponent } from "../components/sections/skills/skills.component";
import { ProjectsComponent } from "../components/sections/projects/projects.component";
import { ContactComponent } from "../components/sections/contact/contact.component";
import { FooterComponent } from "../components/footer/footer.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { ExperienceComponent } from "../components/sections/experience/experience.component";
import { InterestsComponent } from "../components/sections/interests/interests.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, QualificationComponent, ServicesComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent, SidebarComponent, ExperienceComponent, ExperienceComponent, InterestsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
