





load("./resources/v8-mjsunit.js", "caller relative");

let cleanup_called = false;
let holdings_list = [];
let cleanup = function(holdings) {
  assertFalse(cleanup_called);
  holdings_list.push(holdings);
  cleanup_called = true;
}

let fg = new FinalizationRegistry(cleanup);
let s1 = Symbol();
let holdings = {'a': 'this is the holdings object'};





(() => {fg.register(s1, holdings);})()

gc();
assertFalse(cleanup_called);


(() => {s1 = null;})()



holdings = null;
gc();
assertFalse(cleanup_called);

let timeout_func = function() {
  assertTrue(cleanup_called);
  assertEquals(holdings_list.length, 1);
  assertEquals(holdings_list[0].a, "this is the holdings object");
}

setTimeout(timeout_func, 0);
