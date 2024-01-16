





var g = 0;
g = function() {}

function f() {
  var r = /[abc]/i;  
  g(r);
}

%PrepareFunctionForOptimization(f);
f(); f(); %OptimizeFunctionOnNextCall(f);  

var re;
g = function(r) { re = r; }
f();  

assertNotEquals(undefined, re);
assertEquals("[abc]", re.source);
assertEquals("i", re.flags);
assertEquals(0, re.lastIndex);
assertArrayEquals(["a"], re.exec("a"));
assertArrayEquals(["A"], re.exec("A"));
assertNull(re.exec("d"));
