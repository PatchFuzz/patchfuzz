













var target = function() {};
var handler = {
    get() {
        if ($);
    }
};

var o = new Proxy(target, handler);

try {
  Reflect.construct(Function, ['c'], o);
  assert(false);  
} catch (e) {
  assert(e instanceof ReferenceError);
}
