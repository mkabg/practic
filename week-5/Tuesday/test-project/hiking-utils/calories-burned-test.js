import {test} from "node:test";
import assert from "node:assert";
import { caloriesBurned } from "./calories-burned";

test("should to calculate the calories burned correctly", ()=>{
    assert.strictEqual(caloriesBurned(70, 5), 362.6);
    assert.strictEqual(caloriesBurned(70, 5.5), )
})
test("should return null in invalid input", ()=>{
    assert.strictEqual(caloriesBurned(-70, 5), null);
    assert.strictEqual(caloriesBurned(70, -5), null);
})