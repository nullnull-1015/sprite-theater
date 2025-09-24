import { Animation } from "./Animation";
export declare class AnimationLoader {
    private _cache;
    private static __loader;
    static getInstance(): AnimationLoader;
    load(animeUri: string): Promise<Animation | undefined>;
    get(uri: string): Animation | undefined;
    has(key: string): boolean;
}
//# sourceMappingURL=AnimationLoader.d.ts.map