import type { Action } from "../utils/types";
export interface IActionHandler<T extends Action> {
    handle(action: T): void;
}
//# sourceMappingURL=ActionHandler.d.ts.map