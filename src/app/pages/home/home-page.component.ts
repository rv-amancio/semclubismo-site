import { Component, signal } from '@angular/core';
import { ScHeaderComponent } from '../../shared/layout/sc-header/sc-header.component';
import { ScFooterComponent } from '../../shared/layout/sc-footer/sc-footer.component';
import { ScButtonComponent } from '../../shared/ui/sc-button/sc-button.component';
import {
  EpisodeData,
  ScEpisodeCardComponent,
} from '../../shared/ui/sc-episode-card/sc-episode-card.component';
import { ScHostCardComponent } from '../../shared/ui/sc-host-card/sc-host-card.component';
import { SITE_IMAGES } from '../../shared/constants/site-images';

interface CutData {
  number: string;
  tag: string;
  title: string;
  views: string;
  image: string;
}

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
    ScEpisodeCardComponent,
    ScHostCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly images = SITE_IMAGES;
  readonly newsletterSent = signal(false);

  readonly episodes: EpisodeData[] = [
    {
      tag: 'Polêmica da rodada',
      title: 'O VAR decidiu de novo?',
      summary: 'Erro, protocolo ou pressão? A mesa revê os lances que incendiaram a rodada.',
      duration: '1h 22min',
      episode: 'EP. 047',
      date: '05 JUL 2026',
      image: SITE_IMAGES.episodes.var,
      theme: 'var',
      href: 'https://www.youtube.com/',
    },
    {
      tag: 'Mercado da bola',
      title: 'Neymar volta ao Brasil?',
      summary: 'Bastidor, cenário e o que realmente cabe no orçamento dos clubes.',
      duration: '58 min',
      episode: 'EP. 046',
      date: '28 JUN 2026',
      image: SITE_IMAGES.episodes.market,
      theme: 'market',
      href: 'https://www.youtube.com/',
    },
    {
      tag: 'Craque ou mídia?',
      title: 'Vini Jr. é o melhor do mundo?',
      summary: 'Números, impacto e contexto. Sem torcida organizada na bancada.',
      duration: '1h 05min',
      episode: 'EP. 045',
      date: '21 JUN 2026',
      image: SITE_IMAGES.episodes.debate,
      theme: 'debate',
      href: 'https://www.youtube.com/',
    },
    {
      tag: 'Debate aberto',
      title: 'Quem aguenta o calendário?',
      summary: 'Elenco, sequência e o preço de jogar tudo até o fim da temporada.',
      duration: '1h 18min',
      episode: 'EP. 044',
      date: '14 JUN 2026',
      image: SITE_IMAGES.episodes.flamengo,
      theme: 'flamengo',
      href: 'https://www.youtube.com/',
    },
  ];

  readonly cuts: CutData[] = [
    {
      number: '01',
      tag: 'Sem papas na língua',
      title: 'Foi pênalti ou vontade de aparecer?',
      views: '32 mil views',
      image: SITE_IMAGES.episodes.var,
    },
    {
      number: '02',
      tag: 'Mercado',
      title: 'O contrato que pode virar o jogo',
      views: '24 mil views',
      image: SITE_IMAGES.episodes.market,
    },
    {
      number: '03',
      tag: 'Bate-pronto',
      title: 'Craque decide. Ídolo fica.',
      views: '19 mil views',
      image: SITE_IMAGES.episodes.debate,
    },
  ];

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
    'Debate sem roteiro',
    'Toda semana',
    'Futebol acima das cores',
    '+50 episódios',
    '+100 mil visualizações',
  ];

  submitNewsletter(event: Event): void {
    event.preventDefault();
    this.newsletterSent.set(true);
  }
}
