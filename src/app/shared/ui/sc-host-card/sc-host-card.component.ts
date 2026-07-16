import { Component, input } from '@angular/core';

@Component({
  selector: 'sc-host-card',
  standalone: true,
  template: `
    <article class="host-card" [attr.data-accent]="accent()">
      <div class="host-card__top">
        <span>{{ index() }}</span>
        <span>Sem Clubismo</span>
      </div>

      <div class="host-card__portrait" aria-hidden="true">
        <span>{{ initial() }}</span>
        <i></i>
      </div>

      <div class="host-card__content">
        <p>{{ role() }}</p>
        <h3>{{ name() }}</h3>
        <blockquote>“{{ quote() }}”</blockquote>
      </div>
    </article>
  `,
  styles: [`
    :host { display: block; min-width: 0; }
    .host-card {
      --host-bg: #151515;
      --host-fg: var(--sc-white);
      --host-accent: var(--sc-yellow);
      position: relative;
      min-height: 540px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.16);
      background: var(--host-bg);
      color: var(--host-fg);
      transition: transform 280ms ease, box-shadow 280ms ease;
    }
    .host-card[data-accent='yellow'] {
      --host-bg: var(--sc-yellow);
      --host-fg: var(--sc-black);
      --host-accent: var(--sc-black);
      border-color: var(--sc-yellow);
    }
    .host-card[data-accent='white'] {
      --host-bg: var(--sc-paper);
      --host-fg: var(--sc-black);
      --host-accent: var(--sc-yellow);
      border-color: var(--sc-paper);
    }
    .host-card:hover {
      transform: translateY(-10px);
      box-shadow: 14px 14px 0 rgba(var(--sc-yellow-rgb), 0.22);
    }
    .host-card__top {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 22px 24px;
      border-bottom: 1px solid currentColor;
      font-family: var(--sc-font-heading);
      font-size: 0.65rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      opacity: 0.72;
    }
    .host-card__portrait {
      position: relative;
      min-height: 238px;
      display: grid;
      place-items: center;
      overflow: hidden;
      border-bottom: 1px solid currentColor;
    }
    .host-card__portrait::before,
    .host-card__portrait::after {
      position: absolute;
      border: 1px solid currentColor;
      border-radius: 50%;
      content: '';
      opacity: 0.18;
    }
    .host-card__portrait::before {
      width: 260px;
      height: 260px;
    }
    .host-card__portrait::after {
      width: 190px;
      height: 190px;
    }
    .host-card__portrait > span {
      position: relative;
      z-index: 2;
      color: var(--host-accent);
      font-family: var(--sc-font-display);
      font-size: clamp(8rem, 14vw, 12rem);
      line-height: 0.8;
      text-transform: uppercase;
      transition: transform 400ms cubic-bezier(0.2, 0.75, 0.2, 1);
    }
    .host-card:hover .host-card__portrait > span {
      transform: scale(1.1) rotate(-3deg);
    }
    .host-card__portrait i {
      position: absolute;
      right: 7%;
      bottom: 13%;
      width: 52px;
      height: 52px;
      border: 10px solid var(--host-accent);
      border-radius: 50%;
      opacity: 0.75;
    }
    .host-card__content {
      flex: 1;
      padding: 24px;
    }
    .host-card__content p {
      margin: 0 0 8px;
      color: var(--host-accent);
      font-family: var(--sc-font-heading);
      font-size: 0.68rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }
    .host-card__content h3 {
      margin: 0;
      font-family: var(--sc-font-display);
      font-size: clamp(3.2rem, 5.5vw, 5.2rem);
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: -0.03em;
      line-height: 0.95;
    }
    blockquote {
      margin: 20px 0 0;
      font-size: 0.78rem;
      font-style: normal;
      line-height: 1.55;
      opacity: 0.7;
    }
    @media (max-width: 960px) and (min-width: 721px) {
      .host-card {
        min-height: 300px;
        display: grid;
        grid-template-columns: 0.75fr 1.25fr;
        grid-template-rows: auto 1fr;
      }
      .host-card__top { grid-column: 1 / -1; }
      .host-card__portrait { min-height: 240px; border-right: 1px solid currentColor; border-bottom: 0; }
      .host-card__content { align-self: center; }
    }
  `],
})
export class ScHostCardComponent {
  index = input.required<string>();
  name = input.required<string>();
  role = input.required<string>();
  quote = input.required<string>();
  accent = input<'yellow' | 'white' | 'dark'>('dark');

  initial(): string {
    return this.name().charAt(0);
  }
}
