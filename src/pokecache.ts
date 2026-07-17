

export type CacheEntry<T> = {
    createdAt: number;
    val: T;
};


export class Cache<T> {
    #cache = new Map<string, CacheEntry<T>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number = 0;

    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoop();
    }

    add(key: string, val: T) {

        this.#cache.set(key, {
            createdAt: Date.now(),
            val,
        });
    }

    get<T>(key: string) {

        return this.#cache.get(key,)
    }
    #reap() {
        // delete older data (older than interval 
        for (const [key, value] of this.#cache) {
            if (value.createdAt <= Date.now() - this.#interval) {
                console.log(this.#cache.get(key));
                this.#cache.delete(key)
            }
        }
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => { this.#reap(); }
            , this.#interval);
    }
    stopReapLoop() {
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined
        }
    }
}


