try { a = f();
} catch(e) {
}
var i = 0;
function f() {
   try {
     f();
   } catch(e) {
     i++;
     [];
   }
}
f();
f();
