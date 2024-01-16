

load(libdir + "asserts.js");
load(libdir + "iteration.js");

var g = newGlobal();

function *gen3() { yield 1; yield 2; }
it = gen3();
g.eval("function *gen4() { yield 5; yield 6; }; var it4 = gen4();");


assertIteratorResult(it.next.call(g.it4), 5, false)


assertThrowsValue(() => it.throw.call(g.it4, 8), 8);


assertIteratorResult(it.return.call(g.it4, 8), 8, true);


try {
    it.next.call([]);
    assertEq(0, 1);
} catch (e) {
    assertEq(e.toString().includes("called on incompatible Array"), true);
}
