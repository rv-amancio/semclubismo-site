import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
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
  voice?: string;
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

interface ChargeTeam {
  id: string;
  name: string;
  shortName: string;
  abbreviation: string;
  logo: string | null;
}

interface ChargeRow {
  position: number;
  previousPosition: number | null;
  movement: number;
  movementLabel: string;
  movementDirection: 'up' | 'down' | 'same';
  movementText: string;
  zone: 'leader' | 'libertadores' | 'sul-americana' | 'alerta' | 'z4';
  zoneLabel: string;
  team: ChargeTeam;
  points: number;
  played: number;
  goalDifference: number;
  resultLabel: string;
  verdict: string;
  punchline: string;
}

interface ChargeDaRodadaData {
  version: 1;
  generatedAt: string;
  updatedLabel: string;
  round: string;
  title: string;
  headline: string;
  summary: string;
  sources: PautaSource[];
  teams: ChargeRow[];
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
  readonly publishedCharge = signal<ChargeDaRodadaData | null>(null);
  readonly chargeColumns = computed(() => {
    const teams = this.publishedCharge()?.teams ?? [];
    return [teams.slice(0, 10), teams.slice(10)];
  });

  readonly tickerItems = [
    'Radar em tempo real',
    'Giro de rodada',
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

    this.http
      .get<ChargeDaRodadaData>('assets/content/charge-da-rodada.json')
      .pipe(catchError(() => of(null)))
      .subscribe((charge) => {
        this.publishedCharge.set(charge);
      });
  }
}
