













var split = RegExp.prototype[Symbol.split];

try {
  split.call (0, "string");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  split.call (new RegExp(), {
    toString: () => {
      throw "abrupt string"
    }
  });
  assert (false);
} catch (e) {
  assert (e === "abrupt string");
}

try {
  var o = {};
  o.constructor = "ctor";
  split.call (o, "str");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  var o = {};
  var c = {};
  o.constructor = c;
  Object.defineProperty (c, Symbol.species, { get: function () { throw "abrupt species";} });

  split.call (o, "str");
  assert (false);
} catch (e) {
  assert (e === "abrupt species");
}

try {
  split.call ({
    get flags() {
      throw "abrupt flags";
    }
  }, "string");
  assert (false);
} catch (e) {
  assert (e === "abrupt flags");
}

try {
  split.call ({ toString: function () { return "s"; }, flags: "g"},
              "string",
              { valueOf: function () { throw "abrupt limit"; } });
  assert (false);
} catch (e) {
  assert (e === "abrupt limit");
}

var exec = RegExp.prototype.exec;

try {
  Object.defineProperty(RegExp.prototype, "exec", { get : function() { throw "abrupt get exec"; }})
  split.call ({ toString: function () { return "s"; }, flags: "g"},
              "string")
  assert (false);
} catch (e) {
  assert (e === "abrupt get exec");
}

try {
  Object.defineProperty(RegExp.prototype, "exec", { value: function (str) {
    this.lastIndex++;
    return { get length() { throw "abrupt match length"; }}
  }});
  split.call ({ toString: function () { return "s"; }, flags: "g"},
              "string");
  assert (false);
} catch (e) {
  assert (e === "abrupt match length");
}

try {
  Object.defineProperty(RegExp.prototype, "exec", { value: function (str) {
    this.lastIndex++;
    return { length: 2, get 1() { throw "abrupt capture"; }}
  }});
  split.call ({ toString: function () { return "s"; }, flags: "g"},
              "string");
  assert (false);
} catch (e) {
  assert (e === "abrupt capture");
}

Object.defineProperty(RegExp.prototype, "exec", { value: function (str) {
  this.lastIndex = 10;
  return { };
}});

var result = split.call ({flags: "g"}, "string");

assert(result.length === 2)
assert(result[0] === "")
assert(result[1] === "")
