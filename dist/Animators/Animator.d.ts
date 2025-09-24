import type { RenderingFrame } from "../utils/types";
import { Animation } from "../Animation";
export interface AnimatorListener {
    request(requests: RenderingFrame[]): void;
}
export declare abstract class Animator {
    protected _animation: Animation | null;
    private _listeners;
    constructor(listeners: AnimatorListener[]);
    abstract init(): void;
    abstract start(): void;
    abstract stop(): void;
    play(animation: Animation, startIdx?: number): Promise<void>;
    _requestRender(frames: RenderingFrame[]): void;
}
//# sourceMappingURL=Animator.d.ts.map