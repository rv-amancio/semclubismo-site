import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ScHostCardComponent {
    name = input.required(...(ngDevMode ? [{ debugName: "name" }] : []));
    image = input.required(...(ngDevMode ? [{ debugName: "image" }] : []));
    static ɵfac = function ScHostCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScHostCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScHostCardComponent, selectors: [["sc-host-card"]], inputs: { name: [1, "name"], image: [1, "image"] }, decls: 5, vars: 3, consts: [[1, "host-card"], [1, "host-card__portrait"], [3, "src", "alt"]], template: function ScHostCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "article", 0)(1, "div", 1);
            i0.ɵɵdomElement(2, "img", 2);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(3, "h3");
            i0.ɵɵtext(4);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵdomProperty("src", ctx.image(), i0.ɵɵsanitizeUrl)("alt", ctx.name());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.name());
        } }, styles: [".host-card[_ngcontent-%COMP%]{position:relative;border-radius:var(--sc-radius-lg);padding:18px;background:radial-gradient(circle at 50% 18%,rgba(255,193,7,.18),transparent 48%),linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.025));border:1px solid rgba(255,255,255,.11);overflow:hidden}.host-card__portrait[_ngcontent-%COMP%]{aspect-ratio:4/5;border-radius:calc(var(--sc-radius-lg) - 10px);overflow:hidden;background:radial-gradient(circle at 50% 22%,rgba(255,193,7,.22),transparent 42%),linear-gradient(145deg,#191919,#050505);display:grid;place-items:end center}.host-card__portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;filter:contrast(1.05) saturate(.92)}.host-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:18px 0 6px;text-align:center;text-transform:uppercase;font-family:var(--sc-font-heading);letter-spacing:-.04em;font-size:clamp(1.6rem,2.4vw,2.8rem)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScHostCardComponent, [{
        type: Component,
        args: [{ selector: 'sc-host-card', standalone: true, template: `<article class="host-card"><div class="host-card__portrait"><img [src]="image()" [alt]="name()" /></div><h3>{{ name() }}</h3></article>`, styles: [".host-card{position:relative;border-radius:var(--sc-radius-lg);padding:18px;background:radial-gradient(circle at 50% 18%,rgba(255,193,7,.18),transparent 48%),linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.025));border:1px solid rgba(255,255,255,.11);overflow:hidden}.host-card__portrait{aspect-ratio:4/5;border-radius:calc(var(--sc-radius-lg) - 10px);overflow:hidden;background:radial-gradient(circle at 50% 22%,rgba(255,193,7,.22),transparent 42%),linear-gradient(145deg,#191919,#050505);display:grid;place-items:end center}.host-card__portrait img{width:100%;height:100%;object-fit:cover;filter:contrast(1.05) saturate(.92)}.host-card h3{margin:18px 0 6px;text-align:center;text-transform:uppercase;font-family:var(--sc-font-heading);letter-spacing:-.04em;font-size:clamp(1.6rem,2.4vw,2.8rem)}\n"] }]
    }], null, { name: [{ type: i0.Input, args: [{ isSignal: true, alias: "name", required: true }] }], image: [{ type: i0.Input, args: [{ isSignal: true, alias: "image", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScHostCardComponent, { className: "ScHostCardComponent", filePath: "src/app/shared/ui/sc-host-card/sc-host-card.component.ts", lineNumber: 3 }); })();
