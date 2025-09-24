import type { JumpAction } from "../utils/types";
import type { IActionHandler } from "./ActionHandler";
import { Theater } from "../Theater";
export declare class JumpActionHandler implements IActionHandler<JumpAction> {
    private theater;
    constructor(theater: Theater);
    handle(action: JumpAction): Promise<void>;
}
//# sourceMappingURL=JumpActionHandler.d.ts.map