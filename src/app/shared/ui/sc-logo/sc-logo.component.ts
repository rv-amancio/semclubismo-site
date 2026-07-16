import { Component, input } from '@angular/core';

@Component({
  selector: 'sc-logo',
  standalone: true,
  template: `
    <a class="sc-logo" [class.sc-logo--compact]="variant() === 'compact'" [href]="href()" aria-label="Sem Clubismo — início">
      <span class="sc-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 52 52" fill="none">
          <path d="M43.5 10.5A22 22 0 1 0 47.8 30" stroke="currentColor" stroke-width="4.2" stroke-linecap="square" />
          <path d="M8 38 44 8" stroke="currentColor" stroke-width="2" opacity=".45" />
          <text x="26" y="32" text-anchor="middle" fill="currentColor" font-family="Anton, Impact, sans-serif" font-size="18">SC</text>
        </svg>
      </span>
      @if (variant() !== 'mark') {
        <span class="sc-logo__text">
          <strong><i>SEM</i> CLUBISMO</strong>
          <small>O futebol acima das cores</small>
        </span>
      }
    </a>
  `,
  styles: [`
    .sc-logo {
      display: inline-flex;
      align-items: center;
      gap: 11px;
      flex-shrink: 0;
      color: var(--sc-white);
    }
    .sc-logo__mark {
      width: 48px;
      height: 48px;
      flex-shrink: 0;
      color: var(--sc-yellow);
      filter: drop-shadow(0 0 18px rgba(var(--sc-yellow-rgb), 0.28));
      transition: transform 240ms ease;
    }
    .sc-logo:hover .sc-logo__mark { transform: rotate(-7deg); }
    .sc-logo__mark svg { width: 100%; height: 100%; }
    .sc-logo__text {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .sc-logo__text strong {
      font-family: var(--sc-font-display);
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: 0.02em;
      line-height: 0.92;
      white-space: nowrap;
    }
    .sc-logo__text strong i {
      color: var(--sc-yellow);
      font-style: normal;
    }
    .sc-logo__text small {
      color: var(--sc-gray-300);
      font-family: var(--sc-font-heading);
      font-size: 0.52rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .sc-logo--compact .sc-logo__mark { width: 40px; height: 40px; }
    .sc-logo--compact .sc-logo__text strong { font-size: 1.08rem; }
    .sc-logo--compact .sc-logo__text small { display: none; }
    @media (max-width: 390px) {
      .sc-logo--compact .sc-logo__text { display: none; }
    }
  `],
})
export class ScLogoComponent {
  variant = input<'full' | 'compact' | 'mark'>('full');
  href = input('#inicio');
}
