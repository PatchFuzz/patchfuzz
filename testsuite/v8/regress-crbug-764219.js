



(function() {
  function f(o) {
    o.x = 42;
  };

  f({});
  f(this);
  f(this);
})();

(function() {
  function f(o) {
    o.y = 153;
  };

  Object.setPrototypeOf(this, new Proxy({}, {}));
  f({});
  f(this);
  f(this);
})();

(function() {
  function f(o) {
    o.z = 153;
  };

  Object.setPrototypeOf(this, new Proxy({get z(){}}, {}));
  f({});
  f(this);
  f(this);
})();
