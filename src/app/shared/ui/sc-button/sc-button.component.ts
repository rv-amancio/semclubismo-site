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
      [attr.target]="isExternal() ? '_blank' : null"
      [attr.rel]="isExternal() ? 'noopener' : null"
    >
      @if (icon() === 'play') {
        <svg class="sc-button__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      }
      <span><ng-content /></span>
      <svg class="sc-button__arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" />
      </svg>
    </a>
  `,
  styles: [`
    :host { display: inline-flex; }
    .sc-button {
      position: relative;
      min-height: 50px;
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 0 23px;
      overflow: hidden;
      border: 2px solid var(--sc-yellow);
      border-radius: 0;
      background: var(--sc-yellow);
      color: var(--sc-black);
      box-shadow: 7px 7px 0 rgba(var(--sc-yellow-rgb), 0.12);
      font-family: var(--sc-font-heading);
      font-size: 0.76rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      white-space: nowrap;
      cursor: pointer;
      transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, color 180ms ease;
      clip-path: polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 9px 100%, 0 calc(100% - 9px));
    }
    .sc-button:hover {
      transform: translate(-3px, -3px);
      box-shadow: 10px 10px 0 rgba(var(--sc-yellow-rgb), 0.2);
      background: var(--sc-yellow-bright);
    }
    .sc-button__icon,
    .sc-button__arrow {
      width: 17px;
      height: 17px;
      flex-shrink: 0;
    }
    .sc-button__arrow {
      transition: transform 180ms ease;
    }
    .sc-button:hover .sc-button__arrow { transform: translateX(4px); }
    .sc-button--secondary,
    .sc-button--ghost {
      background: rgba(5, 5, 5, 0.2);
      color: var(--sc-white);
      box-shadow: none;
    }
    .sc-button--secondary:hover,
    .sc-button--ghost:hover {
      background: var(--sc-yellow);
      color: var(--sc-black);
      box-shadow: 7px 7px 0 rgba(var(--sc-yellow-rgb), 0.15);
    }
    .sc-button--ghost {
      border-color: rgba(255, 255, 255, 0.28);
    }
    .sc-button--dark {
      border-color: var(--sc-black);
      background: var(--sc-black);
      color: var(--sc-white);
      box-shadow: 7px 7px 0 rgba(0, 0, 0, 0.16);
    }
    .sc-button--dark:hover {
      background: var(--sc-white);
      color: var(--sc-black);
    }
  `],
})
export class ScButtonComponent {
  variant = input<'primary' | 'secondary' | 'ghost' | 'dark'>('primary');
  href = input('#');
  icon = input<'play' | ''>('');

  isExternal(): boolean {
    return /^https?:\/\//.test(this.href());
  }
}
