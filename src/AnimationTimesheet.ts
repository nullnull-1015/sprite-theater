import type { AnimationFrame } from './utils/types'

export class AnimationTimesheet {
    private _frames: AnimationFrame[];
    private _duration: number | null = null;
    private _durationMap: Map<number, AnimationFrame> = new Map();;

    constructor(animationFrames: AnimationFrame[]) {
        if (animationFrames.length === 0) {
            throw new Error("Timesheet must not be empty.");
        }
        this._frames = animationFrames;
    }

    getFrame(frameIndex: number) : AnimationFrame | undefined {
        return this._frames[frameIndex]
    }

    seekIndex(time: number) : number {
        if (time < 0) return 0;

        let i = 0;
        for (const duration of this._durationMap.keys()) {
            if (time < duration) return i;
            i++;
        }
        
        return this.length;
    }

    get length(): number {
        return this._frames.length;
    }

    get duration(): number {
        if (this._duration===null) {
            let duration = 0;
            for (const animation of this._frames) {
                duration+= animation.duration
                this._durationMap.set(duration, animation)
            }
            this._duration = duration
        }

        return this._duration;
    }
}
