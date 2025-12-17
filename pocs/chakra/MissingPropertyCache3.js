var SimpleObject = function () {
    this.a = 1;
    this.b = 2;
}

var p = {};
SimpleObject.prototype = p;

var o = new SimpleObject();

function test() {
    var a = o.a;
    var b = o.b;
    var m = o.m;
    print("o.m = " + m);
}


test();


test();


test();

p.m = 0;

test();

