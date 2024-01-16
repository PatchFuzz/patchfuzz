



function setup_proxy() {
  
  Function.prototype.__proto__ = new Proxy(setup_proxy, {
    get: async (target, key) => {
      console.log(key);
    }
  });
}

setup_proxy();

function asm(global, imports) {
  'use asm';
  
  var bar = +imports.bar;
  function f() {}
  return {f: f};
}

assertThrows(() => asm(undefined, {bar: setup_proxy}), TypeError);
