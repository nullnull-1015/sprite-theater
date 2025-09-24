import type { AnimationFrame, RenderingFrame } from "./utils/types";
import { SpriteSheet } from "./SpriteSheet";
import { AnimationTimesheet } from "./AnimationTimesheet"

// dataclass for animator
export class Animation {
    public type: string;
    public spriteSheet: SpriteSheet;
    public timesheet: AnimationTimesheet;
    public paused: boolean = false;

    private _currentIndex: number = 0;
    private DEFAULT_TYPE: string = "time";

    constructor(type: string|null, spriteSheet: SpriteSheet, animationFrames: AnimationFrame[]) {
        this.type = type || this.DEFAULT_TYPE;
        this.spriteSheet = spriteSheet;
        this.timesheet = new AnimationTimesheet(animationFrames);
    }

    async init(startIdx: number=0) {
        await this.spriteSheet.ready();
        this._currentIndex = startIdx;
    }
    
    pause() {
        this.paused = true;
    }

    resume() {
        this.paused = false;
    }

    getStyle(frameName: string): Partial<CSSStyleDeclaration> | null {
        return this.spriteSheet.getStyle(frameName);
    }

    getRenderingFrame(): RenderingFrame {
        const currentFrame = this.currentFrame;

        if (currentFrame) {
            return {
                frameStyle: this.getStyle(this.currentFrame.frameName) || {},
                actions: currentFrame.actions || []
            }
        }
        else {
            return {
                frameStyle: {},
                actions: []
            }
        }
    }

    seekIndex(time: number) {
        return this.timesheet.seekIndex(time);
    }

    get index(): number {
        return this._currentIndex;
    }

    set index(index: number) {
        this._currentIndex = index;
    }

    get length(): number {
        return this.timesheet.length;
    }

    get duration(): number {
        return this.timesheet.duration;
    }

    get currentFrame(): AnimationFrame | undefined {
        return this.timesheet.getFrame(this.index);
    }
}
