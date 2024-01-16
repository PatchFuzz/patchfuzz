













var regexp = /[0-9]+/g;
var str = '2016-01-02';
var num = 12131233;


var result = regexp[Symbol.match](str);
assert(result.toString() === "2016,01,02");

regexp = /[0-5]+/g;
result = regexp[Symbol.match](str);
assert(result.toString() === "201,01,02");

regexp = /[0-1]+/g;
result = regexp[Symbol.match](str);
assert(result.toString() === "01,01,0");

regexp = /([0-9]+)-([0-9]+)-([0-9]+)/g
result = regexp[Symbol.match](str);
assert(result.toString() === "2016-01-02");


regexp = /[0-9]+/g;
result = regexp[Symbol.match](num);
assert(result.toString() === "12131233");


result = regexp[Symbol.match]('');
assert(result === null);


result = regexp[Symbol.match](undefined);
assert(result === null);


regexp = 12;

try {
  result = regexp[Symbol.match](str);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


class RegExpSub extends RegExp {
  [Symbol.match](str) {
    var result = RegExp.prototype[Symbol.match].call(this, str);
    if (result) {
      return "VALID";
    }
    else
    {
      return "INVALID";
    }
  }
}

var regexp1 = new RegExpSub('([0-9]+)-([0-9]+)-([0-9]+)');
result = regexp1[Symbol.match](str);
assert(result === "VALID");

var o = {
  lastIndex: 0,
  global: true,
  exec: function () {
    if (this.lastIndex === 0)
    {
      this.lastIndex = 1;
      return {0: 3.14, index: 2};
    }

    return null;
  }
}

var result = RegExp.prototype[Symbol.match].call(o, "asd");
assert(result.length === 1);
assert(typeof result[0] === "string");
assert(result[0] === "3.14");
