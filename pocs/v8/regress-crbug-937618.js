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
print(testLookupElementInProxy, TypeError);
print(testLookupElementInProxy, TypeError);
%OptimizeFunctionOnNextCall(testLookupElementInProxy);
print(testLookupElementInProxy, TypeError);

function testLookupPropertyInProxy() {
  "a" in proxy;
};
%PrepareFunctionForOptimization(testLookupPropertyInProxy);
print(testLookupPropertyInProxy, TypeError);
print(testLookupPropertyInProxy, TypeError);
%OptimizeFunctionOnNextCall(testLookupPropertyInProxy);
print(testLookupPropertyInProxy, TypeError);
