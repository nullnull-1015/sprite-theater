import { Animation } from "./Animation";
export declare class AnimationFolder {
    private _animations;
    constructor(animations: Record<string, Animation>);
    get(uri: string): Promise<Animation | undefined>;
    _addAnimation(uri: string, animation: Animation): void;
}
//# sourceMappingURL=AnimationFolder.d.ts.map