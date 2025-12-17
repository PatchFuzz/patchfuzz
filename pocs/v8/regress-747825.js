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

print(undefined, re);
print("[abc]", re.source);
print("i", re.flags);
print(0, re.lastIndex);
print(["a"], re.exec("a"));
print(["A"], re.exec("A"));
print(re.exec("d"));
