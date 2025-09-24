import type { Action } from './utils/types';
import type { IActionHandler } from './ActionHandlers/ActionHandler';
export declare class ActionDispatcher {
    private handlers;
    register(type: string, handler: IActionHandler<Action>): void;
    remove(type: string, handler: IActionHandler<Action>): void;
    dispatch(action: Action): Promise<void>;
}
//# sourceMappingURL=ActionDispatcher.d.ts.map