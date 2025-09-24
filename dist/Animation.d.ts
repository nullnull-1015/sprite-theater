import type { AnimationFrame, RenderingFrame } from "./utils/types";
import { SpriteSheet } from "./SpriteSheet";
import { AnimationTimesheet } from "./AnimationTimesheet";
export declare class Animation {
    type: string;
    spriteSheet: SpriteSheet;
    timesheet: AnimationTimesheet;
    paused: boolean;
    private _currentIndex;
    private DEFAULT_TYPE;
    constructor(type: string | null, spriteSheet: SpriteSheet, animationFrames: AnimationFrame[]);
    init(startIdx?: number): Promise<void>;
    pause(): void;
    resume(): void;
    getStyle(frameName: string): Partial<CSSStyleDeclaration> | null;
    getRenderingFrame(): RenderingFrame;
    seekIndex(time: number): number;
    get index(): number;
    set index(index: number);
    get length(): number;
    get duration(): number;
    get currentFrame(): AnimationFrame | undefined;
}
//# sourceMappingURL=Animation.d.ts.map