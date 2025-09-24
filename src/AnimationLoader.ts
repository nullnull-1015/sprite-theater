import type { AnimationFrame, AnimationConfig } from "./utils/types";
import { SpriteSheet } from "./SpriteSheet";
import { Animation } from "./Animation"

type Cache = {
    type: string|null,
    spriteSheet: SpriteSheet,
    timesheet: AnimationFrame[]
}

export class AnimationLoader {
    private _cache: Record<string, Cache> = {};
    private static __loader: AnimationLoader;

    static getInstance(): AnimationLoader {
        if (!this.__loader){
            this.__loader = new AnimationLoader();
        }
        return this.__loader
    }

    async load(animeUri: string) { // json_url.json:animation_name
        if (!this._cache[animeUri]) {
            const lastColonIndex = animeUri.lastIndexOf(':');
            const jsonUrl = animeUri.slice(0, lastColonIndex);
            const res = await fetch(jsonUrl);
            const config: AnimationConfig = await res.json();

            
            const spriteSheet = new SpriteSheet(
                config.meta.image, config.frames
            );
            // load all animation in the same file
            Object.keys(config.animations).forEach(animationName => {
            const key = `${jsonUrl}:${animationName}`;
                if (!this._cache[key]) {
                    const record = config.animations[animationName]
                    const type      = record?.type || null
                    const timesheet = record?.frames || [];
                    this._cache[key] = { type, spriteSheet, timesheet };
                }
            });
        }

        return this.get(animeUri);
    }

    get(uri: string) {
        if (!this._cache[uri]) return;

        const {type, spriteSheet, timesheet} = this._cache[uri];
        return new Animation(type, spriteSheet, timesheet);
    }

    has(key: string) {
        return !!this._cache[key];
    }
}

