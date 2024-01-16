





load("./resources/v8-mjsunit.js", "caller relative");

let cleanup_call_count1 = 0;
let cleanup_call_count2 = 0;
let cleanup = function(holdings) {
    if (holdings === "holdings1")
        ++cleanup_call_count1;
    else if (holdings === "holdings2")
        ++cleanup_call_count2;
    else
        throw new Error();
}

let fg1 = new FinalizationRegistry(cleanup);
let fg2 = new FinalizationRegistry(cleanup);




(function() {
    for (let i = 0; i < 1000; ++i) {
        let object1 = {};
        fg1.register(object1, "holdings1");

        let object2 = {};
        fg2.register(object2, "holdings2");
    }
    
})();


gc();
assertEquals(0, cleanup_call_count1);
assertEquals(0, cleanup_call_count2);


let timeout_func = function() {
    assertNotEquals(0, cleanup_call_count1);
    assertNotEquals(0, cleanup_call_count2);
}

setTimeout(timeout_func, 0);
