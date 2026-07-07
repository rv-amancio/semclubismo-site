import { Component, input } from '@angular/core';

export interface EpisodeData {
  tag: string;
  title: string;
  duration: string;
  episode: string;
  date: string;
  image: string;
  theme: 'var' | 'market' | 'debate' | 'flamengo';
}

@Component({
  selector: 'sc-episode-card',
  standalone: true,
  template: `
    <article class="episode-card" [class]="'episode-card--' + episode().theme">
      <div class="episode-card__media">
        <img
          class="episode-card__img"
          [src]="episode().image"
          [alt]="episode().title"
          loading="lazy"
        />
        <div class="episode-card__overlay" aria-hidden="true"></div>
        <span class="sc-tag episode-card__tag">{{ episode().tag }}</span>
      </div>
      <div class="episode-card__body">
        <h3 class="episode-card__title">{{ episode().title }}</h3>
        <div class="episode-card__footer">
          <div class="episode-card__meta">
            <span class="episode-card__meta-row">
              <span>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
                {{ episode().duration }}
              </span>
              <span>{{ episode().episode }}</span>
            </span>
            <span>{{ episode().date }}</span>
          </div>
          <button class="episode-card__play" type="button" aria-label="Reproduzir episódio">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .episode-card {
      height: 100%;
      border-radius: var(--sc-radius-md);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: var(--sc-gray-900);
      transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
      cursor: pointer;
    }
    .episode-card:hover {
      transform: translateY(-6px);
      border-color: rgba(var(--sc-yellow-rgb), 0.35);
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55), var(--sc-glow-yellow);
    }
    .episode-card__media {
      position: relative;
      height: var(--sc-card-media-height);
      flex-shrink: 0;
      overflow: hidden;
    }
    .episode-card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease, filter 0.4s ease;
      filter: saturate(0.9) brightness(0.8);
    }
    .episode-card:hover .episode-card__img {
      transform: scale(1.06);
      filter: saturate(1.05) brightness(0.9);
    }
    .episode-card__overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.45) 100%);
    }
    .episode-card__tag {
      position: absolute;
      top: 16px;
      left: 16px;
      z-index: 2;
    }
    .episode-card__body {
      flex: 1;
      min-height: var(--sc-card-body-min-height);
      padding: 18px 20px 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: linear-gradient(180deg, var(--sc-gray-900), #0a0a0a);
    }
    .episode-card__title {
      margin: 0;
      flex: 1;
      font-family: var(--sc-font-heading);
      font-size: clamp(1rem, 1.8vw, 1.25rem);
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.2;
      letter-spacing: 0.01em;
    }
    .episode-card__footer {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 12px;
    }
    .episode-card__meta {
      display: flex;
      flex-direction: column;
      gap: 4px;
      color: var(--sc-gray-300);
      font-size: 0.72rem;
      font-weight: 500;
      min-width: 0;
    }
    .episode-card__meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .episode-card__meta span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .episode-card__meta svg { width: 13px; height: 13px; opacity: 0.7; flex-shrink: 0; }
    .episode-card__play {
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      border: none;
      border-radius: 50%;
      background: var(--sc-yellow);
      color: var(--sc-black);
      display: grid;
      place-items: center;
      cursor: pointer;
      box-shadow: var(--sc-glow-yellow);
      transition: transform 0.25s ease;
    }
    .episode-card__play svg { width: 20px; height: 20px; margin-left: 2px; }
    .episode-card__play:hover { transform: scale(1.08); }
  `],
})
export class ScEpisodeCardComponent {
  episode = input.required<EpisodeData>();
}
