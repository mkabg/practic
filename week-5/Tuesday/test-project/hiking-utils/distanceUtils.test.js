import { test } from "node:test";
import assert from "node:assert";
import { kmToMeters } from "./distanceUtils.js";

test("should convert kilometers to meters correctly", () => {
    assert.strictEqual(kmToMeters(1), 1000);
    assert.strictEqual(kmToMeters("2.5"), 2500);
    assert.strictEqual(typeof kmToMeters("2.5"), "number");
});

test("should return null for invalid input", ()=> {
    assert.strictEqual(kmToMeters("abc"), null);
    assert.strictEqual(kmToMeters(-5), null);
    assert.strictEqual(kmToMeters(0), null);
})