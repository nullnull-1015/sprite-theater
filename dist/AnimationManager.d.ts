import { Animator } from "./Animators/Animator";
export declare class AnimationManager {
    private _animators;
    private _folder;
    private currentAnimator;
    constructor(animators: Record<string, Animator>);
    play(uri: string, startIdx?: number): Promise<void>;
    start(): void;
    stop(): void;
    setAnimator(type: string, animator: Animator): void;
    getAnimator(type: string): Animator | undefined;
}
//# sourceMappingURL=AnimationManager.d.ts.map