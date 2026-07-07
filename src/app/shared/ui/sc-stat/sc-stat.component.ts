import { Component, input } from '@angular/core';

@Component({
  selector: 'sc-stat',
  standalone: true,
  template: `
    <div class="sc-stat">
      <span class="sc-stat__icon" [innerHTML]="iconSvg()"></span>
      <div class="sc-stat__text">
        <strong>{{ value() }}</strong>
        <span>{{ label() }}</span>
      </div>
    </div>
  `,
  styles: [`
    .sc-stat {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 20px 24px;
      border-right: 1px solid rgba(255, 255, 255, 0.08);
    }
    .sc-stat:last-child { border-right: none; border-bottom: none; }
    @media (max-width: 1100px) {
      .sc-stat:nth-child(2) { border-right: none; }
    }
    @media (max-width: 720px) {
      .sc-stat { border-right: none; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
      .sc-stat:last-child { border-bottom: none; }
    }
    .sc-stat__icon {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      color: var(--sc-yellow);
    }
    .sc-stat__icon :deep(svg) { width: 100%; height: 100%; }
    .sc-stat__text strong {
      display: block;
      color: var(--sc-yellow);
      font-family: var(--sc-font-display);
      font-size: clamp(1.4rem, 2.5vw, 2rem);
      font-weight: 400;
      line-height: 1;
      text-transform: uppercase;
    }
    .sc-stat__text span {
      display: block;
      margin-top: 4px;
      color: var(--sc-gray-300);
      font-family: var(--sc-font-heading);
      font-size: 0.72rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
  `],
})
export class ScStatComponent {
  value = input.required<string>();
  label = input.required<string>();
  icon = input<'episodes' | 'views' | 'platforms' | 'weekly'>('episodes');

  iconSvg() {
    const icons: Record<string, string> = {
      episodes: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>`,
      views: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,
      platforms: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>`,
      weekly: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg>`,
    };
    return icons[this.icon()] ?? icons['episodes'];
  }
}
