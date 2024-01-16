








WScript.Echo("Test 1:");
function SimpleObject1() {
    this.x = 0;
}

SimpleObject1.prototype = { p: 10 };

function test1(forceBailout) {
    var o = new SimpleObject1(forceBailout ? SimpleObject1.prototype = { q: 11 } : 0);
    return o;
}

var o = test1(false);
WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + " }");

var o = test1(false);
WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + " }");

o = test1(true);
WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + " }");

for (var i = 0; i < 10; i++) {
    o = test1(false);
    WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + " }");
}
WScript.Echo("");



WScript.Echo("Test 2:");
function SimpleObject2() {
    this.x = 0;
}

SimpleObject2.prototype = { p: 10 };

function test2(forceBailout) {
    var o = new SimpleObject2(forceBailout ? Object.defineProperty(SimpleObject2.prototype, "x", { value: 12, writable: false }) : 0);
    return o;
}

var o = test2(false);
WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + " }");

var o = test2(false);
WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + " }");

o = test2(true);
WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + " }");

for (var i = 0; i < 10; i++) {
    o = test2(false);
    WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + " }");
}
WScript.Echo("");



WScript.Echo("Test 3:");
function SimpleObject3() {
    this.x = 0;
}

SimpleObject3.prototype = { p: 10 };

function test3(forceBailout) {
    var o = new SimpleObject3(forceBailout ? Object.defineProperty(SimpleObject3.prototype, "y", { value: 12, writable: false }) : 0);
    o.y = 1;
    return o;
}

var o = test3(false);
WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + ", y: " + o.y + " }");

var o = test3(false);
WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + ", y: " + o.y + " }");

o = test3(true);
WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + ", y: " + o.y + " }");

for (var i = 0; i < 10; i++) {
    o = test3(false);
    WScript.Echo("{ p: " + o.p + ", q: " + o.q + ", x: " + o.x + ", y: " + o.y + " }");
}

WScript.Echo("");
