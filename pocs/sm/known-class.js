var IsRegExpObject = getSelfHostedValue("IsRegExpObject");
var IsCallable = getSelfHostedValue("IsCallable");
var NewArrayIterator = getSelfHostedValue("NewArrayIterator");
var GuardToArrayIterator = getSelfHostedValue("GuardToArrayIterator");

function array() {
    var a = [0];
    print(Array.isArray(a), true);
    print(typeof a, "object");
    print(IsRegExpObject(a), false);
    print(IsCallable(a), false);
}

function array2(x) {
    var a;
    if (x) {
        a = [0];
    } else {
        a = [1];
    }
    print(Array.isArray(a), true);
    print(typeof a, "object");
    print(IsRegExpObject(a), false);
    print(IsCallable(a), false);
}

function object() {
    var o = {a: 1};
    print(Array.isArray(o), false);
    print(typeof o, "object");
    print(IsRegExpObject(o), false);
    print(IsCallable(o), false);
}

function object2(x) {
    var o;
    if (x) {
        o = {a: 1};
    } else {
        o = {b: 1};
    }
    print(Array.isArray(o), false);
    print(typeof o, "object");
    print(IsRegExpObject(o), false);
    print(IsCallable(o), false);
}

function mixed(x) {
    var o;
    if (x) {
        o = [1];
    } else {
        o = {a: 1};
    }
    print(Array.isArray(o), x);
    print(typeof o, "object");
    print(IsRegExpObject(o), false);
    print(IsCallable(o), false);
}

function lambda() {
    function f() {}
    print(Array.isArray(f), false);
    print(typeof f, "function");
    print(IsRegExpObject(f), false);
    print(IsCallable(f), true);
}

function arrow() {
    var f = () => {};
    print(Array.isArray(f), false);
    print(typeof f, "function");
    print(IsRegExpObject(f), false);
    print(IsCallable(f), true);
}

function regexp() {
    var r = /a/;
    print(Array.isArray(r), false);
    print(typeof r, "object");
    print(IsRegExpObject(r), true);
    print(IsCallable(r), false);
}

function regexp2(x) {
    var a;
    if (x) {
        a = /a/;
    } else {
        a = /b/;
    }
    print(Array.isArray(a), false);
    print(typeof a, "object");
    print(IsRegExpObject(a), true);
    print(IsCallable(a), false);
}

function iterator() {
    var i = NewArrayIterator();
    print(Array.isArray(i), false);
    print(typeof i, "object");
    print(IsRegExpObject(i), false);
    print(IsCallable(i), false);
    print(GuardToArrayIterator(i), i);
}

var b = true;
for (var i = 0; i < 1e4; i++) {
    array();
    array2(b);
    object();
    object2(b);
    mixed(b);
    lambda();
    arrow();
    regexp()
    regexp2(b);
    iterator();

    b = !b;
}
