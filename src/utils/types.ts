// ----- ACTIONS -----

export const ACTIONS = {
    CLICK: 'click',
    JUMP : 'jump',
    SEEK : 'seek', 
} as const;
export type ActionType = typeof ACTIONS[keyof typeof ACTIONS];

export type ClickAction = {
    type: 'click';
    value: undefined;
};

export type JumpAction = {
    type: 'jump';
    value: {
        animeUri: string; // jsonUri: json_url.json:animation_name
        frameIdx?: number;
    }; 
};

export type SeekAction = {
    type: 'seek';
    value: {
        ratio: number
    }
}

export type Action = ClickAction | JumpAction | SeekAction;

// ----- ACTIONS -----
// ----- FRAME -----

export type Size = { w: number; h: number };
export type Point = { x: number; y: number };

export type Frame = {
    frame: Point & Size;
    sourceSize: Size;
};

export type AnimationFrame = {
    frameName: string;
    duration: number,
    actions?: Action[];
};

export type RenderingFrame = {
    frameStyle: Partial<CSSStyleDeclaration>|null;
    actions: Action[];
};

export type AnimationRecord = {
    type: string,
    frames: AnimationFrame[]
}


export type AnimationConfig = {
    frames: Record<string, Frame>;
    animations: Record<string, AnimationRecord>;
    meta: { image: string; size: Size };
};


// ----- FRAME -----