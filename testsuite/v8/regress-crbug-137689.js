




























function getter() { return 10; }
function setter(v) { }
function getter2() { return 20; }

var o = {};
var o2 = {};

Object.defineProperty(o, "foo", { get: getter, configurable: true });
Object.defineProperty(o2, "foo", { get: getter, configurable: true });
assertTrue(%HaveSameMap(o, o2));

Object.defineProperty(o, "bar", { get: getter2 });
Object.defineProperty(o2, "bar", { get: getter2 });
assertTrue(%HaveSameMap(o, o2));

Object.defineProperty(o, "foo", { set: setter, configurable: true });
Object.defineProperty(o2, "foo", { set: setter, configurable: true });
assertTrue(%HaveSameMap(o, o2));
