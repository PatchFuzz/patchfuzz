var o = {y: function () {}};
var a = [o, o, o, o, o, o, o, o, o];
a[7] = {};
try {
    for (var i = 0; i < 9; i++)
        a[i].y();
} catch (exc) {
    assertEq(exc.name, "TypeError"); 
}
