import { Component } from '@angular/core';
import { ScHeaderComponent } from '../../shared/layout/sc-header/sc-header.component';
import { ScFooterComponent } from '../../shared/layout/sc-footer/sc-footer.component';
import { ScButtonComponent } from '../../shared/ui/sc-button/sc-button.component';
import { ScStatComponent } from '../../shared/ui/sc-stat/sc-stat.component';
import { ScEpisodeCardComponent, EpisodeData } from '../../shared/ui/sc-episode-card/sc-episode-card.component';
import { ScHostCardComponent } from '../../shared/ui/sc-host-card/sc-host-card.component';
import { SITE_IMAGES } from '../../shared/constants/site-images';

@Component({
  selector: 'sc-home-page',
  standalone: true,
  imports: [
    ScHeaderComponent,
    ScFooterComponent,
    ScButtonComponent,
    ScStatComponent,
    ScEpisodeCardComponent,
    ScHostCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly images = SITE_IMAGES;

  episodes: EpisodeData[] = [
    { tag: 'Polêmica da Rodada', title: 'O VAR decidiu de novo?', duration: '1h 22min', episode: 'Ep. 47', date: '05/07/2026', image: SITE_IMAGES.episodes.var, theme: 'var' },
    { tag: 'Mercado da Bola', title: 'Neymar volta ao Brasil?', duration: '58 min', episode: 'Ep. 46', date: '28/06/2026', image: SITE_IMAGES.episodes.market, theme: 'market' },
    { tag: 'Craque ou Mídia?', title: 'Vini Jr. é o melhor do mundo?', duration: '1h 05min', episode: 'Ep. 45', date: '21/06/2026', image: SITE_IMAGES.episodes.debate, theme: 'debate' },
    { tag: 'Debate Aberto', title: 'Flamengo vai ganhar tudo?', duration: '1h 18min', episode: 'Ep. 44', date: '14/06/2026', image: SITE_IMAGES.episodes.flamengo, theme: 'flamengo' },
  ];

  pillars = [
    { icon: '💬', label: 'Opinião sem filtro' },
    { icon: '🤝', label: 'Respeito acima de tudo' },
    { icon: '😄', label: 'Resenha e diversão' },
    { icon: '⚽', label: 'Paixão pelo futebol' },
  ];

  partners = ['Centauro', 'FutFanatics', 'Brahma', 'Umbro', 'Adidas', 'iFood', 'Hering', 'Nivea'];
}
