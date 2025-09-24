import { Animator, type AnimatorListener } from "./Animator";
import type { RenderingFrame } from "../utils/types";
import { Timer, type TimerCallback } from "../Timer";

export class TimeAnimator extends Animator implements TimerCallback {
    private _timer: Timer = Timer.getInstance();
    private _elapsed = 0;
    private _defaultDuration: number = 1000/60; // 60fps

    constructor(listeners: AnimatorListener[]) {
        super(listeners);
    }

    init() {
        this._elapsed = 0;
    }

    start() {
        this._timer.add(this)
    }

    stop() {
        this._timer.remove(this)
    }

    update(deltaMS: number) {
        if (!this._animation || this._animation.paused) return;

        const renderingQueue: RenderingFrame[] = []

        this._elapsed += deltaMS;
        let currentFrame = this._animation.currentFrame;
        let duration = currentFrame?.duration || this._defaultDuration;

        while (this._elapsed >= duration) {
            this._elapsed -= duration;

            // update index
            const prevIndex = this._animation.index
            this._animation.index++;
            if (this._animation.index >= this._animation.length) {
                this._animation.index = this._animation.length-1;
            }

            // update calculation info
            duration = currentFrame?.duration || this._defaultDuration
            currentFrame = this._animation.currentFrame; // next frame

            // update animation queue
            if (currentFrame && this._animation.index != prevIndex) {
                renderingQueue.push(this._animation.getRenderingFrame());
            }

        }

        this._requestRender(renderingQueue);
    }
}