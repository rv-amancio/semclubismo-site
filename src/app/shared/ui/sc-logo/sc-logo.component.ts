import { Component, input } from '@angular/core';

@Component({
  selector: 'sc-logo',
  standalone: true,
  template: `
    <a class="sc-logo" [class.sc-logo--compact]="variant() === 'compact'" [href]="href()">
      <span class="sc-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2"/>
          <text x="20" y="26" text-anchor="middle" fill="currentColor" font-family="Anton, sans-serif" font-size="14" font-weight="bold">SC</text>
        </svg>
      </span>
      @if (variant() !== 'mark') {
        <span class="sc-logo__text">
          <strong>SEM CLUBISMO</strong>
          <small>O FUTEBOL ACIMA DAS CORES</small>
        </span>
      }
    </a>
  `,
  styles: [`
    .sc-logo {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      color: var(--sc-white);
    }
    .sc-logo__mark {
      width: 44px;
      height: 44px;
      flex-shrink: 0;
      color: var(--sc-yellow);
      filter: drop-shadow(var(--sc-glow-yellow));
    }
    .sc-logo__mark svg { width: 100%; height: 100%; }
    .sc-logo__text {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .sc-logo__text strong {
      font-family: var(--sc-font-display);
      font-size: 1.1rem;
      font-weight: 400;
      letter-spacing: 0.04em;
      line-height: 1;
    }
    .sc-logo__text small {
      font-family: var(--sc-font-heading);
      font-size: 0.62rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--sc-gray-300);
    }
    .sc-logo--compact .sc-logo__mark { width: 36px; height: 36px; }
    .sc-logo--compact .sc-logo__text strong { font-size: 0.95rem; }
    .sc-logo--compact .sc-logo__text small { display: none; }
  `],
})
export class ScLogoComponent {
  variant = input<'full' | 'compact' | 'mark'>('full');
  href = input('#inicio');
}
