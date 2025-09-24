import type { Action } from './utils/types';
import type { IActionHandler } from './ActionHandlers/ActionHandler';

export class ActionDispatcher {
    private handlers: Record<string, Set<IActionHandler<Action>>> = {};

    register(type: string, handler: IActionHandler<Action>) {
        if (this.handlers[type] !== undefined) {
            this.handlers[type].add(handler)
        }
        else {
            this.handlers[type] = new Set([handler]);
        }  
    }

    remove(type: string, handler: IActionHandler<Action>) {
        if (this.handlers[type] === undefined) return;
        this.handlers[type].delete(handler)
    }

    async dispatch(action: Action) {
        const handlers = this.handlers[action.type];
        if (handlers !== undefined) {
            for (const handler of handlers) {
                await handler.handle(action);
            }
        }
        else console.warn(`No handler for action: ${action.type}`);
    }
}
