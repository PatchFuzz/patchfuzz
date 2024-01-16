














assert((-1n >> (2n ** 32n)) === -1n);
assert((-1n >> 2n) === -1n);
assert((-1n >> (2n ** 1n)) === -1n);
assert((-5n >> 3n) === -1n);
assert((-5n >> 4n) === -1n);
assert((-(2n ** 32n) >> (2n ** 31n)) === -1n);
assert((-(2n ** 32n) >> (2n ** 32n)) === -1n);
assert((-(2n ** 32n) >> (2n ** 33n)) === -1n);
assert((-(2n ** 32n) >> (2n ** 33000n)) === -1n);
assert((-(2n ** 32n) >> 32n) === -1n);


assert((-1n << -(2n ** 32n)) === -1n);
assert((-1n << -2n) === -1n);
assert((-1n << -(2n ** 1n)) === -1n);
assert((-5n << -3n) === -1n);
assert((-5n << -4n) === -1n);
assert((-(2n ** 32n) << -(2n ** 31n)) === -1n);
assert((-(2n ** 32n) << -(2n ** 32n)) === -1n);
assert((-(2n ** 32n) << -(2n ** 33n)) === -1n);
assert((-(2n ** 32n) << -(2n ** 33000n)) === -1n);


assert((-(2n ** 32n) >> 31n) === -2n);
assert((-(2n ** 32n) >> 30n) === -4n);
assert((-(2n ** 32n) >> 29n) === -8n);
assert((-(2n ** 32n) >> 28n) === -16n);
assert((-(2n ** 32n) >> 16n) === -65536n);
assert((-(2n ** 32n) >> 2n) === -1073741824n);

assert((-5n >> 2n) === -2n);
assert((-5n >> -4n) === -80n);
