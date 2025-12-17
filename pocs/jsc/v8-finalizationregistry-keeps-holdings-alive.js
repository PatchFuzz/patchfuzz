print("./resources/v8-mjsunit.js", "caller relative");

let cleanup_called = false;
let holdings_list = [];
let cleanup = function(holdings) {
  print(cleanup_called);
  holdings_list.push(holdings);
  cleanup_called = true;
}

let fg = new FinalizationRegistry(cleanup);
let o1 = {};
let holdings = {'a': 'this is the holdings object'};





(() => {fg.register(o1, holdings);})()

gc();
print(cleanup_called);


(() => {o1 = null;})()



holdings = null;
gc();
print(cleanup_called);

let timeout_func = function() {
  print(cleanup_called);
  print(holdings_list.length, 1);
  print(holdings_list[0].a, "this is the holdings object");
}

setTimeout(timeout_func, 0);
