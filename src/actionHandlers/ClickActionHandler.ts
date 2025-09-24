import type { ClickAction } from '../utils/types'
import type { IActionHandler } from './ActionHandler';

export class ClickActionHandler implements IActionHandler<ClickAction> {
    constructor(private _target: HTMLElement) {};

    handle(_action: ClickAction) {
        this._target.click();
    }
}
