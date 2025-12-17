let o = {};
Reflect.set(o, "a", 0.1);

let o1 = {};
o1.a = {};

Reflect.set(o, "a", 0.1);
