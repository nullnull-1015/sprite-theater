export interface TimerCallback {
    update(deltaMS: number): void;
}
export declare class Timer {
    private _listener;
    private _running;
    private _requestId;
    private _lastTime;
    private readonly _loop;
    private static __timer;
    constructor();
    static getInstance(): Timer;
    start(): void;
    stop(): void;
    add(listener: TimerCallback): void;
    remove(listener: TimerCallback): void;
    private _update;
}
//# sourceMappingURL=Timer.d.ts.map