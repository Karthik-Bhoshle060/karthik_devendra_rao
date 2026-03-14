import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // Dynamically get the year so it's always up to date
  currentYear: number = new Date().getFullYear();
  authorName: string = 'Karthik Devendra Rao';
}