let a = Object.freeze({});
print(() => class C {[a.b = "foo"]() {}}, TypeError);
print(() => class C extends (a.c = null) {}, TypeError);
