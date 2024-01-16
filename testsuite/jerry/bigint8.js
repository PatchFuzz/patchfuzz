



try {
  12n ** -7n
  assert(false)
} catch (e) {
  assert(e instanceof RangeError)
}

assert((0n ** 0n) === 1n)
assert((1n ** 0n) === 1n)
assert(((-2n) ** 0n) === 1n)
assert((1000000000000000000000000000000000n ** 0n) === 1n)
assert(((-1000000000000000000000000000000000n) ** 0n) === 1n)

assert((1n ** 1n) === 1n)
assert((1n ** 10000000000000000000000000000000n) === 1n)
assert(((-1n) ** 1n) === -1n)
assert(((-1n) ** 10000000000000000000000000000000n) === 1n)
assert(((-1n) ** 10000000000000000000000000000001n) === -1n)

assert((2n ** 10n) === 1024n)
assert((2n ** 11n) === 2048n)
assert(((-2n) ** 10n) === 1024n)
assert(((-2n) ** 11n) === -2048n)
assert((2n ** 64n) === 0x10000000000000000n)
assert((2n ** 65n) === 0x20000000000000000n)
assert(((-2n) ** 64n) === 0x10000000000000000n)
assert(((-2n) ** 65n) === -0x20000000000000000n)

assert((2n ** 190n) === 0x400000000000000000000000000000000000000000000000n)
assert((2n ** 191n) === 0x800000000000000000000000000000000000000000000000n)
assert(((-2n) ** 190n) === 0x400000000000000000000000000000000000000000000000n)
assert(((-2n) ** 191n) === -0x800000000000000000000000000000000000000000000000n)

assert((103n ** 32n) === 25750827556851106532658069028441289322166445432839581773436522241n)
assert((103n ** 31n) === 250008034532535014880175427460595041962781023619801764790645847n)
assert(((-79n) ** 32n) === 5297450670659957549009604563595170759963655420038456036451841n)
assert(((-79n) ** 31n) === -67056337603290601886197526121457857721058929367575392866479n)

