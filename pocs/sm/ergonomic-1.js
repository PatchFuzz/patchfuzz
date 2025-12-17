class Base {
  constructor(o) {
    return o;
  }
}

class A extends Base {
  #x = 12;
  #y = 13;
  static has(o) {
    return A.evalStr(o, '#x in o');
  }

  static evalStr(o, str) {
    return eval(str);
  }
}

var obj = {};
print(A.has(obj), false);
new A(obj);
print(A.has(obj), true);

A.evalStr(obj, `#x in o in o`)  

function print(functionText) {
  let threw = false;
  let exception = undefined;
  try {
    A.evalStr({}, functionText)
  } catch (e) {
    exception = e;
    threw = true;
  }
  print(threw, true);
  print(exception instanceof SyntaxError, true);
}

print(`#x`);
print(`#x == undefined`);
print(`1 + #x in o`)
print(`#z in o`);

print(`for (#x in o) { return 1;}`)
print(`!#x in o`)
print(`+#x in o`)
print(`-#x in o`)
print(`~#x in o`)
print(`void #x in o`)
print(`typeof #x in o`)
print(`++#x in o`)
print(`--#x in o`)

print(`#x in #y in o`)
print(`{} instanceof #x in o`)
print(`10 > #x in o`)
var threw = true
try {
  eval(`class Async {
    #x;
    async func(o) {
      await #x in o;
    }
  }`);
  threw = false;
} catch (e) {
  print(e instanceof SyntaxError, true);
}
print(threw, true);
