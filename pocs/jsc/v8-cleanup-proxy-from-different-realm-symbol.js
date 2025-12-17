print("./resources/v8-mjsunit.js", "caller relative");
let Realm = { create: $.createRealm, eval: (r, s) => $.evalScript.call(r, s)  };

let r = Realm.create();

let cleanup = Realm.eval(r, "var stored_global; let cleanup = new Proxy(function() { stored_global = globalThis;}, {}); cleanup");
let realm_global_this = Realm.eval(r, "globalThis");

let fg = new FinalizationRegistry(cleanup);




(function() {
    for (let i = 0; i < 1000; ++i) {
        let symbol = Symbol();
        fg.register(symbol, "holdings");
    }
})();

gc();


let timeout_func = function() {
  let stored_global = Realm.eval(r, "stored_global;");
  print(stored_global, globalThis);
  print(stored_global, realm_global_this);
}

setTimeout(timeout_func, 0);
