import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
function ScLogoComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 2)(1, "strong");
    i0.ɵɵtext(2, "SEM");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "strong");
    i0.ɵɵtext(4, "CLUBISMO");
    i0.ɵɵdomElementEnd()();
} }
export class ScLogoComponent {
    variant = input('full', ...(ngDevMode ? [{ debugName: "variant" }] : []));
    static ɵfac = function ScLogoComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScLogoComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScLogoComponent, selectors: [["sc-logo"]], inputs: { variant: [1, "variant"] }, decls: 4, vars: 3, consts: [[1, "sc-logo"], [1, "sc-logo__mark"], [1, "sc-logo__text"]], template: function ScLogoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "span", 1);
            i0.ɵɵtext(2, "SC");
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(3, ScLogoComponent_Conditional_3_Template, 5, 0, "span", 2);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("sc-logo--mark", ctx.variant() === "mark");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.variant() !== "mark" ? 3 : -1);
        } }, styles: [".sc-logo[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:14px;color:var(--sc-white)}.sc-logo__mark[_ngcontent-%COMP%]{width:58px;height:58px;border:2px solid rgba(255,193,7,.92);border-radius:999px;display:grid;place-items:center;background:radial-gradient(circle,rgba(255,193,7,.24),transparent 68%),linear-gradient(145deg,#161616,#050505);box-shadow:var(--sc-glow-yellow);color:var(--sc-yellow-500);font-family:var(--sc-font-heading);font-weight:950;letter-spacing:-.08em}.sc-logo__text[_ngcontent-%COMP%]{display:grid;line-height:.82;font-family:var(--sc-font-display);letter-spacing:-.05em;font-size:1.25rem}.sc-logo__text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:last-child{color:var(--sc-yellow-500)}.sc-logo--mark[_ngcontent-%COMP%]   .sc-logo__mark[_ngcontent-%COMP%]{width:74px;height:74px;font-size:1.55rem}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScLogoComponent, [{
        type: Component,
        args: [{ selector: 'sc-logo', standalone: true, template: `<div class="sc-logo" [class.sc-logo--mark]="variant() === 'mark'"><span class="sc-logo__mark">SC</span>@if (variant() !== 'mark') {<span class="sc-logo__text"><strong>SEM</strong><strong>CLUBISMO</strong></span>}</div>`, styles: [".sc-logo{display:inline-flex;align-items:center;gap:14px;color:var(--sc-white)}.sc-logo__mark{width:58px;height:58px;border:2px solid rgba(255,193,7,.92);border-radius:999px;display:grid;place-items:center;background:radial-gradient(circle,rgba(255,193,7,.24),transparent 68%),linear-gradient(145deg,#161616,#050505);box-shadow:var(--sc-glow-yellow);color:var(--sc-yellow-500);font-family:var(--sc-font-heading);font-weight:950;letter-spacing:-.08em}.sc-logo__text{display:grid;line-height:.82;font-family:var(--sc-font-display);letter-spacing:-.05em;font-size:1.25rem}.sc-logo__text strong:last-child{color:var(--sc-yellow-500)}.sc-logo--mark .sc-logo__mark{width:74px;height:74px;font-size:1.55rem}\n"] }]
    }], null, { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScLogoComponent, { className: "ScLogoComponent", filePath: "src/app/shared/ui/sc-logo/sc-logo.component.ts", lineNumber: 3 }); })();
