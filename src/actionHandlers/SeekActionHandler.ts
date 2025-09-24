import type { SeekAction } from "../utils/types";
import type { IActionHandler } from "./ActionHandler";
import { SeekAnimator } from "../Animators/SeekAnimator"

export class SeekActionHandler implements IActionHandler<SeekAction> {
    constructor(private seekers: Set<SeekAnimator>) {}

    async handle(action: SeekAction) {
        const { ratio } = action.value;
        if (ratio===undefined) return;

        this.seekers.forEach((seeker) => {
            seeker.seek(ratio);
        })
    }

    add(seeker: SeekAnimator) {
        this.seekers.add(seeker);
    }

    remove(seeker: SeekAnimator) {
        this.seekers.delete(seeker);
    }
}
