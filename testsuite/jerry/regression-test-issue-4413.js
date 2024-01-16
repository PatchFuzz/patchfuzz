













assert((new (class C2 { x = 5 })).x === 5);
assert((new (class C2 { x = {} + {} })).x === "[object Object][object Object]");
assert((new (class C2 { ["foo"] = 5; x = {} + {} })).foo === 5);
assert((new (class C2 { ["foo"] = 5; x = 6 })).foo === 5);
