(function() {
  function SetX(o, v) {
    o.x = v;
  }

  function SetY(o, v) {
    o.y = v;
  }

  var p = {};

  function Create() {
    var o = {__proto__:p, b:1, a:2};
    delete o.b;
    print(%HasFastProperties(o));
    return o;
  }

  for (var i = 0; i < 10; i++) {
    var o = Create();
    SetX(o, 13);
    SetY(o, 13);
  }

  Object.defineProperty(p, "x", {value:42, configurable: true, writable: false});

  for (var i = 0; i < 10; i++) {
    var o = Create();
    SetY(o, 13);
  }

  var o = Create();
  print(42, o.x);
  SetX(o, 13);
  print(42, o.x);
})();


(function() {
  var p1 = {a:10};
  Object.defineProperty(p1, "x", {value:42, configurable: true, writable: false});

  var p2 = {__proto__: p1, x:153};
  for (var i = 0; i < 2000; i++) {
    p1["p" + i] = 0;
    p2["p" + i] = 0;
  }
  print(%HasFastProperties(p1));
  print(%HasFastProperties(p2));

  function GetX(o) {
    return o.x;
  }
  function SetX(o, v) {
    o.x = v;
  }

  function Create() {
    var o = {__proto__:p2, b:1, a:2};
    return o;
  }

  for (var i = 0; i < 10; i++) {
    var o = Create();
    print(153, GetX(o));
    SetX(o, 13);
    print(13, GetX(o));
  }

  delete p2.x;
  print(%HasFastProperties(p1));
  print(%HasFastProperties(p2));

  var o = Create();
  print(42, GetX(o));
  SetX(o, 13);
  print(42, GetX(o));
})();
