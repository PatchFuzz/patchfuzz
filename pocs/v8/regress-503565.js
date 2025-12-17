function f() {}
function g() {}
function h() {
    g()
}
(function() {
    eval("\
        \"use strict\";\
        g = (function(x) {\
            +Math.log(+Math.log((+(+x>0)), f(Math.log())))\
        })\
    ")
})()
for (var j = 0; j < 999; j++) {
    h()
}
