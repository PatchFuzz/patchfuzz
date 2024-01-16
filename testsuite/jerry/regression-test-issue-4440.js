













var handler = {
  get: function(target, key) {
    assert(typeof(target) === 'function');
    assert(key === 'dummy');
    return 42;
  }
};

try {
  throw new Proxy(Function(), handler);
  assert(false);
} catch (ex) {
  
  assert(typeof(ex) === 'function');
  assert(ex.dummy === 42);
}

try {
  throw new Proxy(EvalError(), { });
} catch (ex) {
  assert(ex instanceof EvalError);
}
