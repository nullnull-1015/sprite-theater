import type { AnimationFrame } from './utils/types';
export declare class AnimationTimesheet {
    private _frames;
    private _duration;
    private _durationMap;
    constructor(animationFrames: AnimationFrame[]);
    getFrame(frameIndex: number): AnimationFrame | undefined;
    seekIndex(time: number): number;
    get length(): number;
    get duration(): number;
}
//# sourceMappingURL=AnimationTimesheet.d.ts.map