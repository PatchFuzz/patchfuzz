













assert(Number['isInteger'] ('valami') === false);
assert(Number['isInteger'] (NaN) === false);
assert(Number['isInteger'] (Infinity) === false);
assert(Number['isInteger'] (-Infinity) === false);
assert(Number['isInteger'] (3.5) === false);
assert(Number['isInteger'] (-100000) === true);
assert(Number['isInteger'] (5.0000000000000001) === true);
