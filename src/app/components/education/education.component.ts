import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.scrollService.register('education', this.el.nativeElement.querySelector('section'));
  }
}