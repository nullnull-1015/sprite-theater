import type { ClickAction } from '../utils/types';
import type { IActionHandler } from './ActionHandler';
export declare class ClickActionHandler implements IActionHandler<ClickAction> {
    private _target;
    constructor(_target: HTMLElement);
    handle(_action: ClickAction): void;
}
//# sourceMappingURL=ClickActionHandler.d.ts.map