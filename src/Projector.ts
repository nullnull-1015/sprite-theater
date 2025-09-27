export class Projector {
    private _placeHolder;
    private _screen;

    constructor(placeHolder: Element) {
        this._placeHolder = placeHolder;
        this._screen = document.createElement('div')
        this._placeHolder.appendChild(this._screen)
    }

    cast(frameStyle: Partial<CSSStyleDeclaration>) {
        Object.assign(this._screen.style, frameStyle);

        const style = window.getComputedStyle(this._placeHolder);

        const width  = this._placeHolder.clientWidth  - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
        const height = this._placeHolder.clientHeight - parseFloat(style.paddingTop)  - parseFloat(style.paddingBottom);

        // fit in screen
        if (width >= height) {
            this._screen.style.height = "100%";
            this._screen.style.removeProperty("width");
        }
        else {
            this._screen.style.width = "100%";
            this._screen.style.removeProperty("height");
        }

        void this._screen.offsetHeight
    }
}