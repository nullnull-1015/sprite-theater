export interface TimerCallback {
    update(deltaMS: number): void;
}

export class Timer {
    private _listener = new Set<TimerCallback>();;
    private _running = false;
    private _requestId: number|null = null;
    private _lastTime: number = performance.now();
    private readonly _loop: () => void;

    private static __timer: Timer


    constructor() {
        this._loop = (): void => {
            if (this._running) {
                this._update();
                this._requestId = requestAnimationFrame(this._loop);
            };
        }
        this.start();
    };

    static getInstance(): Timer {
        if (!this.__timer) {
            this.__timer = new(Timer)
        }
        return this.__timer;
    }

    start(): void {
        if (this._running) return;
        
        this._running = true;
        this._lastTime = performance.now();
        this._requestId = requestAnimationFrame(this._loop);
    }
    
    stop(): void {
        if (!this._requestId) return
    
        this._running = false;
        cancelAnimationFrame(this._requestId);
    }
    
    add(listener: TimerCallback): void {
        this._listener.add(listener);
    }
    
    remove(listener: TimerCallback): void {
        this._listener.delete(listener);
    }
    
    private _update = (): void => {
        const deltaMS = performance.now() - this._lastTime;

        if (!this._running) return;
        this._listener.forEach((listener) => listener.update(deltaMS));

        this._lastTime = performance.now();
    };
}