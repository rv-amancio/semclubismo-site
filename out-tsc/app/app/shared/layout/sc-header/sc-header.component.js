import { Component } from '@angular/core';
import { ScLogoComponent } from '../../ui/sc-logo/sc-logo.component';
import { ScButtonComponent } from '../../ui/sc-button/sc-button.component';
import * as i0 from "@angular/core";
export class ScHeaderComponent {
    static ɵfac = function ScHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScHeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScHeaderComponent, selectors: [["sc-header"]], decls: 12, vars: 0, consts: [[1, "header"], [1, "sc-shell", "header__inner"], ["href", "#episodios"], ["href", "#equipe"], ["href", "#comunidade"], ["href", "#ao-vivo"]], template: function ScHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1);
            i0.ɵɵelement(2, "sc-logo");
            i0.ɵɵelementStart(3, "nav")(4, "a", 2);
            i0.ɵɵtext(5, "Epis\u00F3dios");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "a", 3);
            i0.ɵɵtext(7, "Equipe");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "a", 4);
            i0.ɵɵtext(9, "Comunidade");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "sc-button", 5);
            i0.ɵɵtext(11, "Ao vivo");
            i0.ɵɵelementEnd()()();
        } }, dependencies: [ScLogoComponent, ScButtonComponent], styles: [".header[_ngcontent-%COMP%]{position:fixed;inset:0 0 auto 0;z-index:20;backdrop-filter:blur(20px);background:linear-gradient(180deg,rgba(3,3,3,.86),rgba(3,3,3,.48));border-bottom:1px solid rgba(255,255,255,.08)}.header__inner[_ngcontent-%COMP%]{height:82px;display:flex;align-items:center;justify-content:space-between;gap:28px}nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:34px;color:var(--sc-gray-300);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:.82rem}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--sc-yellow-500)}@media(max-width:860px){nav[_ngcontent-%COMP%]{display:none}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScHeaderComponent, [{
        type: Component,
        args: [{ selector: 'sc-header', standalone: true, imports: [ScLogoComponent, ScButtonComponent], template: `<header class="header"><div class="sc-shell header__inner"><sc-logo /><nav><a href="#episodios">Episódios</a><a href="#equipe">Equipe</a><a href="#comunidade">Comunidade</a></nav><sc-button href="#ao-vivo">Ao vivo</sc-button></div></header>`, styles: [".header{position:fixed;inset:0 0 auto 0;z-index:20;backdrop-filter:blur(20px);background:linear-gradient(180deg,rgba(3,3,3,.86),rgba(3,3,3,.48));border-bottom:1px solid rgba(255,255,255,.08)}.header__inner{height:82px;display:flex;align-items:center;justify-content:space-between;gap:28px}nav{display:flex;align-items:center;gap:34px;color:var(--sc-gray-300);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:.82rem}nav a:hover{color:var(--sc-yellow-500)}@media(max-width:860px){nav{display:none}}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScHeaderComponent, { className: "ScHeaderComponent", filePath: "src/app/shared/layout/sc-header/sc-header.component.ts", lineNumber: 5 }); })();
