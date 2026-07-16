import { Component, input } from '@angular/core';

export interface EpisodeData {
  tag: string;
  title: string;
  summary: string;
  duration: string;
  episode: string;
  date: string;
  image: string;
  theme: 'var' | 'market' | 'debate' | 'flamengo';
  href: string;
}

@Component({
  selector: 'sc-episode-card',
  standalone: true,
  template: `
    <a
      class="episode-card"
      [attr.data-theme]="episode().theme"
      [href]="episode().href"
      target="_blank"
      rel="noopener"
      [attr.aria-label]="'Assistir: ' + episode().title"
    >
      <div class="episode-card__media">
        <img
          class="episode-card__img"
          [src]="episode().image"
          [alt]="episode().title"
          width="900"
          height="600"
          loading="lazy"
        />
        <div class="episode-card__overlay" aria-hidden="true"></div>
        <span class="episode-card__episode">{{ episode().episode }}</span>
      </div>

      <div class="episode-card__body">
        <div class="episode-card__top">
          <span>{{ episode().tag }}</span>
          <span>{{ episode().date }}</span>
        </div>
        <h3>{{ episode().title }}</h3>
        <div class="episode-card__footer">
          <span>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7Z" />
            </svg>
            {{ episode().duration }}
          </span>
          <i aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" /></svg>
          </i>
        </div>
      </div>
    </a>
  `,
  styles: [`
    :host { display: block; min-width: 0; height: 100%; }
    .episode-card {
      position: relative;
      min-height: 0;
      height: 100%;
      display: grid;
      grid-template-columns: minmax(118px, 40%) minmax(0, 1fr);
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: #111;
      transition: transform 240ms ease, border-color 240ms ease, background 240ms ease;
    }
    .episode-card:hover {
      transform: translateX(-6px);
      border-color: var(--sc-yellow);
      background: #171717;
    }
    .episode-card__media {
      position: relative;
      min-height: 188px;
      overflow: hidden;
    }
    .episode-card__img,
    .episode-card__overlay {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .episode-card__img {
      object-fit: cover;
      filter: grayscale(0.8) brightness(0.58) contrast(1.1);
      transition: transform 600ms cubic-bezier(0.2, 0.75, 0.2, 1), filter 400ms ease;
    }
    .episode-card:hover .episode-card__img {
      transform: scale(1.08);
      filter: grayscale(0.2) brightness(0.68) contrast(1.08);
    }
    .episode-card__overlay {
      background: linear-gradient(90deg, transparent 30%, rgba(0, 0, 0, 0.36));
    }
    .episode-card__episode {
      position: absolute;
      bottom: 14px;
      left: 14px;
      color: var(--sc-yellow);
      font-family: var(--sc-font-display);
      font-size: 1.2rem;
      letter-spacing: 0.06em;
    }
    .episode-card__body {
      min-width: 0;
      display: flex;
      flex-direction: column;
      padding: clamp(16px, 2vw, 24px);
    }
    .episode-card__top {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      color: var(--sc-gray-500);
      font-family: var(--sc-font-heading);
      font-size: 0.58rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .episode-card__top span:first-child {
      color: var(--sc-yellow);
    }
    h3 {
      margin: 18px 0;
      font-family: var(--sc-font-heading);
      font-size: clamp(1.12rem, 1.8vw, 1.48rem);
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.08;
    }
    .episode-card__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-top: auto;
      color: var(--sc-gray-300);
      font-size: 0.66rem;
      font-weight: 600;
    }
    .episode-card__footer > span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .episode-card__footer > span svg {
      width: 13px;
      height: 13px;
    }
    .episode-card__footer i {
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: var(--sc-yellow);
      transition: background 180ms ease, color 180ms ease;
    }
    .episode-card:hover .episode-card__footer i {
      background: var(--sc-yellow);
      color: var(--sc-black);
    }
    .episode-card__footer i svg { width: 16px; height: 16px; }
    @media (max-width: 1180px) and (min-width: 961px) {
      .episode-card { grid-template-columns: 1fr; }
      .episode-card__media { min-height: 180px; }
      .episode-card__body { min-height: 180px; }
    }
    @media (max-width: 720px) {
      .episode-card { min-height: 220px; }
      .episode-card__media { min-height: 220px; }
      .episode-card:hover { transform: none; }
    }
  `],
})
export class ScEpisodeCardComponent {
  episode = input.required<EpisodeData>();
}
