load(libdir + "asserts.js");

new class foo extends Array {
  e = function() {}
}

source = `new class bar extends Promise { e = function() {} }`;

assertThrowsInstanceOf(() => eval(source), TypeError);

class Base {
  constructor() {
    return new Proxy({}, {});
  }
}

new class prox extends Base {
  e = function () {}
}
