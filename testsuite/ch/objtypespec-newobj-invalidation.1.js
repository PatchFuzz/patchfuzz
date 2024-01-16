







WScript.Echo("Test 1:");

var SimpleObject1 = function () {
    this.a = 0;
    this.b = 1;
}

var proto1a = { p: 100 };
var proto1b = { p: 200 };

SimpleObject1.prototype = proto1a;

var test1 = function () {
    var o = new SimpleObject1();
    o.x = 10;
    o.y = 11;
    return o;
}

var oa1 = new Array();


oa1.push(test1());
oa1.push(test1());


oa1.push(test1());


SimpleObject1.prototype = proto1b;

oa1.push(test1());




oa1.push(test1());
oa1.push(test1());
oa1.push(test1());
oa1.push(test1());
oa1.push(test1());

for (var i = 0; i < oa1.length; i++) {
    var o = oa1[i];
    WScript.Echo("oa1[" + i + "]: " + "{ a: " + o.a + ", b: " + o.b + ", p: " + o.p + ", x: " + o.x + ", y: " + o.y + " }");
}
WScript.Echo("");



WScript.Echo("Test 2:");

var SimpleObject2 = function () {
    this.a = 0;
    this.b = 1;
    this.c = 2;
}

var proto2a = { p: 100 };

SimpleObject2.prototype = proto2a;

var test2 = function () {
    var o = new SimpleObject2();
    o.x = 10;
    o.y = 11;
    return o;
}

var oa2 = new Array();


oa2.push(test2());
oa2.push(test2());


oa2.push(test2());



Object.defineProperty(proto2a, "a", { value: 101, writable: false });

oa2.push(test2());



oa2.push(test2());
oa2.push(test2());
oa2.push(test2());
oa2.push(test2());
oa2.push(test2());

for (var i = 0; i < oa2.length; i++) {
    var o = oa2[i];
    WScript.Echo("oa2[" + i + "]: " + "{ a: " + o.a + ", b: " + o.b + ", c: " + o.c + ", p: " + o.p + ", x: " + o.x + ", y: " + o.y + " }");
}
WScript.Echo("");



WScript.Echo("Test 3:");

var SimpleObject3 = function () {
    this.a = 0;
    this.b = 1;
}

var proto3a = { p: 100 };

SimpleObject3.prototype = proto3a;

var test3 = function () {
    var o = new SimpleObject3();
    o.x = 10;
    o.y = 11;
    return o;
}

var oa3 = new Array();


oa3.push(test3());
oa3.push(test3());


oa3.push(test3());



Object.defineProperty(proto3a, "x", { value: 102, writable: false });

oa3.push(test3());



oa3.push(test3());
oa3.push(test3());
oa3.push(test3());
oa3.push(test3());
oa3.push(test3());

for (var i = 0; i < oa3.length; i++) {
    var o = oa3[i];
    WScript.Echo("oa3[" + i + "]: " + "{ a: " + o.a + ", b: " + o.b + ", p: " + o.p + ", x: " + o.x + ", y: " + o.y + " }");
}
WScript.Echo("");


WScript.Echo("Test 4:");

var SimpleObject4 = function () {
    this.a = this.p + 0;
    this.b = this.p + 1;
    this.c = this.p + 2;
    this.d = this.p + 3;
    this.e = this.p + 4;
    this.f = this.p + 5;
    this.g = this.p + 6;
    this.h = this.p + 7;
    this.i = this.p + 8;
    this.j = this.p + 9;
}

var proto4a = { p: 100 };
var proto4b = Object.create(proto4a);

SimpleObject4.prototype = proto4b;

var test4 = function () {
    var o = new SimpleObject4();
    o.x = o.p + 10;
    o.y = o.p + 11;
    return o;
}

var oa4 = new Array();


oa4.push(test4());
oa4.push(test4());


oa4.push(test4());


proto4b.p = 200;

oa4.push(test4());





oa4.push(test4());
oa4.push(test4());
oa4.push(test4());
oa4.push(test4());
oa4.push(test4());

for (var i = 0; i < oa4.length; i++) {
    var o = oa4[i];
    WScript.Echo("oa4[" + i + "]: " + "{ a: " + o.a + ", b: " + o.b + ", c: " + o.c + ", i: " + o.i + ", j: " + o.j + ", p: " + o.p + ", x: " + o.x + ", y: " + o.y + " }");
}
WScript.Echo("");
