





let target = {0: 42, a: 42};

let proxy = new Proxy(target, {
  has: function() {
    return false;
  }
});

Object.preventExtensions(target);

function testLookupElementInProxy() {
  0 in proxy;
}



;
%PrepareFunctionForOptimization(testLookupElementInProxy);
assertThrows(testLookupElementInProxy, TypeError);
assertThrows(testLookupElementInProxy, TypeError);
%OptimizeFunctionOnNextCall(testLookupElementInProxy);
assertThrows(testLookupElementInProxy, TypeError);

function testLookupPropertyInProxy() {
  "a" in proxy;
};
%PrepareFunctionForOptimization(testLookupPropertyInProxy);
assertThrows(testLookupPropertyInProxy, TypeError);
assertThrows(testLookupPropertyInProxy, TypeError);
%OptimizeFunctionOnNextCall(testLookupPropertyInProxy);
assertThrows(testLookupPropertyInProxy, TypeError);
