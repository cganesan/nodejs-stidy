const assert = require('assert');
const { calculateSum, calculateMultiply } = require('../Calculate');

// Sum
const s = calculateSum(2, 3);
assert.strictEqual(s, 5, 'calculateSum(2,3) should be 5');

// Multiply
const m = calculateMultiply(4, 5);
assert.strictEqual(m, 20, 'calculateMultiply(4,5) should be 20');

console.log('All calculate tests passed.');
