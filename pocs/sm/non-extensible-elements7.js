"use strict";

;

function testNonExtensible() {
    var a = [1, 2, 3, , ,];
    Object.preventExtensions(a);
    for (var i = 0; i < 10; i++)
        a.length = 10;
    print(a.length, 10);
    for (var i = 0; i < 10; i++)
        a.length = 0;
    print(a.length, 0);
    print(a.toString(), "");
}
testNonExtensible();

function testSealed() {
    var a = [1, 2, 3, , ,];
    Object.seal(a);
    for (var i = 0; i < 10; i++)
        a.length = 10;
    print(a.length, 10);
    for (var i = 0; i < 10; i++)
        print(() => a.length = 0, TypeError);
    print(a.length, 3);
    print(a.toString(), "1,2,3");
}
testSealed();

function testFrozen() {
    var a = [1, 2, 3, , ,];
    Object.freeze(a);
    for (var i = 0; i < 10; i++)
        print(() => a.length = 10, TypeError);
    for (var i = 0; i < 10; i++)
        print(() => a.length = 0, TypeError);
    print(a.length, 5);
    print(a.toString(), "1,2,3,,");
}
testFrozen();
