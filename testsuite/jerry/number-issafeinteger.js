













assert(Number['isSafeInteger'] (Math.pow(2, 53)) === false);
assert(Number['isSafeInteger'] (Math.pow(2, 53) - 1) === true);
assert(Number['isSafeInteger'] (NaN) === false);
assert(Number['isSafeInteger'] (-3.0) === true);
assert(Number['isSafeInteger'] (Infinity) === false);
assert(Number['isSafeInteger'] (3.5) === false);
