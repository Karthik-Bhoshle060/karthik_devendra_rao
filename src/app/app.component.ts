import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AchievementComponent } from "./components/achievement/achievement.component";
import { EducationComponent } from "./components/education/education.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ScrollRevealService } from './services/scroll-reveal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, AchievementComponent, EducationComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'karthik-portfolio';
   constructor(private scrollReveal: ScrollRevealService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollReveal.init(), 300);
  }
}
