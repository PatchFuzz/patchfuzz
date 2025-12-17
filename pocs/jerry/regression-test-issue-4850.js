assert(Number('0x10') === 16);
assert(isNaN(Number('+0x10')));
assert(isNaN(Number('-0x10')));
assert(parseFloat('0x10') === 0);
assert(parseFloat('+0x10') === 0);
assert(parseFloat('-0x10') === 0);
assert(0x10 === 16);
assert(+0x10 === 16);
assert(-0x10 === -16);
