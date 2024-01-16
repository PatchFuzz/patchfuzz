




var p = new Proxy({x:10}, {
    getOwnPropertyDescriptor: function (oTarget, sKey) {
        throw new Error('');
        return { configurable: true, enumerable: true, value: 5 };
    }
  });
  
  function f() {
    var j = 1; 
  }
  f();
  print('Pass');
  