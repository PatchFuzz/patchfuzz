













var func = function (number) {
  "use strict";
  number.foo = "";
};

var func2 = function (number) {
  "use strict";
  number.bar = "";
};

try {
  func(-334918463);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  Object.defineProperty(Number.prototype, "foo", { get : function() { throw ReferenceError("foo"); },
                                                   set : function(a) { throw ReferenceError("bar"); },
                                                 });
  func(-334918463);
  assert(false);
} catch (e) {
  assert(e instanceof ReferenceError);
  assert(e.message === "bar");
}

var setter_called = false;
Object.defineProperty(Number.prototype, "bar", { get : function() { assert(false) },
                                                 set : function(a) { setter_called = true; },
                                               });
func2(-334918463);
assert(setter_called === true);
