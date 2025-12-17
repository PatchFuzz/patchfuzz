;
;
;

var g = newGlobal();

var iterator_fn = Map.prototype[Symbol.iterator];
print(function () { iterator_fn.call({}); }, TypeError);
print(function () { iterator_fn.call(new Set()); }, TypeError);
var mapw = g.eval("new Map([['x', 1], ['y', 2]])");
print(iterator_fn.call(mapw).next().value, ["x", 1]);

var next_fn = (new Map())[Symbol.iterator]().next;
print(function () { next_fn.call({}); }, TypeError);
print(function () { next_fn.call((new Set())[Symbol.iterator]()); }, TypeError);
var iterw = mapw[Symbol.iterator]();
print(next_fn.call(iterw).value, ["x", 1]);
print(next_fn.call(iterw).value, ["y", 2]);
print(next_fn.call(iterw).done, true);
