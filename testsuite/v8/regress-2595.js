




























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
assertEquals('p', F(o));
assertEquals('p', F(o));
assertEquals("u", F(u));
assertEquals("p", F(o));
assertEquals("u", F(u));



%OptimizeFunctionOnNextCall(F);
assertEquals("p", F(o));


o.f = function() {
  return 'o';
};
assertEquals("o", F(o));
