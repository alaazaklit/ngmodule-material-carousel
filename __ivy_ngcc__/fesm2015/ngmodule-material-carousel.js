import { Component, Input, TemplateRef, ViewChild, ContentChildren, EventEmitter, HostListener, Inject, Output, PLATFORM_ID, Renderer2, NgModule } from '@angular/core';
import { DomSanitizer, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { animate, style, AnimationBuilder } from '@angular/animations';
import { ListKeyManager } from '@angular/cdk/a11y';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { interval, BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@angular/animations';
import * as ɵngcc4 from '@angular/material/button';
import * as ɵngcc5 from '@angular/material/icon';

function MatCarouselSlideComponent_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("background-color", ctx_r1.overlayColor);
} }
function MatCarouselSlideComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, MatCarouselSlideComponent_ng_template_0_div_3_Template, 1, 2, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-image", ctx_r0.image);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.hideOverlay);
} }
const _c0 = ["*"];
const _c1 = ["carouselContainer"];
const _c2 = ["carouselList"];
function MatCarouselComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 7, 8);
    ɵngcc0.ɵɵlistener("panleft", function MatCarouselComponent_li_4_Template_li_panleft_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const _r7 = ɵngcc0.ɵɵreference(1); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r8.onPan($event, _r7)); })("panright", function MatCarouselComponent_li_4_Template_li_panright_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const _r7 = ɵngcc0.ɵɵreference(1); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r10.onPan($event, _r7)); })("panend", function MatCarouselComponent_li_4_Template_li_panend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const _r7 = ɵngcc0.ɵɵreference(1); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r11.onPanEnd($event, _r7)); })("pancancel", function MatCarouselComponent_li_4_Template_li_pancancel_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const _r7 = ɵngcc0.ɵɵreference(1); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r12.onPanEnd($event, _r7)); });
    ɵngcc0.ɵɵelementContainer(2, 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("padding-bottom", ctx_r2.maintainAspectRatio && ctx_r2.proportion ? ctx_r2.proportion + "%" : "0px")("height", !ctx_r2.maintainAspectRatio && ctx_r2.slideHeight ? ctx_r2.slideHeight : "0px");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", slide_r6.templateRef);
} }
function MatCarouselComponent_button_5_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-icon", 13);
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("svgIcon", ctx_r13.svgIconOverrides.arrowBack);
} }
function MatCarouselComponent_button_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon");
    ɵngcc0.ɵɵtext(1, "arrow_back");
    ɵngcc0.ɵɵelementEnd();
} }
function MatCarouselComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵlistener("click", function MatCarouselComponent_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r16.previous()); });
    ɵngcc0.ɵɵtemplate(1, MatCarouselComponent_button_5_mat_icon_1_Template, 1, 1, "mat-icon", 11);
    ɵngcc0.ɵɵtemplate(2, MatCarouselComponent_button_5_ng_template_2_Template, 2, 0, "ng-template", null, 12, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r14 = ɵngcc0.ɵɵreference(3);
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("color", ctx_r3.color)("disabled", !ctx_r3.loop && ctx_r3.currentIndex == 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.svgIconOverrides == null ? null : ctx_r3.svgIconOverrides.arrowBack)("ngIfElse", _r14);
} }
function MatCarouselComponent_button_6_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-icon", 13);
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("svgIcon", ctx_r18.svgIconOverrides.arrowForward);
} }
function MatCarouselComponent_button_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon");
    ɵngcc0.ɵɵtext(1, "arrow_forward");
    ɵngcc0.ɵɵelementEnd();
} }
function MatCarouselComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵlistener("click", function MatCarouselComponent_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r21.next()); });
    ɵngcc0.ɵɵtemplate(1, MatCarouselComponent_button_6_mat_icon_1_Template, 1, 1, "mat-icon", 11);
    ɵngcc0.ɵɵtemplate(2, MatCarouselComponent_button_6_ng_template_2_Template, 2, 0, "ng-template", null, 14, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r19 = ɵngcc0.ɵɵreference(3);
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("color", ctx_r4.color)("disabled", !ctx_r4.loop && ctx_r4.currentIndex == ctx_r4.slidesList.length - 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.svgIconOverrides == null ? null : ctx_r4.svgIconOverrides.arrowForward)("ngIfElse", _r19);
} }
function MatCarouselComponent_div_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function MatCarouselComponent_div_7_button_1_Template_button_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r27); const i_r25 = restoredCtx.index; const ctx_r26 = ɵngcc0.ɵɵnextContext(2); return ɵngcc0.ɵɵresetView(ctx_r26.slideTo(i_r25)); })("focus", function MatCarouselComponent_div_7_button_1_Template_button_focus_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); ɵngcc0.ɵɵnextContext(2); const _r0 = ɵngcc0.ɵɵreference(1); return ɵngcc0.ɵɵresetView(_r0.focus()); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r23 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("color", ctx_r23.color)("disabled", i_r25 == ctx_r23.currentIndex);
} }
function MatCarouselComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵtemplate(1, MatCarouselComponent_div_7_button_1_Template, 1, 2, "button", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("flex-direction", ctx_r5.orientation === "rtl" ? "row-reverse" : "row");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.slidesList);
} }
class MatCarouselSlideComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.overlayColor = '#00000040';
        this.hideOverlay = false;
        this.disabled = false; // implements ListKeyManagerOption
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.image) {
            this.image = this.sanitizer.bypassSecurityTrustStyle(`url("${this.image}")`);
        }
    }
}
MatCarouselSlideComponent.ɵfac = function MatCarouselSlideComponent_Factory(t) { return new (t || MatCarouselSlideComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
MatCarouselSlideComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: MatCarouselSlideComponent, selectors: [["mat-carousel-slide"]], viewQuery: function MatCarouselSlideComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, inputs: { overlayColor: "overlayColor", hideOverlay: "hideOverlay", disabled: "disabled", image: "image" }, ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "carousel-slide"], [1, "carousel-slide-content"], ["class", "carousel-slide-overlay", 3, "background-color", 4, "ngIf"], [1, "carousel-slide-overlay"]], template: function MatCarouselSlideComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, MatCarouselSlideComponent_ng_template_0_Template, 4, 3, "ng-template");
    } }, dependencies: [ɵngcc2.NgIf], styles: [".carousel-slide[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:auto;background-size:cover;background-repeat:no-repeat;background-position:center}.carousel-slide-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:auto}.carousel-slide-content[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:1}"] });
