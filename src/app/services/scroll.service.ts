import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private sections = new Map<string, HTMLElement>();

  register(id: string, el: HTMLElement): void {
    this.sections.set(id, el);
  }

  scrollTo(id: string): void {
    const el = this.sections.get(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    }
  }

  getActiveSection(): string {
    let current = '';
    this.sections.forEach((el, id) => {
      if (window.scrollY >= el.offsetTop - 100) {
        current = id;
      }
    });
    return current;
  }
}