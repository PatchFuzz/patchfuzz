














var from = {};
Object.defineProperty (from, "abc", { enumerable: false, get: function() { return new String ("demo"); }})
assert ((from.abc + "") === "demo");

var out = Object.assign ({}, from);
assert (typeof (out.abc) === "undefined");


var called_get = false;
var called_keys = false;
var called_desc = false;
var called_extra_get = false;

var prox = new Proxy (from, {
  get: function (target, key) {
    assert (key === "ERR");
    called_get = true;
    throw new URIError("ERR");
  },
  ownKeys: function (target) {
    called_keys = true;
    return ["abc", "ERR"];
  },
  getOwnPropertyDescriptor: function(target, key) {
    if (key === "ERR") {
      called_desc = true;
      return { enumerable: true,
               get: function() {
                 
                 called_extra_get = true;
                 return "ABC";
               },
               configurable: true,
      };
    }
    return Reflect.getOwnPropertyDescriptor(target, key);
  },
});

try {
  var prox_out = Object.assign ({}, prox);
  assert (false);
} catch (ex) {
  assert (ex instanceof URIError);
}

assert (called_keys === true);
assert (called_desc === true);
assert (called_get === true);

assert (called_extra_get === false);


var result = Object.assign({}, RegExp);
