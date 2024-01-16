
function f() {
   f.apply(null, new Array(20000));
}
f()
