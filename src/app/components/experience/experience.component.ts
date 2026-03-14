import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { Experience } from '../../Models/app.interfaces';



@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      role: 'Software Engineer',
      company: 'Impetus Technologies India Pvt Ltd',
      period: 'Nov 2025 – Present',
      project: 'Infinium — AI-powered intelligence fusion platform for government security & law enforcement',
      bullets: [
        'Architected a Microfrontend system using an Nx monorepo to build, manage, and scale modular Angular applications with shared libraries and independent deployments.',
        'Developed an AI-powered chat window delivering contextual responses to user queries across specific security use cases.'
      ]
    },
    {
      role: 'Packaged App Development Analyst',
      company: 'Accenture Pvt Ltd',
      period: 'Dec 2022 – Nov 2025',
      project: 'Valet Tracking & Management App — nationwide platform managing 460M+ annual events across 1.8M apartment homes',
      bullets: [
        'Implemented multilingual support in Angular using @ngx-translate/core with dynamic runtime language switching, structured translation files, and robust fallback handling.',
        'Integrated Google Maps (AGM library) with custom markers, info windows, and dynamic data rendering based on user actions and API responses.',
        'Built a Prompt Library Application enabling internal teams to create, review, approve, and access AI prompts — boosting team productivity and consistency.',
        'Implemented responsive design principles, increasing cross-device compatibility by 40%.',
        'Optimized performance with lazy loading and change detection strategies, reducing load times by 25%.',
        'Integrated CKEditor for rich text editing, enabling dynamic content creation and formatting across the platform.',
        'Owned the full delivery lifecycle — from gathering requirements with the BI team through to testing and production deployment.'
      ]
    }
  ];

  constructor(
    private el: ElementRef,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.scrollService.register('experience', this.el.nativeElement.querySelector('section'));
  }
}