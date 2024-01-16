



let a = Object.freeze({});
assertThrows(() => class C {[a.b = "foo"]() {}}, TypeError);
assertThrows(() => class C extends (a.c = null) {}, TypeError);
