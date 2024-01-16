













assert(Number['isFinite'] (Infinity) === false);
assert(Number['isFinite'] (-Infinity) === false);
assert(Number['isFinite'] (NaN) === false);
assert(Number['isFinite'] (0) === true);
assert(Number['isFinite'] (2e64) === true);
