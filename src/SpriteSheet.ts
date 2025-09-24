import type { Frame } from './utils/types'

export class SpriteSheet {
    private _img: HTMLImageElement;
    private _frames: Record<string, Frame>;
    private _ready: Promise<void>;

    constructor(imageUrl: string, frames: Record<string, Frame>) {
        this._img = new Image();
        this._frames = frames;

        this._ready = new Promise((resolve, reject) => {
            this._img.onload = () => resolve();
            this._img.onerror = (e) => reject(e);
            this._img.src = imageUrl;
        });
    }

    async ready(): Promise<void> {
        return this._ready;
    }

    getFrame(name: string): Frame | undefined {
        return this._frames[name];
    }

    getStyle(frameName: string): Partial<CSSStyleDeclaration> | null {
        const frame = this.getFrame(frameName);
        if (!frame) return null;

        const { w, h, x, y } = frame.frame;
        const sheetW = this._img.width;
        const sheetH = this._img.height;

        const eps = 1e-12;
        return {
            backgroundImage: `url(${this._img.src})`,
            backgroundPosition: `${(x / (sheetW-w+eps)) * 100}% ${(y / (sheetH+eps)) * 100}%`,
            backgroundSize: `${(sheetW / w) * 100}% ${(sheetH / h) * 100}%`,
            aspectRatio: `${w} / ${h}`,
            backgroundColor: '',
        };
    }
}

