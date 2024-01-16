

function assertThrows(str, error) {
  try {
    eval(str);
    assert(false);
  } catch (e) {
    if (typeof error === "function") {
      assert(e instanceof error);
    } else {
      assert(e === error)
    }
  }
}



var abruptTests = [
  ["undefined", TypeError], 
  ["{ get raw() { throw '5'; } }", '5'],
  ["{ raw : undefined }", TypeError], 
  ["{ raw : { get length() { throw '7.1'; } } }", '7.1'],
  ["{ raw : { length : { toString() { throw '7.2'; } } } }", '7.2'],
  ["{ raw : { length: 2, get '0'() { throw '12.b.1'} } }", '12.b.1'],
  ["{ raw : { length: 2, '0' : { toString() { throw '12.b.2';} } } }", '12.b.2'],
  ["{ raw : { length: 2, '0' : 1 } }, { toString() { throw '12.h';} }", '12.h'],
];

abruptTests.forEach(e => {
  assertThrows("String.raw(" + e[0] + ")", e[1]);
});


assert(String.raw`Hi\n${2+3}!` === 'Hi\\n5!');
assert(String.raw`Hi\u000A!` === 'Hi\\u000A!');

let name = 'Bob';
assert(String.raw`Hi\n${name}!` === "Hi\\nBob!");

let str = String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script');
assert(str === "foo5barJavaScriptbaz");

assert(String.raw({ raw: 'test' }, 0, 1, 2) === "t0e1s2t");

var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
assert(get + '' === "raw,length,0,1");

assert(String.raw`\\` == "\\\\")
assert(String.raw`\`` == "\\`")
assert(String.raw`\
\
` == "\\\n\\\n")
assert(String.raw`\ ` == "\\\u2029")
