import { Component } from '@angular/core';
import { ScLogoComponent } from '../../ui/sc-logo/sc-logo.component';
import { ScButtonComponent } from '../../ui/sc-button/sc-button.component';

@Component({
  selector: 'sc-footer',
  standalone: true,
  imports: [ScLogoComponent, ScButtonComponent],
  template: `
    <footer class="footer" id="contato">
      <div class="sc-shell footer__grid">
        <div class="footer__brand">
          <sc-logo href="#inicio" />
          <p>Debate, resenha e diversão sobre futebol — com respeito em primeiro lugar.</p>
          <div class="footer__social">
            @for (social of socials; track social.label) {
              <a [href]="social.href" [attr.aria-label]="social.label" target="_blank" rel="noopener">
                <span [innerHTML]="social.icon"></span>
              </a>
            }
          </div>
        </div>

        <div class="footer__col">
          <h4>Navegação</h4>
          <a href="#inicio">Início</a>
          <a href="#episodios">Episódios</a>
          <a href="#bastidores">Bastidores</a>
          <a href="#blog">Blog</a>
          <a href="#sobre">Sobre</a>
        </div>

        <div class="footer__col">
          <h4>Institucional</h4>
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Política de Cookies</a>
          <a href="#">Media Kit</a>
        </div>

        <div class="footer__col footer__contact">
          <h4>Contato</h4>
          <a href="mailto:contato@semclubismo.com.br">contato&#64;semclubismo.com.br</a>
          <sc-button variant="ghost" href="mailto:contato@semclubismo.com.br">Fale conosco</sc-button>
        </div>
      </div>

      <div class="sc-shell footer__bottom">
        <span>&copy; 2026 Sem Clubismo. Todos os direitos reservados.</span>
        <span class="footer__tagline">O futebol acima das cores.</span>
      </div>

      <div class="footer__watermark" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="rgba(240,165,0,0.08)" stroke-width="3"/>
          <text x="100" y="115" text-anchor="middle" fill="rgba(240,165,0,0.06)" font-family="Anton" font-size="48">SC</text>
        </svg>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      position: relative;
      background: var(--sc-gray-900);
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding: 64px 0 0;
      overflow: hidden;
    }
    .footer__grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1fr;
      gap: 40px;
      padding-bottom: 48px;
    }
    .footer__brand p {
      margin: 16px 0;
      color: var(--sc-gray-300);
      font-size: 0.88rem;
      line-height: 1.6;
      max-width: 280px;
    }
    .footer__social {
      display: flex;
      gap: 14px;
    }
    .footer__social a {
      width: 22px;
      height: 22px;
      color: var(--sc-gray-300);
      transition: color 0.2s;
    }
    .footer__social a:hover { color: var(--sc-yellow); }
    .footer__col h4 {
      margin: 0 0 16px;
      font-family: var(--sc-font-heading);
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--sc-yellow);
    }
    .footer__col a {
      display: block;
      padding: 6px 0;
      color: var(--sc-gray-300);
      font-size: 0.88rem;
      transition: color 0.2s;
    }
    .footer__col a:hover { color: var(--sc-white); }
    .footer__contact sc-button { margin-top: 12px; }
    .footer__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 20px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      color: var(--sc-gray-500);
      font-size: 0.78rem;
    }
    .footer__tagline {
      font-family: var(--sc-font-heading);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--sc-yellow);
    }
    .footer__watermark {
      position: absolute;
      right: -40px;
      bottom: -40px;
      width: 280px;
      height: 280px;
      pointer-events: none;
    }
    @media (max-width: 900px) {
      .footer__grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 560px) {
      .footer__grid { grid-template-columns: 1fr; }
      .footer__bottom { flex-direction: column; text-align: center; }
    }
  `],
})
export class ScFooterComponent {
  socials = [
    { label: 'YouTube', href: '#', icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>` },
    { label: 'Instagram', href: '#', icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c2.7 0 3 0 4.1.1 1 0 1.5.2 1.9.3.5.2.8.4 1.2.8.4.4.6.7.8 1.2.1.4.3.9.3 1.9.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.1-.9.3-1.9.3-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.1-.4-.3-.9-.3-1.9-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1 .2-1.5.3-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.1.9-.3 1.9-.3 1.1-.1 1.4-.1 4.1-.1zM12 0C9.3 0 8.9 0 7.8.1 6.7.1 6 .3 5.4.6c-.7.3-1.2.6-1.8 1.2C3 2.4 2.7 2.9 2.4 3.6 2.1 4.2 1.9 4.9 1.9 6 1.8 7.1 1.8 7.5 1.8 10.2v3.6c0 2.7 0 3.1.1 4.2 0 1.1.2 1.8.5 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.3 1.3.5 2.4.5 1.1.1 1.5.1 4.2.1s3.1 0 4.2-.1c1.1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.3-.6.5-1.3.5-2.4.1-1.1.1-1.5.1-4.2V10.2c0-2.7 0-3.1-.1-4.2 0-1.1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8-.6-.6-1.1-.9-1.8-1.2-.6-.3-1.3-.5-2.4-.5C15.1 0 14.7 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.9a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z"/></svg>` },
    { label: 'TikTok', href: '#', icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/></svg>` },
    { label: 'X', href: '#', icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.7l-5.2-6.8L5.4 22H2.3l7.3-8.4L1 2h6.9l4.7 6.1L18.9 2zm-1.2 18h1.7L7.1 3.9H5.3L17.7 20z"/></svg>` },
    { label: 'Spotify', href: '#', icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.39-.74.51-1.13.27-3.09-1.89-6.98-2.31-11.57-1.26-.44.1-.88-.17-.98-.61-.1-.44.17-.88.61-.98 4.97-1.13 9.23-.66 12.64 1.4.39.24.51.74.27 1.13l.16.05z"/></svg>` },
  ];
}
