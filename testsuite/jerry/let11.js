

let b = 5;
eval('function b() { return 8; }; assert(b() === 8);');
assert(b === 5);
