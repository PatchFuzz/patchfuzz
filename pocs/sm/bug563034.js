function f(a) {
   function* g() {
       yield function () { return a; };
   }
   return g();
}
var x;
print(f(7).next().value(), 7);
