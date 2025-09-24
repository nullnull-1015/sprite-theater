import { Animator, type AnimatorListener } from "./Animator";
import { type TimerCallback } from "../Timer";
export declare class TimeAnimator extends Animator implements TimerCallback {
    private _timer;
    private _elapsed;
    private _defaultDuration;
    constructor(listeners: AnimatorListener[]);
    init(): void;
    start(): void;
    stop(): void;
    update(deltaMS: number): void;
}
//# sourceMappingURL=TimeAnimator.d.ts.map