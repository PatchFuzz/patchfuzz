































function mkFail(message) {
  return function () { assertUnreachable(message); }
}

Object.defineProperty(Object.prototype, "foo",
                      {get: mkFail("oget"), set: mkFail("oset")});
Object.defineProperty(Array.prototype, "2",
                      {get: mkFail("aget"), set: mkFail("aset")});

function inFunction() {
  for (var i = 0; i < 10; i++) {
    
    var ja = JSON.parse('[1,2,3,4]');
    var jo = JSON.parse('{"bar": 10, "foo": 20}')
    var jop = JSON.parse('{"bar": 10, "__proto__": { }, "foo": 20}')
    var a = [1,2,3,4];
    var o = { bar: 10, foo: 20 };
    var op = { __proto__: { set bar(v) { assertUnreachable("bset"); } },
               bar: 10 };
  }
}

for (var i = 0; i < 10; i++) {
  
  var ja = JSON.parse('[1,2,3,4]');
  var jo = JSON.parse('{"bar": 10, "foo": 20}')
  var jop = JSON.parse('{"bar": 10, "__proto__": { }, "foo": 20}')
  var a = [1,2,3,4];
  var o = { bar: 10, foo: 20 };
  var op = { __proto__: { set bar(v) { assertUnreachable("bset"); } },
             bar: 10 };
  
  inFunction();
}
