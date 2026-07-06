import { Component } from '@angular/core';
@Component({
  selector: 'sc-root',
  standalone: true,
  template: `<main class="tapume" aria-label="Sem Clubismo em breve"><img src="assets/images/tapume.png" alt="Sem Clubismo - em breve" /></main>`,
  styles: [`.tapume{min-height:100svh;display:grid;place-items:center;background:#000;padding:24px}.tapume img{display:block;width:min(100%,1536px);max-height:calc(100svh - 48px);object-fit:contain}`],
})
export class AppComponent {}
