



(function () {
  var o = new String("ab");
  function store(o, i, v) { o[i] = v; }
  function load(o, i) { return o[i]; }

  
  store(o, 2, 10);
  load(o, 2);

  store(o, 0, 100);
  assertEquals("a", load(o, 0));
})();

(function () {
  var o = {__proto__: new String("ab")};
  function store(o, i, v) { o[i] = v; }
  function load(o, i) { return o[i]; }

  
  store(o, 2, 10);
  load(o, 2);

  store(o, 0, 100);
  assertEquals("a", load(o, 0));
})();

(function () {
  "use strict";
  var o = {__proto__: {}};
  function store(o, i, v) { o[i] = v; }

  
  store(o, 0, 100);
  o.__proto__.__proto__ = new String("bla");
  assertThrows(function () { store(o, 1, 100) });
})();
