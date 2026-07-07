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
  label: string;
  href: string;
  sectionId: string;
}

@Component({
  selector: 'sc-header',
  standalone: true,
  imports: [ScLogoComponent, ScButtonComponent],
  template: `
    <header class="header">
      <div class="sc-shell header__inner">
        <sc-logo variant="compact" href="#inicio" />

        <nav class="header__nav" aria-label="Navegação principal">
          @for (link of navLinks; track link.sectionId) {
            <a
              [href]="link.href"
              [class.is-active]="isLinkActive(link)"
              [attr.aria-current]="isLinkActive(link) ? 'page' : null"
            >{{ link.label }}</a>
          }
        </nav>

        <div class="header__actions">
          <div class="header__social" aria-label="Redes sociais">
            @for (social of socials; track social.label) {
              <a [href]="social.href" [attr.aria-label]="social.label" target="_blank" rel="noopener">
                <span [innerHTML]="social.icon"></span>
              </a>
            }
          </div>
          <sc-button href="#episodios" icon="play">Assista agora</sc-button>
          <button class="header__menu" type="button" aria-label="Abrir menu" (click)="menuOpen = !menuOpen">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      @if (menuOpen) {
        <nav class="header__mobile" aria-label="Menu mobile">
          @for (link of navLinks; track link.sectionId) {
            <a
              [href]="link.href"
              [class.is-active]="isLinkActive(link)"
              (click)="menuOpen = false"
            >{{ link.label }}</a>
          }
        </nav>
      }
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      inset: 0 0 auto;
      z-index: 100;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.6));
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .header__inner {
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }
    .header__nav {
      display: flex;
      align-items: center;
      gap: clamp(16px, 2.5vw, 32px);
    }
    .header__nav a {
      font-family: var(--sc-font-heading);
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--sc-gray-300);
      transition: color 0.2s;
      white-space: nowrap;
    }
    .header__nav a:hover,
    .header__nav a.is-active { color: var(--sc-yellow); }
    .header__actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .header__social {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .header__social a {
      width: 20px;
      height: 20px;
      color: var(--sc-gray-300);
      transition: color 0.2s;
    }
    .header__social a:hover { color: var(--sc-yellow); }
    .header__menu {
      display: none;
      flex-direction: column;
      gap: 5px;
      padding: 8px;
      background: none;
      border: none;
      cursor: pointer;
    }
    .header__menu span {
      display: block;
      width: 22px;
      height: 2px;
      background: var(--sc-white);
    }
    .header__mobile {
      display: none;
      flex-direction: column;
      padding: 16px var(--sc-shell-pad) 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      background: rgba(0, 0, 0, 0.95);
    }
    .header__mobile a {
      padding: 12px 0;
      font-family: var(--sc-font-heading);
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--sc-gray-300);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .header__mobile a.is-active { color: var(--sc-yellow); }
    @media (max-width: 1024px) {
      .header__nav, .header__social { display: none; }
      .header__menu { display: flex; }
      .header__mobile { display: flex; }
    }
    @media (max-width: 480px) {
      .header__actions sc-button { display: none; }
    }
  `],
})
export class ScHeaderComponent implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  menuOpen = false;
  activeSection = signal('inicio');

  readonly navLinks: NavLink[] = [
    { label: 'Início', href: '#inicio', sectionId: 'inicio' },
    { label: 'Sobre', href: '#sobre', sectionId: 'sobre' },
    { label: 'Episódios', href: '#episodios', sectionId: 'episodios' },
    { label: 'Bastidores', href: '#bastidores', sectionId: 'bastidores' },
    { label: 'Blog', href: '#blog', sectionId: 'blog' },
    { label: 'Contato', href: '#contato', sectionId: 'contato' },
  ];

  socials = [
    {
      label: 'YouTube',
      href: 'https://youtube.com',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>`,
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c2.7 0 3 0 4.1.1 1 0 1.5.2 1.9.3.5.2.8.4 1.2.8.4.4.6.7.8 1.2.1.4.3.9.3 1.9.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.1-.9.3-1.9.3-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.1-.4-.3-.9-.3-1.9-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1 .2-1.5.3-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.1.9-.3 1.9-.3 1.1-.1 1.4-.1 4.1-.1zM12 0C9.3 0 8.9 0 7.8.1 6.7.1 6 .3 5.4.6c-.7.3-1.2.6-1.8 1.2C3 2.4 2.7 2.9 2.4 3.6 2.1 4.2 1.9 4.9 1.9 6 1.8 7.1 1.8 7.5 1.8 10.2v3.6c0 2.7 0 3.1.1 4.2 0 1.1.2 1.8.5 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.3 1.3.5 2.4.5 1.1.1 1.5.1 4.2.1s3.1 0 4.2-.1c1.1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.3-.6.5-1.3.5-2.4.1-1.1.1-1.5.1-4.2V10.2c0-2.7 0-3.1-.1-4.2 0-1.1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8-.6-.6-1.1-.9-1.8-1.2-.6-.3-1.3-.5-2.4-.5C15.1 0 14.7 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.9a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z"/></svg>`,
    },
    {
      label: 'TikTok',
      href: 'https://tiktok.com',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/></svg>`,
    },
    {
      label: 'Spotify',
      href: 'https://spotify.com',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.39-.74.51-1.13.27-3.09-1.89-6.98-2.31-11.57-1.26-.44.1-.88-.17-.98-.61-.1-.44.17-.88.61-.98 4.97-1.13 9.23-.66 12.64 1.4.39.24.51.74.27 1.13l.16.05zm1.47-3.27c-.3.49-.93.64-1.42.34-3.53-2.17-8.92-2.8-13.1-1.53-.55.17-1.13-.14-1.3-.69-.17-.55.14-1.13.69-1.3 4.77-1.45 10.8-.76 14.87 1.77.49.3.64.93.34 1.42l-.08-.01z"/></svg>`,
    },
  ];

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      this.setupSectionObserver();
      this.syncFromHash();
      window.addEventListener('hashchange', this.syncFromHash);
    });
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer?.disconnect();
    window.removeEventListener('hashchange', this.syncFromHash);
  }

  isLinkActive(link: NavLink): boolean {
    return this.activeSection() === link.sectionId;
  }

  private readonly syncFromHash = (): void => {
    const id = window.location.hash.replace('#', '');
    if (this.navLinks.some((link) => link.sectionId === id)) {
      this.activeSection.set(id);
    }
  };

  private setupSectionObserver(): void {
    const sections = this.navLinks
      .map((link) => document.getElementById(link.sectionId))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) return;

    const visible = new Map<string, number>();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
        }

        if (visible.size) {
          const best = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
          this.activeSection.set(best);
          return;
        }

        this.fallbackActiveSection(sections);
      },
      {
        rootMargin: '-88px 0px -45% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    );

    sections.forEach((section) => this.observer!.observe(section));
    this.fallbackActiveSection(sections);
  }

  private fallbackActiveSection(sections: HTMLElement[]): void {
    const ordered = [...sections].sort((a, b) => a.offsetTop - b.offsetTop);
    const marker = window.scrollY + 120;
    let current = ordered[0].id;

    for (const section of ordered) {
      if (section.offsetTop <= marker) {
        current = section.id;
      }
    }

    this.activeSection.set(current);
  }
}
