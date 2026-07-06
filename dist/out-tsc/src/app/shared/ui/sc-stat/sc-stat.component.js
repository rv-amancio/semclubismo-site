import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ScStatComponent {
    value = input.required(...(ngDevMode ? [{ debugName: "value" }] : []));
    label = input.required(...(ngDevMode ? [{ debugName: "label" }] : []));
    static ɵfac = function ScStatComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScStatComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScStatComponent, selectors: [["sc-stat"]], inputs: { value: [1, "value"], label: [1, "label"] }, decls: 5, vars: 2, consts: [[1, "sc-stat"]], template: function ScStatComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "strong");
            i0.ɵɵtext(2);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.value());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label());
        } }, styles: [".sc-stat[_ngcontent-%COMP%]{min-height:126px;border-radius:var(--sc-radius-md);border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.045);display:grid;place-items:center;text-align:center;padding:20px}.sc-stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--sc-yellow-500);font-size:clamp(2rem,4vw,4rem);line-height:.9;font-family:var(--sc-font-display)}.sc-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--sc-gray-300);text-transform:uppercase;font-weight:800;letter-spacing:.08em;font-size:.78rem}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScStatComponent, [{
        type: Component,
        args: [{ selector: 'sc-stat', standalone: true, template: `<div class="sc-stat"><strong>{{ value() }}</strong><span>{{ label() }}</span></div>`, styles: [".sc-stat{min-height:126px;border-radius:var(--sc-radius-md);border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.045);display:grid;place-items:center;text-align:center;padding:20px}.sc-stat strong{color:var(--sc-yellow-500);font-size:clamp(2rem,4vw,4rem);line-height:.9;font-family:var(--sc-font-display)}.sc-stat span{color:var(--sc-gray-300);text-transform:uppercase;font-weight:800;letter-spacing:.08em;font-size:.78rem}\n"] }]
    }], null, { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: true }] }], label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScStatComponent, { className: "ScStatComponent", filePath: "src/app/shared/ui/sc-stat/sc-stat.component.ts", lineNumber: 3 }); })();
