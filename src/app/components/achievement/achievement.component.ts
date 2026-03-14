import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-achievement',
  standalone: true,
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.scss'
})
export class AchievementComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.scrollService.register('achievement', this.el.nativeElement.querySelector('section'));
  }
}