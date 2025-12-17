var o = {
    gf: function* () {
        var _a = 'pas';
        function a() { return _a; }
        return eval('a()') + arguments[0];
    }
};

function test() {
    for (var i = 0; i < 3; i += 1) {
        var g = o.gf('sed');
        print(g.next().value);
    }
}

test();
