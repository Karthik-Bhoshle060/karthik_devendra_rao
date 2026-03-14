import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { Project } from '../../Models/app.interfaces';


@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      number: '01',
      title: 'Sudoku Game Application 🧩',
      description: 'A full-stack Sudoku game with user authentication, live timer, scoring system, and only 3 chances to complete the puzzle. Game results are saved to a database on completion.',
      tags: ['Angular', 'Node.js', 'Authentication', 'Full Stack', 'REST API'],
      githubUrl: 'https://github.com/Karthik-Bhoshle060/Sudoku-Fullstack'
    },
    {
      number: '02',
      title: 'AI QA Assistant 🤖',
      description: 'A full-stack AI assistant powered by Google Gemini 2.5. Features a smart Dual-Route Architecture that handles text queries and image/vision analysis on separate endpoints for maximum performance.',
      tags: ['Angular 18', 'Node.js', 'Google Gemini', 'Express', 'Vision API', 'Full Stack'],
      githubUrl: 'https://github.com/Karthik-Bhoshle060/AI-QA-ASSISTANT'
    },
    {
      number: '03',
      title: 'QR Code Generator for Google Maps 📍',
      description: 'An Angular web app that generates scannable QR codes for any geographical location. Enter latitude & longitude or a Google Maps link and get a QR code instantly.',
      tags: ['Angular', 'ngx-qrcode', 'Reactive Forms', 'Bootstrap', 'Google Maps'],
      githubUrl: 'https://github.com/Karthik-Bhoshle060/qr_code_generator_for_google_map'
    },
    {
      number: '04',
      title: 'Online Ticket Booking System 🎟️',
      description: 'An Angular web application for booking tickets online. Built with a clean component-driven architecture, handling ticket selection, booking flows, and user interactions seamlessly.',
      tags: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      githubUrl: 'https://github.com/Karthik-Bhoshle060/Online_Ticket_Booking_Application'
    }
  ];

  constructor(
    private el: ElementRef,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.scrollService.register('projects', this.el.nativeElement.querySelector('section'));
  }
}