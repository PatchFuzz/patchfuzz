
Object.defineProperty(Array, "foo", {configurable: true, get: function() {}});
Object.defineProperty(Array, "foo", {configurable: true, get: function() {}});


let a = [1, 2, 3];
for (let i = 0; i < 5; i++) {
    assertEq(a.slice().length, 3);
}


let count = 0;
Object.defineProperty(Array, Symbol.species,
                      {get: function() { count++; }, enumerable: false, configurable: true});


for (let i = 0; i < 5; i++) {
    assertEq(a.slice().length, 3);
}
assertEq(count, 5);
