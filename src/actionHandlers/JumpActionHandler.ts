import type { JumpAction } from "../utils/types";
import type { IActionHandler } from "./ActionHandler";
import { Theater } from "../Theater";

export class JumpActionHandler implements IActionHandler<JumpAction> {
    constructor(private theater: Theater) {}

    async handle(action: JumpAction) {
        const { animeUri, frameIdx } = action.value;
        await this.theater.play(animeUri, frameIdx || 0);
    }
}
