import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  skills:string[] = [
    'Angular', 'React.js', 'TypeScript', 'JavaScript', 'RxJS',
    'Node.js', 'HTML & CSS', 'REST APIs', 'Kendo UI', 'PrimeNG',
    'Azure App Services', 'Microfrontend / Nx', 'Git', 'Figma',
    'Agile / Scrum', 'Jira'
  ];

  constructor(
    private el: ElementRef,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.scrollService.register('about', this.el.nativeElement.querySelector('section'));
  }
}