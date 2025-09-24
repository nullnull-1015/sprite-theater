
import { Animator } from "./Animators/Animator";
import { AnimationFolder } from "./AnimationFolder";

export class AnimationManager {
    private _animators: Record<string, Animator>;
    private _folder: AnimationFolder = new AnimationFolder({})

    private currentAnimator: Animator|null = null;

    constructor(animators: Record<string, Animator>) {
        this._animators = animators;
    }
    
    async play(uri: string, startIdx: number = 0) {
        const animation = await this._folder.get(uri);
        if (!animation) return;

        const animator = this.getAnimator(animation.type);
        if (!animator) return;

        this.currentAnimator?.stop();

        animator.init();
        await animator.play(animation, startIdx);
        animator.start();
        this.currentAnimator = animator
    }

    start() {
        this.currentAnimator?.start();
    }

    stop() {
        this.currentAnimator?.stop();
    }

    setAnimator(type: string, animator: Animator) {
        this._animators[type] = animator;
    }

    getAnimator(type: string) {
        return this._animators[type]
    } 
}