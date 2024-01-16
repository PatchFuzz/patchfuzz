















var obj_A = {};
var sym = Symbol();

var toprimitive_called = 0;

var wrap = {
    [Symbol.toPrimitive]: function() {
        toprimitive_called++;
        return sym;
    }
};


assert (obj_A.hasOwnProperty (wrap) === false);
assert (toprimitive_called === 1);


assert ((wrap in obj_A) === false);
assert (toprimitive_called === 2);

obj_A[sym] = 0;


assert (obj_A.hasOwnProperty (wrap) === true);
assert (toprimitive_called === 3);


assert ((wrap in obj_A) === true);
assert (toprimitive_called === 4);


var obj_B = {};


assert (obj_B.hasOwnProperty (wrap) === false);
assert (toprimitive_called === 5);


Object.defineProperty (obj_B, wrap, {
  value: -1,
  enumerable: false,
  configurable: true,
  writable: true
});
assert (toprimitive_called === 6);

assert (obj_B[sym] === -1);


var desc = Object.getOwnPropertyDescriptor (obj_B, wrap);
assert (toprimitive_called === 7);

assert (desc.value === -1);
assert (desc.enumerable === false);
assert (desc.configurable === true);
assert (desc.writable === true);


assert (Reflect.get (obj_B, wrap) === -1);
assert (toprimitive_called === 8);


assert (Reflect.deleteProperty (obj_B, wrap) === true);
assert (toprimitive_called === 9);


assert (Reflect.has (obj_B, wrap) === false);
assert (toprimitive_called === 10);


Reflect.defineProperty (obj_B, wrap, {
  value: 50,
  enumerable: false,
  configurable: true,
  writable: true
});

assert (toprimitive_called === 11);


var desc_B = Reflect.getOwnPropertyDescriptor (obj_B, wrap);
assert (toprimitive_called === 12);

assert (desc_B.value === 50);
assert (desc_B.enumerable === false);
assert (desc_B.configurable === true);
assert (desc_B.writable === true);


delete obj_B[wrap];
assert (toprimitive_called === 13);


assert (obj_B[wrap] === undefined);
assert (toprimitive_called === 14);


var obj_C = {
    [wrap]: function() { return 100; }
};
assert (toprimitive_called === 15);
assert (obj_C[sym]() === 100);


var obj_D = {
    get [wrap] () { return 150; },
    set [wrap] (value) { }
};
assert (toprimitive_called === 17);
assert (obj_D[sym] === 150);
