;

new class foo extends Array {
  e = function() {}
}

source = `new class bar extends Promise { e = function() {} }`;

print(() => eval(source), TypeError);

class Base {
  constructor() {
    return new Proxy({}, {});
  }
}

new class prox extends Base {
  e = function () {}
}
