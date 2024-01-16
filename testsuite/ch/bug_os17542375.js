






function foo() {
   var r = {};
   var b = {};
   var a = {};
   a.$ = r;

   function foo1() {
   }
   function foo2() {
   }
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
    }, b || (a.jQuery = a.$ = r), r
}

foo();
console.log('pass');
