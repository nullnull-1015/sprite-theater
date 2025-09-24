import type { RenderingFrame } from "../utils/types";
import { Animation } from "../Animation";

export interface AnimatorListener {
    request(requests: RenderingFrame[]): void;
}

export abstract class Animator {
    protected _animation: Animation|null = null;
    private _listeners: AnimatorListener[];

    constructor(listeners: AnimatorListener[]) {
        this._listeners = listeners;

        this.init();
    }

    abstract init(): void;
    abstract start(): void;
    abstract stop(): void;

    async play(animation: Animation, startIdx: number = 0) {
        if (!animation || !animation.currentFrame) return;
        this._animation = animation;
        await this._animation.init(startIdx);
        
        this._requestRender([this._animation.getRenderingFrame()]);
    }

    _requestRender(frames: RenderingFrame[]) {
        this._listeners.forEach((listener) => {
            listener.request(frames);
        })
    }
}