

function* g(n) { for (var i=0; i<n; i++) yield i; }
var GeneratorObjectPrototype = Object.getPrototypeOf(g).prototype;
var GeneratorObjectPrototype_next = GeneratorObjectPrototype.next;


var inner = g(20);
var n = 0;
for (let x of inner) {
    assertEq(x, n++);
    if (n == 1) {
        inner.next = function() { throw 'not reached'; };
    }
}
assertEq(n, 20);


var inner = g(20);
var n = 0;
for (let x of inner) {
    assertEq(x, n++);
    if (n == 1) {
        GeneratorObjectPrototype.next = function() { throw 'not reached'; };
    }
}
assertEq(n, 20);
