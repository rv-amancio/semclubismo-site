import { Component } from '@angular/core';
import { ScHeaderComponent } from '../../shared/layout/sc-header/sc-header.component';
import { ScFooterComponent } from '../../shared/layout/sc-footer/sc-footer.component';
import { ScButtonComponent } from '../../shared/ui/sc-button/sc-button.component';
import { ScHostCardComponent } from '../../shared/ui/sc-host-card/sc-host-card.component';
import { SITE_IMAGES } from '../../shared/constants/site-images';
import { ScRadarComponent } from '../../shared/feature/sc-radar/sc-radar.component';

interface HostData {
  index: string;
  name: string;
  role: string;
  quote: string;
  accent: 'yellow' | 'white' | 'dark';
}

@Component({
  selector: 'sc-home-page',
  standalone: true,
  imports: [
    ScHeaderComponent,
    ScFooterComponent,
    ScButtonComponent,
    ScHostCardComponent,
    ScRadarComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly images = SITE_IMAGES;

  readonly hosts: HostData[] = [
    {
      index: '01',
      name: 'Rodrigo',
      role: 'O provocador',
      quote: 'Se todo mundo concordou, o debate nem começou.',
      accent: 'yellow',
    },
    {
      index: '02',
      name: 'Daniel',
      role: 'O estrategista',
      quote: 'Opinião forte também precisa de argumento.',
      accent: 'white',
    },
    {
      index: '03',
      name: 'Tadeu',
      role: 'O resenheiro',
      quote: 'Futebol é sério. A gente é que não precisa ser.',
      accent: 'dark',
    },
  ];

  readonly tickerItems = [
    'Radar em tempo real',
    'Atualização automática',
    'Brasileirão Série A',
    'Mercado da bola',
    'Futebol acima das cores',
  ];
}
