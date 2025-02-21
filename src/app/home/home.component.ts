import { Component } from '@angular/core';

import { HeroComponent } from "../components/sections/hero/hero.component";
import { ServicesComponent } from "../components/sections/services/services.component";
import { HeaderComponent } from '../components/sections/header/header.component';
import { WorksComponent } from "../components/sections/works/works.component";
import { LogoCloudsComponent } from "../components/sections/logo-clouds/logo-clouds.component";
import { AboutComponent } from "../components/sections/about/about.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, HeaderComponent, WorksComponent, ServicesComponent, LogoCloudsComponent, AboutComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
