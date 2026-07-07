import { Component, input } from '@angular/core';

@Component({
  selector: 'sc-host-card',
  standalone: true,
  template: `
    <article class="host-card">
      <div class="host-card__frame">
        <div class="host-card__portrait" [style.background]="gradient()">
          <span class="host-card__initial">{{ initial() }}</span>
        </div>
      </div>
      <h3>{{ name() }}</h3>
    </article>
  `,
  styles: [`
    .host-card { text-align: center; }
    .host-card__frame {
      border-radius: var(--sc-radius-md);
      padding: 3px;
      background: linear-gradient(160deg, var(--sc-yellow), var(--sc-gold), var(--sc-yellow));
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
      transition: transform 0.35s ease, box-shadow 0.35s ease;
    }
    .host-card:hover .host-card__frame {
      transform: translateY(-4px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), var(--sc-glow-yellow);
    }
    .host-card__portrait {
      aspect-ratio: 3 / 4;
      border-radius: calc(var(--sc-radius-md) - 2px);
      display: grid;
      place-items: center;
      overflow: hidden;
    }
    .host-card__initial {
      font-family: var(--sc-font-display);
      font-size: clamp(3rem, 8vw, 4.5rem);
      color: rgba(255, 255, 255, 0.2);
      text-transform: uppercase;
      user-select: none;
    }
    .host-card h3 {
      margin: 14px 0 0;
      font-family: var(--sc-font-heading);
      font-size: 1.1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
  `],
})
export class ScHostCardComponent {
  name = input.required<string>();
  gradient = input('linear-gradient(180deg, #2a2218 0%, #0d0d0d 100%)');

  initial() {
    return this.name().charAt(0);
  }
}
