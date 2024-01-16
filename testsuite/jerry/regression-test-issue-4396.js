













function demo() {
}

var proxy = new Proxy(demo, {});
var weakset = new WeakSet();


weakset.add(proxy);
