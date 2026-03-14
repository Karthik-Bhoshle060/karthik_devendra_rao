import { Component, HostListener, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { Navbar } from '../../Models/app.interfaces';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = '';

  @ViewChildren('navLink') navLinkRefs!: QueryList<ElementRef>;

  navLinks:Navbar[] = [
    { label: 'About',       section: 'about' },
    { label: 'Experience',  section: 'experience' },
    { label: 'Projects',    section: 'projects' },
    { label: 'Recognition', section: 'achievement' },
    { label: 'Education',   section: 'education' },
    { label: 'Contact',     section: 'contact' },
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.activeSection = this.scrollService.getActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
    this.activeSection = this.scrollService.getActiveSection();
  }

  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.scrollService.scrollTo(sectionId);
    this.isMobileMenuOpen = false;
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}