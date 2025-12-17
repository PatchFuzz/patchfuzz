(function() {
  function store(x) { x[0] = 0; }
  store([]);
  var c = /x/;
  store(c);
  function get_hole() {
    var b = /x/;
    store(b);
    return b[1];
  }
  print(undefined, get_hole());
  print(undefined, get_hole());
})();

(function() {
  function store(x) { x[0] = 0; }
  store([]);
  var c = new Date();
  store(c);
  function get_hole() {
    var b = new Date();
    store(b);
    return b[1];
  }
  print(undefined, get_hole());
  print(undefined, get_hole());
})();

(function() {
  function store(x) { x[0] = 0; }
  store([]);
  var c = new Number(1);
  store(c);
  function get_hole() {
    var b = new Number(1);
    store(b);
    return b[1];
  }
  print(undefined, get_hole());
  print(undefined, get_hole());
})();

(function() {
  function store(x) { x[0] = 0; }
  store([]);
  var c = new Boolean();
  store(c);
  function get_hole() {
    var b = new Boolean();
    store(b);
    return b[1];
  }
  print(undefined, get_hole());
  print(undefined, get_hole());
})();

(function() {
  function store(x) { x[0] = 0; }
  store([]);
  var c = new Map();
  store(c);
  function get_hole() {
    var b = new Map();
    store(b);
    return b[1];
  }
  print(undefined, get_hole());
  print(undefined, get_hole());
})();

(function() {
  function store(x) { x[0] = 0; }
  store([]);
  var c = new Set();
  store(c);
  function get_hole() {
    var b = new Set();
    store(b);
    return b[1];
  }
  print(undefined, get_hole());
  print(undefined, get_hole());
})();

(function() {
  function store(x) { x[0] = 0; }
  store([]);
  var c = new WeakMap();
  store(c);
  function get_hole() {
    var b = new WeakMap();
    store(b);
    return b[1];
  }
  print(undefined, get_hole());
  print(undefined, get_hole());
})();

(function() {
  function store(x) { x[0] = 0; }
  store([]);
  var c = new WeakSet();
  store(c);
  function get_hole() {
    var b = new WeakSet();
    store(b);
    return b[1];
  }
  print(undefined, get_hole());
  print(undefined, get_hole());
})();
