





























function top() {
 function g(a, b) {}
 function t() {
   for (var i=0; i<1; ++i) {
     g(32768, g());
   }
 }
 t();
}
top();
