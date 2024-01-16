













assert(Number['isNaN'] ('valami') === false);
assert(Number['isNaN'] (NaN) === true);
assert(Number['isNaN'] (1) === false);
assert(Number['isNaN'] (Number.NaN) === true);
assert(Number['isNaN'] (0 / 0) === true);
