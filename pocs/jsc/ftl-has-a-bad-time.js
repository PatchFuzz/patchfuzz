function foo(p) {
    return p ? [42] : null;
}

noInline(foo);


for (var i = 0; i < 100; ++i)
    foo(true);


var array = new Array();
Array.prototype.__defineSetter__("0", function() { });


for (var i = 0; i < testLoopCount; ++i)
    foo(false);

