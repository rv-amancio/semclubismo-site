import { Component } from '@angular/core';
import { ScLogoComponent } from '../../ui/sc-logo/sc-logo.component';
import { ScButtonComponent } from '../../ui/sc-button/sc-button.component';

@Component({
  selector: 'sc-footer',
  standalone: true,
  imports: [ScLogoComponent, ScButtonComponent],
  template: `
    <footer class="footer" id="contato">
      <div class="sc-shell footer__cta">
        <div>
          <span>Media kit / publicidade</span>
          <h2>Sua marca também pode entrar nessa conversa.</h2>
        </div>
        <sc-button href="mailto:contato@semclubismo.com.br">Falar com o comercial</sc-button>
      </div>

      <div class="sc-shell footer__grid">
        <div class="footer__brand">
          <sc-logo href="#inicio" />
          <p>Notícia, debate e resenha. Futebol do tamanho da sua paixão — acima de qualquer cor.</p>
        </div>

        <nav class="footer__col" aria-label="Navegação do rodapé">
          <h3>Navegue</h3>
          <a href="#episodios">Episódios</a>
          <a href="#cortes">Cortes</a>
          <a href="#manifesto">Manifesto</a>
          <a href="#agenda">Ao vivo</a>
          <a href="#time">O time</a>
        </nav>

        <div class="footer__col">
          <h3>Acompanhe</h3>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener">YouTube ↗</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram ↗</a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener">TikTok ↗</a>
          <a href="https://open.spotify.com/" target="_blank" rel="noopener">Spotify ↗</a>
        </div>

        <div class="footer__col footer__contact">
          <h3>Contato</h3>
          <a href="mailto:contato@semclubismo.com.br">contato&#64;semclubismo.com.br</a>
          <p>Imprensa, sugestões de pauta, parcerias e aquela opinião que não coube nos comentários.</p>
        </div>
      </div>

      <div class="sc-shell footer__bottom">
        <span>&copy; 2026 Sem Clubismo.</span>
        <span class="footer__tagline">Nem sempre imparciais. Sempre sinceros.</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
      <span class="footer__watermark" aria-hidden="true">SC</span>
    </footer>
  `,
  styles: [`
    .footer {
      position: relative;
      padding-top: clamp(70px, 9vw, 130px);
      overflow: hidden;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      background: #080808;
    }
    .footer__cta {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: end;
      gap: 40px;
      padding-bottom: clamp(60px, 8vw, 100px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    }
    .footer__cta span {
      color: var(--sc-yellow);
      font-family: var(--sc-font-heading);
      font-size: 0.7rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }
    .footer__cta h2 {
      max-width: 900px;
      margin: 16px 0 0;
      font-family: var(--sc-font-display);
      font-size: clamp(3.2rem, 7vw, 7rem);
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: -0.03em;
      line-height: 0.9;
    }
    .footer__grid {
      display: grid;
      grid-template-columns: 1.5fr 0.6fr 0.6fr 1fr;
      gap: clamp(34px, 5vw, 76px);
      padding-top: 64px;
      padding-bottom: 62px;
    }
    .footer__brand p {
      max-width: 330px;
      margin: 22px 0 0;
      color: var(--sc-gray-300);
      font-size: 0.82rem;
      line-height: 1.7;
    }
    .footer__col h3 {
      margin: 0 0 19px;
      color: var(--sc-yellow);
      font-family: var(--sc-font-heading);
      font-size: 0.68rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.14em;
    }
    .footer__col a {
      width: fit-content;
      display: block;
      padding: 6px 0;
      color: var(--sc-gray-300);
      font-family: var(--sc-font-heading);
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      transition: color 160ms ease, transform 160ms ease;
    }
    .footer__col a:hover {
      color: var(--sc-yellow);
      transform: translateX(4px);
    }
    .footer__contact p {
      max-width: 340px;
      margin: 20px 0 0;
      color: var(--sc-gray-500);
      font-size: 0.75rem;
      line-height: 1.6;
    }
    .footer__bottom {
      position: relative;
      z-index: 2;
      min-height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      color: var(--sc-gray-500);
      font-size: 0.68rem;
    }
    .footer__tagline {
      color: var(--sc-yellow);
      font-family: var(--sc-font-heading);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .footer__bottom a {
      min-height: 44px;
      display: inline-flex;
      align-items: center;
      font-family: var(--sc-font-heading);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .footer__watermark {
      position: absolute;
      right: -40px;
      bottom: -105px;
      color: rgba(var(--sc-yellow-rgb), 0.035);
      font-family: var(--sc-font-display);
      font-size: clamp(16rem, 36vw, 38rem);
      line-height: 0.8;
      pointer-events: none;
    }
    @media (max-width: 980px) {
      .footer__cta { grid-template-columns: 1fr; align-items: start; }
      .footer__grid { grid-template-columns: 1.3fr 0.7fr 0.7fr; }
      .footer__contact { grid-column: 1 / -1; }
    }
    @media (max-width: 640px) {
      .footer__grid { grid-template-columns: 1fr 1fr; }
      .footer__brand, .footer__contact { grid-column: 1 / -1; }
      .footer__bottom { align-items: flex-start; flex-direction: column; padding-top: 22px; padding-bottom: 22px; }
    }
  `],
})
export class ScFooterComponent {}
