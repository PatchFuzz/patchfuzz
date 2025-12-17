var p = {
  f: function() {
    return 'p';
  }
};
var o = Object.create(p);
o.x = true;
delete o.x;  

var u = {
  x: 0,
  f: function() {
    return 'u';
  }
};  

function F(x) {
  return x.f();
}




;
%PrepareFunctionForOptimization(F);
print('p', F(o));
print('p', F(o));
print("u", F(u));
print("p", F(o));
print("u", F(u));



%OptimizeFunctionOnNextCall(F);
print("p", F(o));


o.f = function() {
  return 'o';
};
print("o", F(o));