/** @nocollapse */
MatCarouselSlideComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
MatCarouselSlideComponent.propDecorators = {
    image: [{ type: Input }],
    overlayColor: [{ type: Input }],
    hideOverlay: [{ type: Input }],
    disabled: [{ type: Input }],
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatCarouselSlideComponent, [{
        type: Component,
        args: [{ selector: 'mat-carousel-slide', template: "<ng-template>\n  <div class=\"carousel-slide\" [style.background-image]=\"image\">\n    <div class=\"carousel-slide-content\"><ng-content></ng-content></div>\n    <div\n      *ngIf=\"!hideOverlay\"\n      class=\"carousel-slide-overlay\"\n      [style.background-color]=\"overlayColor\"\n    ></div>\n  </div>\n</ng-template>\n", styles: [".carousel-slide{width:100%;height:100%;position:absolute;z-index:auto;background-size:cover;background-repeat:no-repeat;background-position:center}.carousel-slide-overlay{width:100%;height:100%;position:absolute;z-index:auto}.carousel-slide-content{width:100%;height:100%;position:absolute;z-index:1}"] }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }]; }, { overlayColor: [{
            type: Input
        }], hideOverlay: [{
            type: Input
        }], disabled: [{
            type: Input
        }], image: [{
            type: Input
        }], templateRef: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Direction = {
    Left: 0,
    Right: 1,
    Index: 2,
};
Direction[Direction.Left] = 'Left';
Direction[Direction.Right] = 'Right';
Direction[Direction.Index] = 'Index';
class MatCarouselComponent {
    /**
     * @param {?} animationBuilder
     * @param {?} renderer
     * @param {?} platformId
     */
    constructor(animationBuilder, renderer, platformId) {
        this.animationBuilder = animationBuilder;
        this.renderer = renderer;
        this.platformId = platformId;
        this.timings = '250ms ease-in';
        this.hideArrows = true;
        this.hideIndicators = true;
        this.color = 'accent';
        this.maintainAspectRatio = true;
        this.proportion = 25;
        this.slideHeight = '100%';
        this.useKeyboard = false;
        this.useMouseWheel = false;
        this.change = new EventEmitter();
        this._autoplay = true;
        this.autoplay$ = new Subject();
        this.interval$ = new BehaviorSubject(5000);
        this.slides$ = new BehaviorSubject(null);
        this._maxWidth = 'auto';
        this.maxWidth$ = new Subject();
        this._loop = true;
        this.loop$ = new Subject();
        this._orientation = 'ltr';
        this.orientation$ = new Subject();
        this.timerStop$ = new Subject();
        this.destroy$ = new Subject();
        this.playing = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoplay(value) {
        this.autoplay$.next(value);
        this._autoplay = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this.interval$.next(value);
    }
    /**
     * @return {?}
     */
    get loop() {
        return this._loop;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loop(value) {
        this.loop$.next(value);
        this._loop = value;
    }
    /**
     * @return {?}
     */
    get maxWidth() {
        return this._maxWidth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxWidth(value) {
        this._maxWidth = value;
        this.maxWidth$.next();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set slides(value) {
        this.slides$.next(value);
    }
    /**
     * @return {?}
     */
    get orientation() {
        return this._orientation;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set orientation(value) {
        this.orientation$.next(value);
        this._orientation = value;
    }
    /**
     * @return {?}
     */
    get currentIndex() {
        if (this.listKeyManager) {
            return this.listKeyManager.activeItemIndex;
        }
        return 0;
    }
    /**
     * @return {?}
     */
    get currentSlide() {
        if (this.listKeyManager) {
            return this.listKeyManager.activeItem;
        }
        return null;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.listKeyManager = new ListKeyManager(this.slidesList)
            .withVerticalOrientation(false)
            .withHorizontalOrientation(this._orientation)
            .withWrap(this._loop);
        this.listKeyManager.updateActiveItem(0);
        this.listKeyManager.change
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.playAnimation());
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.autoplay$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            this.stopTimer();
            this.startTimer(value);
        });
        this.interval$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            this.stopTimer();
            this.resetTimer(value);
            this.startTimer(this._autoplay);
        });
        this.maxWidth$
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.slideTo(0));
        this.loop$
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => this.listKeyManager.withWrap(value));
        this.orientation$
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => this.listKeyManager.withHorizontalOrientation(value));
        this.slides$
            .pipe(takeUntil(this.destroy$), filter(value => value && value < this.slidesList.length))
            .subscribe(value => this.resetSlides(value));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    next() {
        this.goto(Direction.Right);
    }
    /**
     * @return {?}
     */
    previous() {
        this.goto(Direction.Left);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    slideTo(index) {
        this.goto(Direction.Index, index);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        if (this.useKeyboard && !this.playing) {
            this.listKeyManager.onKeydown(event);
        }
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        this.stopTimer();
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        this.startTimer(this._autoplay);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheel(event) {
        if (this.useMouseWheel) {
            event.preventDefault(); // prevent window to scroll
            // prevent window to scroll
            /** @type {?} */
            const Δ = Math.sign(event.wheelDelta);
            if (Δ < 0) {
                this.next();
            }
            else if (Δ > 0) {
                this.previous();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        // Reset carousel when window is resized
        // in order to avoid major glitches.
        this.slideTo(0);
    }
    /**
     * @param {?} event
     * @param {?} slideElem
     * @return {?}
     */
    onPan(event, slideElem) {
        // https://github.com/angular/angular/issues/10541#issuecomment-346539242
        // if y velocity is greater, it's a panup/pandown, so ignore.
        if (Math.abs(event.velocityY) > Math.abs(event.velocityX)) {
            return;
        }
        /** @type {?} */
        let Δx = event.deltaX;
        if (this.isOutOfBounds()) {
            Δx *= 0.2; // decelerate movement;
        }
        this.renderer.setStyle(slideElem, 'cursor', 'grabbing');
        this.renderer.setStyle(this.carouselList.nativeElement, 'transform', this.getTranslation(this.getOffset() + Δx));
    }
    /**
     * @param {?} event
     * @param {?} slideElem
     * @return {?}
     */
    onPanEnd(event, slideElem) {
        this.renderer.removeStyle(slideElem, 'cursor');
        if (!this.isOutOfBounds() &&
            Math.abs(event.deltaX) > this.getWidth() * 0.25) {
            if (event.deltaX <= 0) {
                this.next();
                return;
            }
            this.previous();
            return;
        }
        this.playAnimation(); // slide back, don't change current index
    }
    /**
     * @private
     * @return {?}
     */
    isOutOfBounds() {
        /** @type {?} */
        const sign = this.orientation === 'rtl' ? -1 : 1;
        /** @type {?} */
        const left = sign *
            (this.carouselList.nativeElement.getBoundingClientRect().left -
                this.carouselList.nativeElement.offsetParent.getBoundingClientRect()
                    .left);
        /** @type {?} */
        const lastIndex = this.slidesList.length - 1;
        /** @type {?} */
        const width = -this.getWidth() * lastIndex;
        return ((this.listKeyManager.activeItemIndex === 0 && left >= 0) ||
            (this.listKeyManager.activeItemIndex === lastIndex && left <= width));
    }
    /**
     * @private
     * @return {?}
     */
    isVisible() {
        if (!isPlatformBrowser(this.platformId)) {
            return false;
        }
        /** @type {?} */
        const elem = this.carouselContainer.nativeElement;
        /** @type {?} */
        const docViewTop = window.pageYOffset;
        /** @type {?} */
        const docViewBottom = docViewTop + window.innerHeight;
        /** @type {?} */
        const elemOffset = elem.getBoundingClientRect();
        /** @type {?} */
        const elemTop = docViewTop + elemOffset.top;
        /** @type {?} */
        const elemBottom = elemTop + elemOffset.height;
        return elemBottom <= docViewBottom || elemTop >= docViewTop;
    }
    /**
     * @private
     * @return {?}
     */
    getOffset() {
        /** @type {?} */
        const offset = this.listKeyManager.activeItemIndex * this.getWidth();
        /** @type {?} */
        const sign = this.orientation === 'rtl' ? 1 : -1;
        return sign * offset;
    }
    /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    getTranslation(offset) {
        return `translateX(${offset}px)`;
    }
    /**
     * @private
     * @return {?}
     */
    getWidth() {
        return this.carouselContainer.nativeElement.clientWidth;
    }
    /**
     * @private
     * @param {?} direction
     * @param {?=} index
     * @return {?}
     */
    goto(direction, index) {
        if (!this.playing) {
            /** @type {?} */
            const rtl = this.orientation === 'rtl';
            switch (direction) {
                case Direction.Left:
                    return rtl
                        ? this.listKeyManager.setNextItemActive()
                        : this.listKeyManager.setPreviousItemActive();
                case Direction.Right:
                    return rtl
                        ? this.listKeyManager.setPreviousItemActive()
                        : this.listKeyManager.setNextItemActive();
                case Direction.Index:
                    return this.listKeyManager.setActiveItem(index);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    playAnimation() {
        /** @type {?} */
        const translation = this.getTranslation(this.getOffset());
        /** @type {?} */
        const factory = this.animationBuilder.build(animate(this.timings, style({ transform: translation })));
        /** @type {?} */
        const animation = factory.create(this.carouselList.nativeElement);
        animation.onStart(() => (this.playing = true));
        animation.onDone(() => {
            this.change.emit(this.currentIndex);
            this.playing = false;
            this.renderer.setStyle(this.carouselList.nativeElement, 'transform', translation);
            animation.destroy();
        });
        animation.play();
    }
    /**
     * @private
     * @param {?} slides
     * @return {?}
     */
    resetSlides(slides) {
        this.slidesList.reset(this.slidesList.toArray().slice(0, slides));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    resetTimer(value) {
        this.timer$ = interval(value);
    }
    /**
     * @private
     * @param {?} autoplay
     * @return {?}
     */
    startTimer(autoplay) {
        if (!autoplay) {
            return;
        }
        this.timer$
            .pipe(takeUntil(this.timerStop$), takeUntil(this.destroy$), filter(() => this.isVisible()))
            .subscribe(() => {
            this.listKeyManager.withWrap(true).setNextItemActive();
            this.listKeyManager.withWrap(this.loop);
        });
    }
    /**
     * @private
     * @return {?}
     */
    stopTimer() {
        this.timerStop$.next();
    }
}
MatCarouselComponent.ɵfac = function MatCarouselComponent_Factory(t) { return new (t || MatCarouselComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc3.AnimationBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
MatCarouselComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: MatCarouselComponent, selectors: [["mat-carousel"]], contentQueries: function MatCarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatCarouselSlideComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slidesList = _t);
    } }, viewQuery: function MatCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, 5);
        ɵngcc0.ɵɵviewQuery(_c2, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.carouselContainer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.carouselList = _t.first);
    } }, hostBindings: function MatCarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keyup", function MatCarouselComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); })("mouseenter", function MatCarouselComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MatCarouselComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mousewheel", function MatCarouselComponent_mousewheel_HostBindingHandler($event) { return ctx.onMouseWheel($event); })("resize", function MatCarouselComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, inputs: { timings: "timings", hideArrows: "hideArrows", hideIndicators: "hideIndicators", color: "color", maintainAspectRatio: "maintainAspectRatio", proportion: "proportion", slideHeight: "slideHeight", useKeyboard: "useKeyboard", useMouseWheel: "useMouseWheel", autoplay: "autoplay", interval: "interval", loop: "loop", maxWidth: "maxWidth", slides: "slides", orientation: "orientation", svgIconOverrides: "svgIconOverrides" }, outputs: { change: "change" }, decls: 8, vars: 12, consts: [["tabindex", "0", 1, "carousel"], ["carouselContainer", ""], ["role", "listbox", 1, "carousel-list"], ["carouselList", ""], ["class", "carousel-slide", "role", "option", 3, "padding-bottom", "height", "panleft", "panright", "panend", "pancancel", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", 3, "color", "disabled", "click", 4, "ngIf"], ["class", "carousel-indicators", "tabindex", "-1", 3, "flex-direction", 4, "ngIf"], ["role", "option", 1, "carousel-slide", 3, "panleft", "panright", "panend", "pancancel"], ["carouselSlide", ""], [3, "ngTemplateOutlet"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", 3, "color", "disabled", "click"], [3, "svgIcon", 4, "ngIf", "ngIfElse"], ["defaultArrowBack", ""], [3, "svgIcon"], ["defaultArrowForward", ""], ["tabindex", "-1", 1, "carousel-indicators"], ["type", "button", "tabindex", "-1", "mat-mini-fab", "", 3, "color", "disabled", "click", "focus", 4, "ngFor", "ngForOf"], ["type", "button", "tabindex", "-1", "mat-mini-fab", "", 3, "color", "disabled", "click", "focus"]], template: function MatCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1)(2, "ul", 2, 3);
        ɵngcc0.ɵɵtemplate(4, MatCarouselComponent_li_4_Template, 3, 5, "li", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, MatCarouselComponent_button_5_Template, 4, 4, "button", 5);
        ɵngcc0.ɵɵtemplate(6, MatCarouselComponent_button_6_Template, 4, 4, "button", 5);
        ɵngcc0.ɵɵtemplate(7, MatCarouselComponent_div_7_Template, 2, 3, "div", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("max-width", ctx.maxWidth)("height", !ctx.maintainAspectRatio ? "100%" : "auto");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵstyleProp("flex-direction", ctx.orientation === "rtl" ? "row-reverse" : "row")("height", !ctx.maintainAspectRatio ? "100%" : "auto");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.slidesList);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hideArrows);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hideArrows);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hideIndicators);
    } }, dependencies: [ɵngcc2.NgForOf, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet, ɵngcc4.MatIconButton, ɵngcc4.MatMiniFabButton, ɵngcc5.MatIcon], styles: [".carousel[_ngcontent-%COMP%]{width:100%;position:relative;overflow:hidden;outline:0}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{position:absolute;z-index:1;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-of-type{left:30px}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:last-of-type{right:30px}.carousel-list[_ngcontent-%COMP%]{width:100%;margin:0;padding:0;list-style:none;display:flex;position:relative}.carousel-slide[_ngcontent-%COMP%]{width:100%;height:0;display:flex;flex-shrink:0;position:relative}.carousel-slide[_ngcontent-%COMP%]:hover{cursor:-webkit-grab;cursor:grab}.carousel-indicators[_ngcontent-%COMP%]{display:flex;position:absolute;bottom:15px;z-index:1;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);outline:0}.carousel-indicators[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:10px;height:10px;margin:7.5px}"] });
