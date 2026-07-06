import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class ScButtonComponent {
    variant = input('primary', ...(ngDevMode ? [{ debugName: "variant" }] : []));
    href = input('#', ...(ngDevMode ? [{ debugName: "href" }] : []));
    static ɵfac = function ScButtonComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScButtonComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScButtonComponent, selectors: [["sc-button"]], inputs: { variant: [1, "variant"], href: [1, "href"] }, ngContentSelectors: _c0, decls: 2, vars: 3, consts: [[1, "sc-button", 3, "href"]], template: function ScButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵdomElementStart(0, "a", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("sc-button--secondary", ctx.variant() === "secondary");
            i0.ɵɵdomProperty("href", ctx.href(), i0.ɵɵsanitizeUrl);
        } }, styles: [".sc-button[_ngcontent-%COMP%]{min-height:52px;padding:0 22px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:var(--sc-yellow-500);color:var(--sc-black-900);font-weight:950;text-transform:uppercase;letter-spacing:.04em;box-shadow:var(--sc-glow-yellow);transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease}.sc-button[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:var(--sc-glow-yellow-strong)}.sc-button--secondary[_ngcontent-%COMP%]{background:rgba(255,255,255,.06);color:var(--sc-white);border:1px solid rgba(255,255,255,.16);box-shadow:none}.sc-button--secondary[_ngcontent-%COMP%]:hover{border-color:rgba(255,193,7,.7);color:var(--sc-yellow-500)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScButtonComponent, [{
        type: Component,
        args: [{ selector: 'sc-button', standalone: true, template: `<a class="sc-button" [class.sc-button--secondary]="variant() === 'secondary'" [href]="href()"><ng-content /></a>`, styles: [".sc-button{min-height:52px;padding:0 22px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:var(--sc-yellow-500);color:var(--sc-black-900);font-weight:950;text-transform:uppercase;letter-spacing:.04em;box-shadow:var(--sc-glow-yellow);transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease}.sc-button:hover{transform:translateY(-2px);box-shadow:var(--sc-glow-yellow-strong)}.sc-button--secondary{background:rgba(255,255,255,.06);color:var(--sc-white);border:1px solid rgba(255,255,255,.16);box-shadow:none}.sc-button--secondary:hover{border-color:rgba(255,193,7,.7);color:var(--sc-yellow-500)}\n"] }]
    }], null, { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], href: [{ type: i0.Input, args: [{ isSignal: true, alias: "href", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScButtonComponent, { className: "ScButtonComponent", filePath: "src/app/shared/ui/sc-button/sc-button.component.ts", lineNumber: 3 }); })();
