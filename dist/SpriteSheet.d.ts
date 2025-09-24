import type { Frame } from './utils/types';
export declare class SpriteSheet {
    private _img;
    private _frames;
    private _ready;
    constructor(imageUrl: string, frames: Record<string, Frame>);
    ready(): Promise<void>;
    getFrame(name: string): Frame | undefined;
    getStyle(frameName: string): Partial<CSSStyleDeclaration> | null;
}
//# sourceMappingURL=SpriteSheet.d.ts.map