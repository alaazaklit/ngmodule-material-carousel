import { AnimationBuilder } from '@angular/animations';
import { ListKeyManager } from '@angular/cdk/a11y';
import { AfterContentInit, AfterViewInit, EventEmitter, OnDestroy, QueryList, Renderer2 } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatCarousel, Orientation, SvgIconOverrides } from './carousel';
import { MatCarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import * as ɵngcc0 from '@angular/core';
export declare class MatCarouselComponent implements AfterContentInit, AfterViewInit, MatCarousel, OnDestroy {
    private animationBuilder;
    private renderer;
    private platformId;
    timings: string;
    svgIconOverrides: SvgIconOverrides;
    autoplay: boolean;
    interval: number;
    loop: boolean;
    hideArrows: boolean;
    hideIndicators: boolean;
    color: ThemePalette;
    maxWidth: string;
    maintainAspectRatio: boolean;
    proportion: number;
    slideHeight: string;
    slides: number;
    useKeyboard: boolean;
    useMouseWheel: boolean;
    orientation: Orientation;
    change: EventEmitter<number>;
    readonly currentIndex: number;
    readonly currentSlide: MatCarouselSlideComponent;
    slidesList: QueryList<MatCarouselSlideComponent>;
    private carouselContainer;
    private carouselList;
    listKeyManager: ListKeyManager<MatCarouselSlideComponent>;
    private _autoplay;
    private autoplay$;
    private interval$;
    private slides$;
    private _maxWidth;
    private maxWidth$;
    private _loop;
    private loop$;
    private _orientation;
    private orientation$;
    private timer$;
    private timerStop$;
    private destroy$;
    private playing;
    constructor(animationBuilder: AnimationBuilder, renderer: Renderer2, platformId: any);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    next(): void;
    previous(): void;
    slideTo(index: number): void;
    onKeyUp(event: KeyboardEvent): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onMouseWheel(event: MouseEvent): void;
    onResize(event: Event): void;
    onPan(event: any, slideElem: HTMLElement): void;
    onPanEnd(event: any, slideElem: HTMLElement): void;
    private isOutOfBounds;
    private isVisible;
    private getOffset;
    private getTranslation;
    private getWidth;
    private goto;
    private playAnimation;
    private resetSlides;
    private resetTimer;
    private startTimer;
    private stopTimer;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MatCarouselComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MatCarouselComponent, "mat-carousel", never, { "timings": "timings"; "hideArrows": "hideArrows"; "hideIndicators": "hideIndicators"; "color": "color"; "maintainAspectRatio": "maintainAspectRatio"; "proportion": "proportion"; "slideHeight": "slideHeight"; "useKeyboard": "useKeyboard"; "useMouseWheel": "useMouseWheel"; "autoplay": "autoplay"; "interval": "interval"; "loop": "loop"; "maxWidth": "maxWidth"; "slides": "slides"; "orientation": "orientation"; "svgIconOverrides": "svgIconOverrides"; }, { "change": "change"; }, ["slidesList"], never, false, never>;
}

//# sourceMappingURL=carousel.component.d.ts.map