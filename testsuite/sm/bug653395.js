




try {
    (function () {
        __proto__ = new Uint32Array()
    }())
} catch (e) {}(function () {
})()
eval("\
function testAtomize() {\
    x = {};\
    for (var i = false ; i < 65536; ++i)\
        x[String.fromCharCode(i)] = 1;\
}\
new testAtomize()(testAtomize(), 65536);\
");
