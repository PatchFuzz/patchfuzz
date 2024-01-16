





load("./resources/v8-mjsunit.js", "caller relative");

let called = false;
let cleanup = function(holdings) {
  
  if (holdings == 1) {
    let success = fg.unregister(key2);
    assertTrue(success || called);
  } else {
    assertSame(holdings, 2);
    let success = fg.unregister(key1);
    assertTrue(success || called);
  }
  called = true;
}

let fg = new FinalizationRegistry(cleanup);
let key1 = {"k": "first key"};
let key2 = {"k": "second key"};



(function() {
    for (let i = 0; i < 1000; ++i) {
        let object1 = {};
        fg.register(object1, 1, key1);
        let object2 = {};
        fg.register(object2, 2, key2);
    }
})();


gc();
assertFalse(called);


let timeout_func = function() {
    assertTrue(called);
}

setTimeout(timeout_func, 0);
