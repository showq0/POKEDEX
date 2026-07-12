import { Cache } from "../pokecache.js";
import { test, expect } from "vitest";

test.concurrent.each([
    {
        key: "https://pokeapi.co/api/v2",
        val: "test data 1",
        interval: 500,
    },
    {
        key: "https://pokeapi.co/api/v2/location/",
        val: "test data 2",
        interval: 1000,
    },
    {
        key: "https://pokeapi.co/api/v2/location-area/",
        val: "test data 3",
        interval: 1000,
    },

])("Test Caching $interval ms", async ({ key, val, interval }) => {
    const cache = new Cache(interval);

    cache.add(key, val);
    const cached = cache.get(key);
    expect(cached).toBeDefined();
    expect(cached?.val).toEqual(val)

    await new Promise((resolve) => setTimeout(resolve, interval * 2));
    const reaped = cache.get(key);
    expect(reaped).toBe(undefined);

    cache.stopReapLoop();
});