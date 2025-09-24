import type { SeekAction } from "../utils/types";
import type { IActionHandler } from "./ActionHandler";
import { SeekAnimator } from "../Animators/SeekAnimator";
export declare class SeekActionHandler implements IActionHandler<SeekAction> {
    private seekers;
    constructor(seekers: Set<SeekAnimator>);
    handle(action: SeekAction): Promise<void>;
    add(seeker: SeekAnimator): void;
    remove(seeker: SeekAnimator): void;
}
//# sourceMappingURL=SeekActionHandler.d.ts.map