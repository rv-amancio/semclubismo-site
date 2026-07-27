import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ScHeaderComponent } from '../../shared/layout/sc-header/sc-header.component';
import { ScFooterComponent } from '../../shared/layout/sc-footer/sc-footer.component';
import { ScButtonComponent } from '../../shared/ui/sc-button/sc-button.component';
import { SITE_IMAGES } from '../../shared/constants/site-images';
import { ScRadarComponent } from '../../shared/feature/sc-radar/sc-radar.component';

interface PautaFact {
  label: string;
  value: string;
}

interface PautaTake {
  voice: string;
  role: string;
  title: string;
  body: string;
}

interface PautaSource {
  label: string;
  url: string;
}

interface PublishedPautaData {
  round: string;
  updatedLabel: string;
  title: string;
  summary: string;
  facts: PautaFact[];
  takes: PautaTake[];
  praise: string[];
  criticism: string[];
  resenha: string[];
  nextAgenda: string[];
  sources: PautaSource[];
}

@Component({
  selector: 'sc-home-page',
  standalone: true,
  imports: [
    ScHeaderComponent,
    ScFooterComponent,
    ScButtonComponent,
    ScRadarComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private readonly http = inject(HttpClient);

  readonly images = SITE_IMAGES;
  readonly publishedPauta = signal<PublishedPautaData | null>(null);

  readonly tickerItems = [
    'Radar em tempo real',
    'Atualização automática',
    'Brasileirão Série A',
    'Mercado da bola',
    'Futebol acima das cores',
  ];

  constructor() {
    this.http
      .get<PublishedPautaData>('assets/content/pauta-da-mesa.json')
      .pipe(catchError(() => of(null)))
      .subscribe((pauta) => {
        this.publishedPauta.set(pauta);
      });
  }
}
