import type { Action, RenderingFrame } from "./utils/types";
import { ActionDispatcher } from "./ActionDispatcher";
import { AnimationManager } from "./AnimationManager";
import { Projector } from "./Projector";
import type { AnimatorListener } from "./Animators/Animator";
export declare class TheaterGofer implements AnimatorListener {
    private _theater;
    constructor(_theater: Theater);
    request(requests: RenderingFrame[]): void;
}
export declare class Theater {
    protected _manager: AnimationManager;
    protected _projector: Projector;
    protected _dispatcher: ActionDispatcher;
    constructor(screen: Element);
    play(uri: string, startIdx?: number): Promise<void>;
    start(): void;
    stop(): void;
    render(frames: RenderingFrame[]): void;
    _dispatchActions(actions: Action[]): void;
    get dispatcher(): ActionDispatcher;
}
//# sourceMappingURL=Theater.d.ts.map