/** @nocollapse */
MatCarouselComponent.ctorParameters = () => [
    { type: AnimationBuilder },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MatCarouselComponent.propDecorators = {
    timings: [{ type: Input }],
    svgIconOverrides: [{ type: Input }],
    autoplay: [{ type: Input }],
    interval: [{ type: Input }],
    loop: [{ type: Input }],
    hideArrows: [{ type: Input }],
    hideIndicators: [{ type: Input }],
    color: [{ type: Input }],
    maxWidth: [{ type: Input }],
    maintainAspectRatio: [{ type: Input }],
    proportion: [{ type: Input }],
    slideHeight: [{ type: Input }],
    slides: [{ type: Input }],
    useKeyboard: [{ type: Input }],
    useMouseWheel: [{ type: Input }],
    orientation: [{ type: Input }],
    change: [{ type: Output }],
    slidesList: [{ type: ContentChildren, args: [MatCarouselSlideComponent,] }],
    carouselContainer: [{ type: ViewChild, args: ['carouselContainer',] }],
    carouselList: [{ type: ViewChild, args: ['carouselList',] }],
    onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }],
    onMouseWheel: [{ type: HostListener, args: ['mousewheel', ['$event'],] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatCarouselComponent, [{
        type: Component,
        args: [{ selector: 'mat-carousel', template: "<div\n  #carouselContainer\n  class=\"carousel\"\n  tabindex=\"0\"\n  [style.max-width]=\"maxWidth\"\n  [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\n>\n  <ul\n    #carouselList\n    class=\"carousel-list\"\n    role=\"listbox\"\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\n    [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\n  >\n    <li\n      #carouselSlide\n      *ngFor=\"let slide of slidesList\"\n      class=\"carousel-slide\"\n      role=\"option\"\n      [style.padding-bottom]=\"maintainAspectRatio && proportion ? proportion + '%': '0px'\"\n      [style.height]=\"!maintainAspectRatio && slideHeight ? slideHeight : '0px'\"\n      (panleft)=\"onPan($event, carouselSlide)\"\n      (panright)=\"onPan($event, carouselSlide)\"\n      (panend)=\"onPanEnd($event, carouselSlide)\"\n      (pancancel)=\"onPanEnd($event, carouselSlide)\"\n    >\n      <ng-container [ngTemplateOutlet]=\"slide.templateRef\"></ng-container>\n    </li>\n  </ul>\n\n  <button\n    *ngIf=\"!hideArrows\"\n    mat-icon-button\n    type=\"button\"\n    tabindex=\"-1\"\n    [color]=\"color\"\n    [disabled]=\"!loop && currentIndex == 0\"\n    (click)=\"previous()\"\n  >\n    <mat-icon\n      *ngIf=\"svgIconOverrides?.arrowBack; else: defaultArrowBack\"\n      [svgIcon]=\"svgIconOverrides.arrowBack\"\n    ></mat-icon>\n    <ng-template #defaultArrowBack>\n      <mat-icon>arrow_back</mat-icon>\n    </ng-template>\n  </button>\n  <button\n    *ngIf=\"!hideArrows\"\n    mat-icon-button\n    type=\"button\"\n    tabindex=\"-1\"\n    [color]=\"color\"\n    [disabled]=\"!loop && currentIndex == slidesList.length - 1\"\n    (click)=\"next()\"\n  >\n    <mat-icon\n      *ngIf=\"svgIconOverrides?.arrowForward; else: defaultArrowForward\"\n      [svgIcon]=\"svgIconOverrides.arrowForward\"\n    ></mat-icon>\n    <ng-template #defaultArrowForward>\n      <mat-icon>arrow_forward</mat-icon>\n    </ng-template>\n  </button>\n\n  <div\n    *ngIf=\"!hideIndicators\"\n    class=\"carousel-indicators\"\n    tabindex=\"-1\"\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\n  >\n    <button\n      *ngFor=\"let slide of slidesList; let i = index\"\n      type=\"button\"\n      tabindex=\"-1\"\n      mat-mini-fab\n      [color]=\"color\"\n      [disabled]=\"i == currentIndex\"\n      (click)=\"slideTo(i)\"\n      (focus)=\"carouselContainer.focus()\"\n    ></button>\n  </div>\n</div>\n", styles: [".carousel{width:100%;position:relative;overflow:hidden;outline:0}.carousel>button{position:absolute;z-index:1;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.carousel>button:first-of-type{left:30px}.carousel>button:last-of-type{right:30px}.carousel-list{width:100%;margin:0;padding:0;list-style:none;display:flex;position:relative}.carousel-slide{width:100%;height:0;display:flex;flex-shrink:0;position:relative}.carousel-slide:hover{cursor:-webkit-grab;cursor:grab}.carousel-indicators{display:flex;position:absolute;bottom:15px;z-index:1;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);outline:0}.carousel-indicators>button{width:10px;height:10px;margin:7.5px}"] }]
    }], function () { return [{ type: ɵngcc3.AnimationBuilder }, { type: ɵngcc0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { timings: [{
            type: Input
        }], hideArrows: [{
            type: Input
        }], hideIndicators: [{
            type: Input
        }], color: [{
            type: Input
        }], maintainAspectRatio: [{
            type: Input
        }], proportion: [{
            type: Input
        }], slideHeight: [{
            type: Input
        }], useKeyboard: [{
            type: Input
        }], useMouseWheel: [{
            type: Input
        }], change: [{
            type: Output
        }], autoplay: [{
            type: Input
        }], interval: [{
            type: Input
        }], loop: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], slides: [{
            type: Input
        }], orientation: [{
            type: Input
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp: [{
            type: HostListener,
            args: ['keyup', ['$event']]
        }], 
    /**
     * @return {?}
     */
    onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], 
    /**
     * @return {?}
     */
    onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheel: [{
            type: HostListener,
            args: ['mousewheel', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }], svgIconOverrides: [{
            type: Input
        }], slidesList: [{
            type: ContentChildren,
            args: [MatCarouselSlideComponent]
        }], carouselContainer: [{
            type: ViewChild,
            args: ['carouselContainer']
        }], carouselList: [{
            type: ViewChild,
            args: ['carouselList']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// https://github.com/angular/angular/issues/10541#issuecomment-300761387
class MatCarouselHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}
class MatCarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MatCarouselModule,
            providers: [
                { provide: HAMMER_GESTURE_CONFIG, useClass: MatCarouselHammerConfig }
            ]
        };
    }
}
MatCarouselModule.ɵfac = function MatCarouselModule_Factory(t) { return new (t || MatCarouselModule)(); };
MatCarouselModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: MatCarouselModule });
MatCarouselModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule, MatButtonModule, MatIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatCarouselModule, [{
        type: NgModule,
        args: [{
                declarations: [MatCarouselComponent, MatCarouselSlideComponent],
                imports: [CommonModule, MatButtonModule, MatIconModule],
                exports: [MatCarouselComponent, MatCarouselSlideComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatCarouselModule, { declarations: function () { return [MatCarouselComponent, MatCarouselSlideComponent]; }, imports: function () { return [CommonModule, MatButtonModule, MatIconModule]; }, exports: function () { return [MatCarouselComponent, MatCarouselSlideComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatCarouselComponent, MatCarouselHammerConfig, MatCarouselModule, MatCarouselSlideComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdtb2R1bGUtbWF0ZXJpYWwtY2Fyb3VzZWwuanMiLCJzb3VyY2VzIjpbIkBuZ21vZHVsZS9tYXRlcmlhbC1jYXJvdXNlbC9saWIvY2Fyb3VzZWwtc2xpZGUvY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50LnRzIiwiQG5nbW9kdWxlL21hdGVyaWFsLWNhcm91c2VsL2xpYi9jYXJvdXNlbC5jb21wb25lbnQudHMiLCJAbmdtb2R1bGUvbWF0ZXJpYWwtY2Fyb3VzZWwvbGliL2Nhcm91c2VsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE1BZ0JhLHlCQUF5QjtBQUNwQztBQUFRO0FBQTRCO0FBQVEsSUFRNUMsWUFBbUIsU0FBdUI7QUFDNUMsUUFEcUIsY0FBUyxHQUFULFNBQVMsQ0FBYztBQUFDLFFBTjNCLGlCQUFZLEdBQUcsV0FBVyxDQUFDO0FBQzdDLFFBQWtCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0FBQ3RDLFFBQWtCLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDbkMsS0FJRztBQUNIO0FBQ087QUFBbUI7QUFDcEIsSUFERyxRQUFRO0FBQUssUUFDbEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7QUFDbkYsU0FBSztBQUNMLEtBQUc7QUFDSDtxREF0QkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxvQkFBb0Isa0JBQzlCOzs7O2VBQThDOzs2UEFFL0M7OzsyWkFDRztBQUFDO0FBQW1CO0FBQ1ksWUFWM0IsWUFBWTtBQUFHO0FBQUc7QUFF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QUEsQUF1QkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBV0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFZQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQTBCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU1BLEFBMUdBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU1BLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBTUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFLQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFLQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQXNDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBN1dBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBckNBLEFBQUEsQUFpQkEsQUFBQSxBQW1JQSxBQUFBLEFBQUEsQUFBQSxBQTVHQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFNQSxBQUFBLEFBUUEsQUFBQSxBQU1BLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUtBLEFBQUEsQUFNQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBS0EsQUFBQSxBQUNBLEFBQUEsQUFLQSxBQUFBLEFBTUEsQUFBQSxBQWtCQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUEyRkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUFLQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBY0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQ25QQSxBQWNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFNQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQWJBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RLZXlNYW5hZ2VyT3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgTWF0Q2Fyb3VzZWxTbGlkZSB9IGZyb20gJy4vY2Fyb3VzZWwtc2xpZGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtY2Fyb3VzZWwtc2xpZGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC1zbGlkZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcm91c2VsU2xpZGVDb21wb25lbnRcbiAgaW1wbGVtZW50cyBMaXN0S2V5TWFuYWdlck9wdGlvbiwgTWF0Q2Fyb3VzZWxTbGlkZSwgT25Jbml0IHtcbiAgQElucHV0KCkgcHVibGljIGltYWdlOiBTYWZlU3R5bGU7XG4gIEBJbnB1dCgpIHB1YmxpYyBvdmVybGF5Q29sb3IgPSAnIzAwMDAwMDQwJztcbiAgQElucHV0KCkgcHVibGljIGhpZGVPdmVybGF5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlOyAvLyBpbXBsZW1lbnRzIExpc3RLZXlNYW5hZ2VyT3B0aW9uXG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgdXJsKFwiJHt0aGlzLmltYWdlfVwiKWApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIEFuaW1hdGlvbkJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IExpc3RLZXlNYW5hZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IGludGVydmFsLCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNYXRDYXJvdXNlbCwgT3JpZW50YXRpb24sIFN2Z0ljb25PdmVycmlkZXMgfSBmcm9tICcuL2Nhcm91c2VsJztcbmltcG9ydCB7IE1hdENhcm91c2VsU2xpZGVDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLXNsaWRlL2Nhcm91c2VsLXNsaWRlLmNvbXBvbmVudCc7XG5cbmVudW0gRGlyZWN0aW9uIHtcbiAgTGVmdCxcbiAgUmlnaHQsXG4gIEluZGV4XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2Fyb3VzZWxDb21wb25lbnRcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBNYXRDYXJvdXNlbCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIHRpbWluZ3MgPSAnMjUwbXMgZWFzZS1pbic7XG4gIEBJbnB1dCgpIHB1YmxpYyBzdmdJY29uT3ZlcnJpZGVzOiBTdmdJY29uT3ZlcnJpZGVzO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYXV0b3BsYXkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmF1dG9wbGF5JC5uZXh0KHZhbHVlKTtcbiAgICB0aGlzLl9hdXRvcGxheSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5pbnRlcnZhbCQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxvb3AoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvb3A7XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBsb29wKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5sb29wJC5uZXh0KHZhbHVlKTtcbiAgICB0aGlzLl9sb29wID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBwdWJsaWMgaGlkZUFycm93cyA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlSW5kaWNhdG9ycyA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogVGhlbWVQYWxldHRlID0gJ2FjY2VudCc7XG5cbiAgcHVibGljIGdldCBtYXhXaWR0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tYXhXaWR0aDtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1heFdpZHRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXhXaWR0aCA9IHZhbHVlO1xuICAgIHRoaXMubWF4V2lkdGgkLm5leHQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHB1YmxpYyBtYWludGFpbkFzcGVjdFJhdGlvID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIHByb3BvcnRpb24gPSAyNTtcbiAgQElucHV0KCkgcHVibGljIHNsaWRlSGVpZ2h0ID0gJzEwMCUnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2xpZGVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNsaWRlcyQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKSBwdWJsaWMgdXNlS2V5Ym9hcmQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIHVzZU1vdXNlV2hlZWwgPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0IG9yaWVudGF0aW9uKCk6IE9yaWVudGF0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZW50YXRpb247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBvcmllbnRhdGlvbih2YWx1ZTogT3JpZW50YXRpb24pIHtcbiAgICB0aGlzLm9yaWVudGF0aW9uJC5uZXh0KHZhbHVlKTtcbiAgICB0aGlzLl9vcmllbnRhdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHVibGljIGdldCBjdXJyZW50SW5kZXgoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5saXN0S2V5TWFuYWdlcikge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdEtleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4O1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG4gIHB1YmxpYyBnZXQgY3VycmVudFNsaWRlKCk6IE1hdENhcm91c2VsU2xpZGVDb21wb25lbnQge1xuICAgIGlmICh0aGlzLmxpc3RLZXlNYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0S2V5TWFuYWdlci5hY3RpdmVJdGVtO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50KSBwdWJsaWMgc2xpZGVzTGlzdDogUXVlcnlMaXN0PFxuICAgIE1hdENhcm91c2VsU2xpZGVDb21wb25lbnRcbiAgPjtcbiAgQFZpZXdDaGlsZCgnY2Fyb3VzZWxDb250YWluZXInKSBwcml2YXRlIGNhcm91c2VsQ29udGFpbmVyOiBFbGVtZW50UmVmPFxuICAgIEhUTUxEaXZFbGVtZW50XG4gID47XG4gIEBWaWV3Q2hpbGQoJ2Nhcm91c2VsTGlzdCcpIHByaXZhdGUgY2Fyb3VzZWxMaXN0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgcHVibGljIGxpc3RLZXlNYW5hZ2VyOiBMaXN0S2V5TWFuYWdlcjxNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50PjtcblxuICBwcml2YXRlIF9hdXRvcGxheSA9IHRydWU7XG4gIHByaXZhdGUgYXV0b3BsYXkkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIGludGVydmFsJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPig1MDAwKTtcbiAgcHJpdmF0ZSBzbGlkZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KG51bGwpO1xuXG4gIHByaXZhdGUgX21heFdpZHRoID0gJ2F1dG8nO1xuICBwcml2YXRlIG1heFdpZHRoJCA9IG5ldyBTdWJqZWN0PG5ldmVyPigpO1xuXG4gIHByaXZhdGUgX2xvb3AgPSB0cnVlO1xuICBwcml2YXRlIGxvb3AkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIF9vcmllbnRhdGlvbjogT3JpZW50YXRpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBvcmllbnRhdGlvbiQgPSBuZXcgU3ViamVjdDxPcmllbnRhdGlvbj4oKTtcblxuICBwcml2YXRlIHRpbWVyJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBwcml2YXRlIHRpbWVyU3RvcCQgPSBuZXcgU3ViamVjdDxuZXZlcj4oKTtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8bmV2ZXI+KCk7XG4gIHByaXZhdGUgcGxheWluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkXG4gICkge31cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubGlzdEtleU1hbmFnZXIgPSBuZXcgTGlzdEtleU1hbmFnZXIodGhpcy5zbGlkZXNMaXN0KVxuICAgICAgLndpdGhWZXJ0aWNhbE9yaWVudGF0aW9uKGZhbHNlKVxuICAgICAgLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24odGhpcy5fb3JpZW50YXRpb24pXG4gICAgICAud2l0aFdyYXAodGhpcy5fbG9vcCk7XG5cbiAgICB0aGlzLmxpc3RLZXlNYW5hZ2VyLnVwZGF0ZUFjdGl2ZUl0ZW0oMCk7XG4gICAgdGhpcy5saXN0S2V5TWFuYWdlci5jaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5wbGF5QW5pbWF0aW9uKCkpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmF1dG9wbGF5JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIodmFsdWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbnRlcnZhbCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgdGhpcy5yZXNldFRpbWVyKHZhbHVlKTtcbiAgICAgIHRoaXMuc3RhcnRUaW1lcih0aGlzLl9hdXRvcGxheSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1heFdpZHRoJFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNsaWRlVG8oMCkpO1xuXG4gICAgdGhpcy5sb29wJFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLmxpc3RLZXlNYW5hZ2VyLndpdGhXcmFwKHZhbHVlKSk7XG5cbiAgICB0aGlzLm9yaWVudGF0aW9uJFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLmxpc3RLZXlNYW5hZ2VyLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24odmFsdWUpKTtcblxuICAgIHRoaXMuc2xpZGVzJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHZhbHVlID0+IHZhbHVlICYmIHZhbHVlIDwgdGhpcy5zbGlkZXNMaXN0Lmxlbmd0aClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5yZXNldFNsaWRlcyh2YWx1ZSkpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuZ290byhEaXJlY3Rpb24uUmlnaHQpO1xuICB9XG5cbiAgcHVibGljIHByZXZpb3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZ290byhEaXJlY3Rpb24uTGVmdCk7XG4gIH1cblxuICBwdWJsaWMgc2xpZGVUbyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvKERpcmVjdGlvbi5JbmRleCwgaW5kZXgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVzZUtleWJvYXJkICYmICF0aGlzLnBsYXlpbmcpIHtcbiAgICAgIHRoaXMubGlzdEtleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgcHVibGljIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydFRpbWVyKHRoaXMuX2F1dG9wbGF5KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Nb3VzZVdoZWVsKGV2ZW50OiBNb3VzZVdoZWVsRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VNb3VzZVdoZWVsKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IHdpbmRvdyB0byBzY3JvbGxcbiAgICAgIGNvbnN0IMOOwpQgPSBNYXRoLnNpZ24oZXZlbnQud2hlZWxEZWx0YSk7XG5cbiAgICAgIGlmICjDjsKUIDwgMCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAow47ClCA+IDApIHtcbiAgICAgICAgdGhpcy5wcmV2aW91cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25SZXNpemUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgLy8gUmVzZXQgY2Fyb3VzZWwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAgIC8vIGluIG9yZGVyIHRvIGF2b2lkIG1ham9yIGdsaXRjaGVzLlxuICAgIHRoaXMuc2xpZGVUbygwKTtcbiAgfVxuXG4gIHB1YmxpYyBvblBhbihldmVudDogYW55LCBzbGlkZUVsZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA1NDEjaXNzdWVjb21tZW50LTM0NjUzOTI0MlxuICAgIC8vIGlmIHkgdmVsb2NpdHkgaXMgZ3JlYXRlciwgaXQncyBhIHBhbnVwL3BhbmRvd24sIHNvIGlnbm9yZS5cbiAgICBpZiAoTWF0aC5hYnMoZXZlbnQudmVsb2NpdHlZKSA+IE1hdGguYWJzKGV2ZW50LnZlbG9jaXR5WCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IMOOwpR4ID0gZXZlbnQuZGVsdGFYO1xuICAgIGlmICh0aGlzLmlzT3V0T2ZCb3VuZHMoKSkge1xuICAgICAgw47ClHggKj0gMC4yOyAvLyBkZWNlbGVyYXRlIG1vdmVtZW50O1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoc2xpZGVFbGVtLCAnY3Vyc29yJywgJ2dyYWJiaW5nJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuY2Fyb3VzZWxMaXN0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAndHJhbnNmb3JtJyxcbiAgICAgIHRoaXMuZ2V0VHJhbnNsYXRpb24odGhpcy5nZXRPZmZzZXQoKSArIMOOwpR4KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25QYW5FbmQoZXZlbnQ6IGFueSwgc2xpZGVFbGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoc2xpZGVFbGVtLCAnY3Vyc29yJyk7XG5cbiAgICBpZiAoXG4gICAgICAhdGhpcy5pc091dE9mQm91bmRzKCkgJiZcbiAgICAgIE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPiB0aGlzLmdldFdpZHRoKCkgKiAwLjI1XG4gICAgKSB7XG4gICAgICBpZiAoZXZlbnQuZGVsdGFYIDw9IDApIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJldmlvdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wbGF5QW5pbWF0aW9uKCk7IC8vIHNsaWRlIGJhY2ssIGRvbid0IGNoYW5nZSBjdXJyZW50IGluZGV4XG4gIH1cblxuICBwcml2YXRlIGlzT3V0T2ZCb3VuZHMoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc2lnbiA9IHRoaXMub3JpZW50YXRpb24gPT09ICdydGwnID8gLTEgOiAxO1xuICAgIGNvbnN0IGxlZnQgPVxuICAgICAgc2lnbiAqXG4gICAgICAodGhpcy5jYXJvdXNlbExpc3QubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC1cbiAgICAgICAgdGhpcy5jYXJvdXNlbExpc3QubmF0aXZlRWxlbWVudC5vZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAubGVmdCk7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5zbGlkZXNMaXN0Lmxlbmd0aCAtIDE7XG4gICAgY29uc3Qgd2lkdGggPSAtdGhpcy5nZXRXaWR0aCgpICogbGFzdEluZGV4O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmxpc3RLZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCA9PT0gMCAmJiBsZWZ0ID49IDApIHx8XG4gICAgICAodGhpcy5saXN0S2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXggPT09IGxhc3RJbmRleCAmJiBsZWZ0IDw9IHdpZHRoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtID0gdGhpcy5jYXJvdXNlbENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGRvY1ZpZXdUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgY29uc3QgZG9jVmlld0JvdHRvbSA9IGRvY1ZpZXdUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgZWxlbU9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZWxlbVRvcCA9IGRvY1ZpZXdUb3AgKyBlbGVtT2Zmc2V0LnRvcDtcbiAgICBjb25zdCBlbGVtQm90dG9tID0gZWxlbVRvcCArIGVsZW1PZmZzZXQuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIGVsZW1Cb3R0b20gPD0gZG9jVmlld0JvdHRvbSB8fCBlbGVtVG9wID49IGRvY1ZpZXdUb3A7XG4gIH1cblxuICBwcml2YXRlIGdldE9mZnNldCgpOiBudW1iZXIge1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubGlzdEtleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4ICogdGhpcy5nZXRXaWR0aCgpO1xuICAgIGNvbnN0IHNpZ24gPSB0aGlzLm9yaWVudGF0aW9uID09PSAncnRsJyA/IDEgOiAtMTtcbiAgICByZXR1cm4gc2lnbiAqIG9mZnNldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VHJhbnNsYXRpb24ob2Zmc2V0OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgdHJhbnNsYXRlWCgke29mZnNldH1weClgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhcm91c2VsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIGdvdG8oZGlyZWN0aW9uOiBEaXJlY3Rpb24sIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXlpbmcpIHtcbiAgICAgIGNvbnN0IHJ0bCA9IHRoaXMub3JpZW50YXRpb24gPT09ICdydGwnO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERpcmVjdGlvbi5MZWZ0OlxuICAgICAgICAgIHJldHVybiBydGxcbiAgICAgICAgICAgID8gdGhpcy5saXN0S2V5TWFuYWdlci5zZXROZXh0SXRlbUFjdGl2ZSgpXG4gICAgICAgICAgICA6IHRoaXMubGlzdEtleU1hbmFnZXIuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk7XG4gICAgICAgIGNhc2UgRGlyZWN0aW9uLlJpZ2h0OlxuICAgICAgICAgIHJldHVybiBydGxcbiAgICAgICAgICAgID8gdGhpcy5saXN0S2V5TWFuYWdlci5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKVxuICAgICAgICAgICAgOiB0aGlzLmxpc3RLZXlNYW5hZ2VyLnNldE5leHRJdGVtQWN0aXZlKCk7XG4gICAgICAgIGNhc2UgRGlyZWN0aW9uLkluZGV4OlxuICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RLZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcGxheUFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2V0VHJhbnNsYXRpb24odGhpcy5nZXRPZmZzZXQoKSk7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuYW5pbWF0aW9uQnVpbGRlci5idWlsZChcbiAgICAgIGFuaW1hdGUodGhpcy50aW1pbmdzLCBzdHlsZSh7IHRyYW5zZm9ybTogdHJhbnNsYXRpb24gfSkpXG4gICAgKTtcbiAgICBjb25zdCBhbmltYXRpb24gPSBmYWN0b3J5LmNyZWF0ZSh0aGlzLmNhcm91c2VsTGlzdC5uYXRpdmVFbGVtZW50KTtcblxuICAgIGFuaW1hdGlvbi5vblN0YXJ0KCgpID0+ICh0aGlzLnBsYXlpbmcgPSB0cnVlKSk7XG4gICAgYW5pbWF0aW9uLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY3VycmVudEluZGV4KTtcbiAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy5jYXJvdXNlbExpc3QubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIHRyYW5zbGF0aW9uXG4gICAgICApO1xuICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICBhbmltYXRpb24ucGxheSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFNsaWRlcyhzbGlkZXM6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2xpZGVzTGlzdC5yZXNldCh0aGlzLnNsaWRlc0xpc3QudG9BcnJheSgpLnNsaWNlKDAsIHNsaWRlcykpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFRpbWVyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVyJCA9IGludGVydmFsKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRUaW1lcihhdXRvcGxheTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghYXV0b3BsYXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVyJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnRpbWVyU3RvcCQpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmlzVmlzaWJsZSgpKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubGlzdEtleU1hbmFnZXIud2l0aFdyYXAodHJ1ZSkuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcbiAgICAgICAgdGhpcy5saXN0S2V5TWFuYWdlci53aXRoV3JhcCh0aGlzLmxvb3ApO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN0b3BUaW1lcigpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVyU3RvcCQubmV4dCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmltcG9ydCB7IE1hdENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtc2xpZGUvY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIEhhbW1lckdlc3R1cmVDb25maWcsXG4gIEhBTU1FUl9HRVNUVVJFX0NPTkZJR1xufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvY29yZSc7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwNTQxI2lzc3VlY29tbWVudC0zMDA3NjEzODdcbmV4cG9ydCBjbGFzcyBNYXRDYXJvdXNlbEhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBvdmVycmlkZXMgPSB7XG4gICAgcGluY2g6IHsgZW5hYmxlOiBmYWxzZSB9LFxuICAgIHJvdGF0ZTogeyBlbmFibGU6IGZhbHNlIH1cbiAgfTtcbn1cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01hdENhcm91c2VsQ29tcG9uZW50LCBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbiAgZXhwb3J0czogW01hdENhcm91c2VsQ29tcG9uZW50LCBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDYXJvdXNlbE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWF0Q2Fyb3VzZWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBNYXRDYXJvdXNlbEhhbW1lckNvbmZpZyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19