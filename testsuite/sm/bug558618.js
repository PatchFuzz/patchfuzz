



function f() {
    this.search = function(a, b, c) {
        arguments[3] = { }
        arguments.length = 4;
        for (var i = 0; i < 100; i++) {
            print(arguments[3]);
        }
    }
}
var o = new f();
o.search({x: -1, y: -1, w: 100600, h: 100600});
