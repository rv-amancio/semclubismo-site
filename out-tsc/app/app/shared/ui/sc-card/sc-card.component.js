import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class ScCardComponent {
    featured = input(false, ...(ngDevMode ? [{ debugName: "featured" }] : []));
    static ɵfac = function ScCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScCardComponent, selectors: [["sc-card"]], inputs: { featured: [1, "featured"] }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "sc-card"]], template: function ScCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵdomElementStart(0, "article", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("sc-card--featured", ctx.featured());
        } }, styles: [".sc-card[_ngcontent-%COMP%]{position:relative;overflow:hidden;border-radius:var(--sc-radius-lg);border:1px solid rgba(255,255,255,.11);background:linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.025)),var(--sc-black-800);box-shadow:0 28px 80px rgba(0,0,0,.34)}.sc-card[_ngcontent-%COMP%]::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 78% 10%,rgba(255,193,7,.14),transparent 34%)}.sc-card--featured[_ngcontent-%COMP%]{border-color:rgba(255,193,7,.48);box-shadow:var(--sc-glow-yellow),0 38px 100px rgba(0,0,0,.38)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScCardComponent, [{
        type: Component,
        args: [{ selector: 'sc-card', standalone: true, template: `<article class="sc-card" [class.sc-card--featured]="featured()"><ng-content /></article>`, styles: [".sc-card{position:relative;overflow:hidden;border-radius:var(--sc-radius-lg);border:1px solid rgba(255,255,255,.11);background:linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.025)),var(--sc-black-800);box-shadow:0 28px 80px rgba(0,0,0,.34)}.sc-card::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 78% 10%,rgba(255,193,7,.14),transparent 34%)}.sc-card--featured{border-color:rgba(255,193,7,.48);box-shadow:var(--sc-glow-yellow),0 38px 100px rgba(0,0,0,.38)}\n"] }]
    }], null, { featured: [{ type: i0.Input, args: [{ isSignal: true, alias: "featured", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScCardComponent, { className: "ScCardComponent", filePath: "src/app/shared/ui/sc-card/sc-card.component.ts", lineNumber: 3 }); })();
