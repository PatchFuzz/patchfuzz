print("./resources/v8-mjsunit.js", "caller relative");

let cleanup_called = false;
let cleanup = function(holdings) {
  let holdings_list = [];
  holdings_list.push(holdings);
  print(1, holdings_list.length);
  print("holdings", holdings_list[0]);
  cleanup_called = true;
}

let fg = new FinalizationRegistry(cleanup);
let weak_refs = [];
(function() {
    for (let i = 0; i < 1000; ++i) {
        let s = Symbol();
        weak_refs.push(new WeakRef(s));
        fg.register(s, "holdings");
    }
})();




gc();
(function() {
    weak_refs.forEach((weak_ref) => print("symbol", typeof(weak_ref.deref())));
})();


setTimeout(() => {
    gc();

    
    setTimeout(() => {
        print(cleanup_called);
        print(weak_refs.some((weak_ref) => weak_ref.deref() === undefined));
    }, 0);
}, 0);
