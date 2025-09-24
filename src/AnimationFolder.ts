import { AnimationLoader } from "./AnimationLoader";
import { Animation } from "./Animation";

export class AnimationFolder {
    private _animations: Record<string, Animation> = {}
    constructor(animations: Record<string, Animation>) {
        this._animations = animations;
    }

    async get(uri: string) {
        let anim = this._animations[uri];
        if (!anim) {
            const loader = AnimationLoader.getInstance();
            anim = await loader.load(uri);
            if (anim) this._addAnimation(uri, anim)
        }
        return anim;
    }

    _addAnimation(uri: string, animation: Animation) {
        this._animations[uri] = animation;
    }
}