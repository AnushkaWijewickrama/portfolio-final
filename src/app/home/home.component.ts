import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { HeroComponent } from "../components/sections/hero/hero.component";
import { AboutComponent } from "../components/sections/about/about.component";
import { QualificationComponent } from "../components/sections/qualification/qualification.component";
import { ServicesComponent } from "../components/sections/services/services.component";
import { SkillsComponent } from "../components/sections/skills/skills.component";
import { ProjectsComponent } from "../components/sections/projects/projects.component";
import { ContactComponent } from "../components/sections/contact/contact.component";
import { FooterComponent } from "../components/sections/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, AboutComponent, QualificationComponent, ServicesComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
