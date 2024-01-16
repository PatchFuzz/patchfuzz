






load("./resources/v8-mjsunit.js", "caller relative");

let cleanup0_call_count = 0;
let cleanup0_0_holdings_count = 0;
let cleanup0_1_holdings_count = 0;

let cleanup1_call_count = 0;
let cleanup1_0_holdings_count = 0;
let cleanup1_1_holdings_count = 0;

let cleanup0 = function(holdings) {
  if (holdings[holdings.length - 1] == "0")
    ++cleanup0_0_holdings_count;
  else
    ++cleanup0_1_holdings_count;
  ++cleanup0_call_count;
}

let cleanup1 = function(holdings) {
  if (holdings[holdings.length - 1] == "0")
    ++cleanup1_0_holdings_count;
  else
    ++cleanup1_1_holdings_count;
  ++cleanup1_call_count;
}

let fg0 = new FinalizationRegistry(cleanup0);
let fg1 = new FinalizationRegistry(cleanup1);


(function() {
  for (let i = 0; i < 1000; ++i) {
    
    let objects = [];
    objects[0] = {};
    objects[1] = {};

    fg0.register(objects[0], "holdings0-0");
    fg1.register(objects[1], "holdings1-0");

    
    objects = [];
  }
})();


gc();





(function() {
  for (let i = 0; i < 1000; ++i) {
    let objects = [];
    objects[0] = {};
    objects[1] = {};
    fg0.register(objects[0], "holdings0-1");
    fg1.register(objects[1], "holdings1-1");
    objects = [];
  }
})();

gc();

let timeout_func = function() {
  assertNotEquals(0, cleanup0_call_count);
  assertNotEquals(0, cleanup0_0_holdings_count);
  assertNotEquals(0, cleanup0_1_holdings_count);
  assertNotEquals(0, cleanup1_call_count);
  assertNotEquals(0, cleanup1_0_holdings_count);
  assertNotEquals(0, cleanup1_0_holdings_count);
}


setTimeout(timeout_func, 0);
