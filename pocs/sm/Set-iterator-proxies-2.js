;
;

var g = newGlobal();

var iterator_fn = Set.prototype[Symbol.iterator];
print(function () { iterator_fn.call({}); }, TypeError);
print(function () { iterator_fn.call(new Map()); }, TypeError);
var setw = g.eval("new Set(['x', 'y'])");
print(iterator_fn.call(setw), "x");

var next_fn = (new Set())[Symbol.iterator]().next;
print(function () { next_fn.call({}); }, TypeError);
print(function () { next_fn.call((new Map())[Symbol.iterator]()); }, TypeError);
var iterw = setw[Symbol.iterator]();
print(next_fn.call(iterw), "x", false);
print(next_fn.call(iterw), "y", false);
print(next_fn.call(iterw), undefined, true);
