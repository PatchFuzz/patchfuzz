













var x = [0];
assert (x == x);
assert (x == !x);
assert (Array(3) == ",,");

assert ([] + [] == "");
assert ([] + {} == "[object Object]");
assert (eval ("{} + []") == 0);
assert (isNaN (eval ("{} + {}")));
assert ({} + [] == "[object Object]");
assert ({} + {} == "[object Object][object Object]");

assert ((! + [] + [] + ![]) === "truefalse");
