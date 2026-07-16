import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  Component,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { ScLogoComponent } from '../../ui/sc-logo/sc-logo.component';
import { ScButtonComponent } from '../../ui/sc-button/sc-button.component';

interface NavLink {
  index: string;
  label: string;
  href: string;
  sectionId: string;
}

@Component({
  selector: 'sc-header',
  standalone: true,
  imports: [ScLogoComponent, ScButtonComponent],
  template: `
    <header class="header" [class.is-scrolled]="isScrolled()" [class.is-menu-open]="menuOpen()">
      <div class="sc-shell header__inner">
        <sc-logo variant="compact" href="#inicio" />

        <nav class="header__nav" aria-label="Navegação principal">
          @for (link of navLinks; track link.sectionId) {
            <a
              [href]="link.href"
              [class.is-active]="isLinkActive(link)"
              [attr.aria-current]="isLinkActive(link) ? 'location' : null"
            >{{ link.label }}</a>
          }
        </nav>

        <div class="header__actions">
          <span class="header__status"><i></i> Toda semana</span>
          <sc-button href="https://www.youtube.com/" icon="play">Último episódio</sc-button>
          <button
            class="header__menu"
            type="button"
            [attr.aria-label]="menuOpen() ? 'Fechar menu' : 'Abrir menu'"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-menu"
            (click)="toggleMenu()"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <span class="header__line" aria-hidden="true"></span>

      @if (menuOpen()) {
        <nav id="mobile-menu" class="header__mobile" aria-label="Menu mobile">
          <div class="header__mobile-links">
            @for (link of navLinks; track link.sectionId) {
              <a
                [href]="link.href"
                [class.is-active]="isLinkActive(link)"
                (click)="closeMenu()"
              >
                <span>{{ link.index }}</span>
                {{ link.label }}
              </a>
            }
          </div>
          <div class="header__mobile-bottom">
            <p>O futebol acima das cores.</p>
            <div>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener">YouTube</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a>
              <a href="https://open.spotify.com/" target="_blank" rel="noopener">Spotify</a>
            </div>
          </div>
        </nav>
      }
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      inset: 0 0 auto;
      z-index: 100;
      background: linear-gradient(180deg, rgba(5, 5, 5, 0.9), rgba(5, 5, 5, 0.16));
      transition: background 240ms ease, backdrop-filter 240ms ease;
    }
    .header.is-scrolled,
    .header.is-menu-open {
      background: rgba(5, 5, 5, 0.94);
      backdrop-filter: blur(18px);
    }
    .header__inner {
      height: 84px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 28px;
      transition: height 240ms ease;
    }
    .header.is-scrolled .header__inner { height: 70px; }
    .header__nav {
      display: flex;
      align-items: center;
      gap: clamp(18px, 2.5vw, 38px);
    }
    .header__nav a {
      position: relative;
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      color: var(--sc-gray-300);
      font-family: var(--sc-font-heading);
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      white-space: nowrap;
      transition: color 180ms ease;
    }
    .header__nav a::after {
      position: absolute;
      right: 0;
      bottom: 6px;
      left: 0;
      height: 2px;
      background: var(--sc-yellow);
      content: '';
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 220ms ease;
    }
    .header__nav a:hover,
    .header__nav a.is-active { color: var(--sc-white); }
    .header__nav a:hover::after,
    .header__nav a.is-active::after {
      transform: scaleX(1);
      transform-origin: left;
    }
    .header__actions {
      display: flex;
      align-items: center;
      gap: 18px;
    }
    .header__status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--sc-gray-300);
      font-family: var(--sc-font-heading);
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      white-space: nowrap;
    }
    .header__status i {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--sc-red);
      box-shadow: 0 0 12px rgba(255, 59, 48, 0.7);
    }
    .header__menu {
      width: 48px;
      height: 48px;
      display: none;
      place-items: center;
      gap: 5px;
      padding: 12px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: transparent;
      color: var(--sc-white);
      cursor: pointer;
    }
    .header__menu span {
      display: block;
      width: 22px;
      height: 2px;
      background: currentColor;
      transition: transform 220ms ease, opacity 180ms ease;
    }
    .header__menu span:nth-child(2) { width: 15px; justify-self: end; }
    .header.is-menu-open .header__menu span:first-child { transform: translateY(7px) rotate(45deg); }
    .header.is-menu-open .header__menu span:nth-child(2) { opacity: 0; }
    .header.is-menu-open .header__menu span:last-child { transform: translateY(-7px) rotate(-45deg); }
    .header__line {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 1px;
      background: linear-gradient(90deg, var(--sc-yellow) 0 12%, rgba(255, 255, 255, 0.1) 12% 100%);
      transform-origin: left;
    }
    .header__mobile {
      position: fixed;
      inset: 70px 0 0;
      min-height: calc(100dvh - 70px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: clamp(32px, 8vw, 70px) var(--sc-shell-pad) 34px;
      overflow-y: auto;
      background:
        linear-gradient(135deg, transparent 0 65%, rgba(var(--sc-yellow-rgb), 0.08) 65%),
        var(--sc-black);
      animation: menu-reveal 320ms cubic-bezier(0.2, 0.75, 0.2, 1) both;
    }
    .header__mobile-links {
      display: flex;
      flex-direction: column;
    }
    .header__mobile-links a {
      display: grid;
      grid-template-columns: 46px minmax(0, 1fr);
      align-items: center;
      gap: 18px;
      padding: 12px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      font-family: var(--sc-font-display);
      font-size: clamp(2.6rem, 10vw, 5.8rem);
      text-transform: uppercase;
      line-height: 1;
      transition: color 180ms ease, padding-left 180ms ease;
    }
    .header__mobile-links a:hover,
    .header__mobile-links a.is-active {
      padding-left: 10px;
      color: var(--sc-yellow);
    }
    .header__mobile-links a span {
      align-self: start;
      padding-top: 5px;
      color: var(--sc-yellow);
      font-family: var(--sc-font-heading);
      font-size: 0.65rem;
      letter-spacing: 0.1em;
    }
    .header__mobile-bottom {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 28px;
      margin-top: 50px;
    }
    .header__mobile-bottom p {
      margin: 0;
      color: var(--sc-yellow);
      font-family: var(--sc-font-heading);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.13em;
    }
    .header__mobile-bottom div { display: flex; flex-wrap: wrap; gap: 18px; }
    .header__mobile-bottom a {
      color: var(--sc-gray-300);
      font-family: var(--sc-font-heading);
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    @keyframes menu-reveal {
      from { opacity: 0; clip-path: polygon(0 0, 100% 0, 100% 0, 0 20%); }
      to { opacity: 1; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
    }
    @media (max-width: 1180px) {
      .header__nav, .header__status { display: none; }
      .header__menu { display: grid; }
    }
    @media (max-width: 560px) {
      .header__inner { height: 72px; }
      .header.is-scrolled .header__inner { height: 64px; }
      .header__actions sc-button { display: none; }
      .header__mobile { inset: 64px 0 0; min-height: calc(100dvh - 64px); }
      .header__mobile-bottom { align-items: flex-start; flex-direction: column; }
    }
  `],
})
export class ScHeaderComponent implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  readonly menuOpen = signal(false);
  readonly isScrolled = signal(false);
  readonly activeSection = signal('inicio');

  readonly navLinks: NavLink[] = [
    { index: '01', label: 'Episódios', href: '#episodios', sectionId: 'episodios' },
    { index: '02', label: 'Cortes', href: '#cortes', sectionId: 'cortes' },
    { index: '03', label: 'Manifesto', href: '#manifesto', sectionId: 'manifesto' },
    { index: '04', label: 'Ao vivo', href: '#agenda', sectionId: 'agenda' },
    { index: '05', label: 'O time', href: '#time', sectionId: 'time' },
  ];

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      this.setupSectionObserver();
      this.syncFromHash();
      this.updateScrollState();
      window.addEventListener('hashchange', this.syncFromHash);
      window.addEventListener('scroll', this.updateScrollState, { passive: true });
      window.addEventListener('keydown', this.handleKeydown);
    });
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer?.disconnect();
    document.body.classList.remove('is-menu-open');
    window.removeEventListener('hashchange', this.syncFromHash);
    window.removeEventListener('scroll', this.updateScrollState);
    window.removeEventListener('keydown', this.handleKeydown);
  }

  toggleMenu(): void {
    this.setMenuState(!this.menuOpen());
  }

  closeMenu(): void {
    this.setMenuState(false);
  }

  isLinkActive(link: NavLink): boolean {
    return this.activeSection() === link.sectionId;
  }

  private setMenuState(open: boolean): void {
    this.menuOpen.set(open);
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('is-menu-open', open);
    }
  }

  private readonly handleKeydown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.menuOpen()) {
      this.closeMenu();
    }
  };

  private readonly updateScrollState = (): void => {
    this.isScrolled.set(window.scrollY > 36);
  };

  private readonly syncFromHash = (): void => {
    const id = window.location.hash.replace('#', '');
    if (this.navLinks.some((link) => link.sectionId === id)) {
      this.activeSection.set(id);
    }
  };

  private setupSectionObserver(): void {
    const sections = this.navLinks
      .map((link) => document.getElementById(link.sectionId))
      .filter((element): element is HTMLElement => !!element);

    if (!sections.length) return;

    const visible = new Map<string, number>();
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size) {
          const current = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
          this.activeSection.set(current);
        }
      },
      { rootMargin: '-84px 0px -52% 0px', threshold: [0.12, 0.3, 0.55, 0.75] },
    );

    sections.forEach((section) => this.observer?.observe(section));
  }
}
