import { Animator, type AnimatorListener } from "./Animator";
import type { SeekActionHandler } from "../ActionHandlers/SeekActionHandler";
export declare class SeekAnimator extends Animator {
    private _actionHandler;
    constructor(listeners: AnimatorListener[], actionHandler: SeekActionHandler);
    init(): void;
    start(): void;
    stop(): void;
    seek(ratio: number): void;
}
//# sourceMappingURL=SeekAnimator.d.ts.map