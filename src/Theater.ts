import type { Action, RenderingFrame } from "./utils/types";
import { ActionDispatcher } from "./ActionDispatcher";
import { AnimationManager } from "./AnimationManager";
import { Projector } from "./Projector";
import { TimeAnimator } from "./Animators/TimeAnimator";
import type { AnimatorListener } from "./Animators/Animator";
import { JumpActionHandler } from "./ActionHandlers/JumpActionHandler";
import { SeekAnimator } from "./Animators/SeekAnimator";
import { SeekActionHandler } from "./ActionHandlers/SeekActionHandler";

export class TheaterGofer implements AnimatorListener {
    constructor(private _theater: Theater) {}

    request(requests: RenderingFrame[]): void {
        this._theater.render(requests)
    }
}

export class Theater {
    protected _manager: AnimationManager;
    protected _projector: Projector;
    protected _dispatcher: ActionDispatcher;

    constructor(screen: Element) {
        // register default actionListeners
        this._dispatcher = new ActionDispatcher();
        this._dispatcher.register("jump", new JumpActionHandler(this))
        const seekHandler = new SeekActionHandler(new Set([]))
        this._dispatcher.register("seek", seekHandler);;

        this._projector = new Projector(screen);

        // register default animators
        const gofer = new TheaterGofer(this);
        this._manager = new AnimationManager({
            "time": new TimeAnimator([gofer]),
            "seek": new SeekAnimator([gofer], seekHandler)
        });
    }

    async play(uri: string, startIdx: number = 0) {
        await this._manager.play(uri, startIdx);
    }

    start() {
        this._manager.start();
    }

    stop() {
        this._manager.stop();
    }

    render(frames: RenderingFrame[]) {
        for (const frame of frames) {
            if (frame.frameStyle) this._projector.cast(frame.frameStyle);
            this._dispatchActions(frame.actions);
        }
    }

    _dispatchActions(actions: Action[]) {
        for (const action of actions) {
            this._dispatcher.dispatch(action);
        }
    }

    get dispatcher(): ActionDispatcher {
        return this._dispatcher;
    }
}