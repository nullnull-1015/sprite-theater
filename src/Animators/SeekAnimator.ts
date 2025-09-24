import { Animator, type AnimatorListener } from "./Animator";
import type { RenderingFrame } from "../utils/types";
import type { SeekActionHandler } from "../ActionHandlers/SeekActionHandler";

export class SeekAnimator extends Animator {
    private _actionHandler: SeekActionHandler;

    constructor(listeners: AnimatorListener[], actionHandler: SeekActionHandler) {
        super(listeners);
        this._actionHandler = actionHandler
    }

    init() {}

    start() {
        this._actionHandler.add(this)
    }

    stop() {
        this._actionHandler.remove(this)
    }

    seek(ratio: number) {
        if (!this._animation || this._animation.paused) return;

        // clip ratio
        ratio = Math.max(0, Math.min(ratio, 1));

        const targetTime = this._animation.duration*ratio;
        const nextIdx = this._animation.seekIndex(targetTime);
        const direction = Math.sign(nextIdx-this._animation.index);

        let currentFrame = this._animation.currentFrame
        const renderingQueue: RenderingFrame[] = []

        while (this._animation.index != nextIdx) {
            // update index
            const prevIndex = this._animation.index;
            this._animation.index+=direction;
            if (this._animation.index >= this._animation.length) {
                this._animation.index = this._animation.length-1;
            }

            // update calculation info
            currentFrame = this._animation.currentFrame; // next frame

            // update animation queue
            if (currentFrame && this._animation.index != prevIndex) {
                renderingQueue.push(this._animation.getRenderingFrame());
            }

        }

        this._requestRender(renderingQueue);
    }
}