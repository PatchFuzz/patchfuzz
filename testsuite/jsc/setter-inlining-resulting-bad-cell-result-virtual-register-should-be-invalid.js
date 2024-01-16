


var code = `
function foo(o, p) {
    try {
        o.f = null;
    } catch (e) {
        return;
    }
}

for (var i = 0; i < 81; ++i) {
    var o = {};
    o.__defineSetter__('f', function (value) {
        this._f = value;
    });
    if (i & 1) {
        o['i' + i] = {};
    }
    foo(o);
}

var o = {};
o.__defineSetter__('f', function () {
    throw new Error();
});

foo(o);
`;


for (let i=0; i < 400; i++)
    runString(code);
