






























o = {};
o.__defineGetter__('foo', function() { throw 42; });
function f() {
 try {
   
   throw 42;
 } finally {
   
   
   
   
   try { o.foo; } catch(e) { };
   return;
 }
};
f();
