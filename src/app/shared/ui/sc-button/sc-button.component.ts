import { Component, input } from '@angular/core';

@Component({
  selector: 'sc-button',
  standalone: true,
  template: `
    <a
      class="sc-button"
      [class.sc-button--secondary]="variant() === 'secondary'"
      [class.sc-button--ghost]="variant() === 'ghost'"
      [class.sc-button--dark]="variant() === 'dark'"
      [href]="href()"
    >
      @if (icon() === 'play') {
        <svg class="sc-button__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z"/>
        </svg>
      }
      <ng-content />
    </a>
  `,
  styles: [`
    .sc-button {
      min-height: 48px;
      padding: 0 24px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: var(--sc-yellow);
      color: var(--sc-black);
      font-family: var(--sc-font-heading);
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      box-shadow: var(--sc-glow-yellow);
      transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
      border: 2px solid transparent;
      cursor: pointer;
    }
    .sc-button:hover {
      transform: translateY(-2px);
      box-shadow: var(--sc-glow-yellow-strong);
    }
    .sc-button__icon { width: 18px; height: 18px; }
    .sc-button--secondary {
      background: transparent;
      color: var(--sc-white);
      border-color: var(--sc-yellow);
      box-shadow: none;
    }
    .sc-button--secondary:hover {
      background: rgba(var(--sc-yellow-rgb), 0.1);
      color: var(--sc-yellow);
    }
    .sc-button--ghost {
      background: transparent;
      color: var(--sc-white);
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: none;
    }
    .sc-button--ghost:hover {
      border-color: var(--sc-yellow);
      color: var(--sc-yellow);
    }
    .sc-button--dark {
      background: var(--sc-black);
      color: var(--sc-white);
      box-shadow: none;
    }
    .sc-button--dark:hover {
      background: var(--sc-gray-900);
    }
  `],
})
export class ScButtonComponent {
  variant = input<'primary' | 'secondary' | 'ghost' | 'dark'>('primary');
  href = input('#');
  icon = input<'play' | ''>('');
}
