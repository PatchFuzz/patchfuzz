print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "[slot array] for-in and for-of loops have per iteration bindings for let and const variables",
        body: function () {
            var a = [];
            var i = 0;

            for (let x in { a: 1, b: 2, c: 3 }) {
                a[i++] = function () { return x; };
            }

            for (const x in { a: 1, b: 2, c: 3 }) {
                a[i++] = function () { return x; };
            }

            for (let x of [ 1, 2, 3 ]) {
                a[i++] = function () { return x; };
            }

            for (const x of [ 1, 2, 3 ]) {
                a[i++] = function () { return x; };
            }

            print('a', a[0](), "first for-let-in function captures x when it is equal to 'a'");
            print('b', a[1](), "second for-let-in function captures x when it is equal to 'b'");
            print('c', a[2](), "third for-let-in function captures x when it is equal to 'c'");

            print('a', a[3](), "first for-const-in function captures x when it is equal to 'a'");
            print('b', a[4](), "second for-const-in function captures x when it is equal to 'b'");
            print('c', a[5](), "third for-const-in function captures x when it is equal to 'c'");

            print(1, a[6](), "first for-let-of function captures x when it is equal to 1");
            print(2, a[7](), "second for-let-of function captures x when it is equal to 2");
            print(3, a[8](), "third for-let-of function captures x when it is equal to 3");

            print(1, a[9](), "first for-const-of function captures x when it is equal to 1");
            print(2, a[10](), "second for-const-of function captures x when it is equal to 2");
            print(3, a[11](), "third for-const-of function captures x when it is equal to 3");
        }
    },
    {
        name: "[activation object] for-in and for-of loops have per iteration bindings for let and const variables",
        body: function () {
            var a = [];
            var i = 0;

            for (let x in { a: 1, b: 2, c: 3 }) {
                a[i++] = function () { return eval("x"); };
            }

            for (const x in { a: 1, b: 2, c: 3 }) {
                a[i++] = function () { return eval("x"); };
            }

            for (let x of [ 1, 2, 3 ]) {
                a[i++] = function () { return eval("x"); };
            }

            for (const x of [ 1, 2, 3 ]) {
                a[i++] = function () { return eval("x"); };
            }

            print('a', a[0](), "first for-let-in function captures x when it is equal to 'a'");
            print('b', a[1](), "second for-let-in function captures x when it is equal to 'b'");
            print('c', a[2](), "third for-let-in function captures x when it is equal to 'c'");

            print('a', a[3](), "first for-const-in function captures x when it is equal to 'a'");
            print('b', a[4](), "second for-const-in function captures x when it is equal to 'b'");
            print('c', a[5](), "third for-const-in function captures x when it is equal to 'c'");

            print(1, a[6](), "first for-let-of function captures x when it is equal to 1");
            print(2, a[7](), "second for-let-of function captures x when it is equal to 2");
            print(3, a[8](), "third for-let-of function captures x when it is equal to 3");

            print(1, a[9](), "first for-const-of function captures x when it is equal to 1");
            print(2, a[10](), "second for-const-of function captures x when it is equal to 2");
            print(3, a[11](), "third for-const-of function captures x when it is equal to 3");
        }
    },
    {
        name: "const variables in for-in and for-of loops cannot be assigned",
        body: function () {
            print(function () { for (const x in { a: 1 }) { x = 1; } }, TypeError, "assignment to const known at parse time in for-in loop", "Assignment to const");
            print(function () { for (const x of [ 0 ]) { x = 1; } }, TypeError, "assignment to const known at parse time in for-of loop", "Assignment to const");

            print(function () { eval("for (const x in { a: 1 }) { x = 1; }"); }, TypeError, "assignment to const known at eval parse time in for-in loop", "Assignment to const");
            print(function () { for (const x in { a: 1 }) { eval("x = 1;"); } }, TypeError, "assignment to const only known at run time in for-in loop", "Assignment to const");
            print(function () { eval("for (const x of [ 0 ]) { x = 1; }"); }, TypeError, "assignment to const known at eval parse time in for-of loop", "Assignment to const");
            print(function () { for (const x of [ 0 ]) { eval("x = 1;"); } }, TypeError, "assignment to const only known at run time in for-of loop", "Assignment to const");
        }
    },
    {
        name: "Referring to a let or const loop variable in the collection expression of a for-in or for-of loop is a use before declaration",
        body: function () {
            print(function () { for (let x in { a: x }) { } }, ReferenceError, "for-let-in register use before declaration", "Use before declaration");
            print(function () { for (const x in { a: x }) { } }, ReferenceError, "for-const-in register use before declaration", "Use before declaration");
            print(function () { for (let x of [ x ]) { } }, ReferenceError, "for-let-of register use before declaration", "Use before declaration");
            print(function () { for (const x of [ x ]) { } }, ReferenceError, "for-const-of register use before declaration", "Use before declaration");

            print(function () { for (let x in { a: (() => x)() }) { } }, ReferenceError, "for-let-in slot array use before declaration", "Use before declaration");
            print(function () { for (const x in { a: (() => x)() }) { } }, ReferenceError, "for-const-in slot array use before declaration", "Use before declaration");
            print(function () { for (let x of [ (() => x)() ]) { } }, ReferenceError, "for-let-of slot array use before declaration", "Use before declaration");
            print(function () { for (const x of [ (() => x)() ]) { } }, ReferenceError, "for-const-of slot array use before declaration", "Use before declaration");

            print(function () { for (let x in { a: eval("x") }) { } }, ReferenceError, "for-let-in activation object use before declaration", "Use before declaration");
            print(function () { for (const x in { a: eval("x") }) { } }, ReferenceError, "for-const-in activation object use before declaration", "Use before declaration");
            print(function () { for (let x of [ eval("x") ]) { } }, ReferenceError, "for-let-of activation object use before declaration", "Use before declaration");
            print(function () { for (const x of [ eval("x") ]) { } }, ReferenceError, "for-const-of activation object use before declaration", "Use before declaration");

            var rx0 = null, rx1 = null;
            var ry0 = null, ry1 = null;

            function registerVars() {
                for (var x in { a: rx0 = x }) {
                    rx1 = x;
                }

                for (var y of [ ry0 = y ]) {
                    ry1 = y;
                }
            }
            registerVars();

            print(undefined, rx0, "register var declaration in for-in loop can be referenced before initialization");
            print('a', rx1, "sanity check that the for-in loop runs as expected");
            print(undefined, ry0, "register var declaration in for-of loop can be referenced before initialization");
            print(undefined, ry1, "sanity check that the for-of loop runs as expected");

            var sax0 = null, sax1 = null;
            var say0 = null, say1 = null;

            function slotArrayVars() {
                for (var x in { a: sax0 = x }) {
                    sax1 = (function () { return x; })();
                }

                for (var y of [ say0 = y ]) {
                    say1 = (function () { return y; })();
                }
            }
            slotArrayVars();

            print(undefined, sax0, "slot array var declaration in for-in loop can be referenced before initialization");
            print('a', sax1, "sanity check that the for-in loop runs as expected");
            print(undefined, say0, "slot array var declaration in for-of loop can be referenced before initialization");
            print(undefined, say1, "sanity check that the for-of loop runs as expected");

            var aox0 = null, aox1 = null;
            var aoy0 = null, aoy1 = null;

            function activationObjectVars() {
                for (var x in { a: aox0 = x }) {
                    aox1 = eval("x");
                }

                for (var y of [ aoy0 = y ]) {
                    aoy1 = eval("y");
                }
            }
            activationObjectVars();

            print(undefined, aox0, "slot array var declaration in for-in loop can be referenced before initialization");
            print('a', aox1, "sanity check that the for-in loop runs as expected");
            print(undefined, aoy0, "slot array var declaration in for-of loop can be referenced before initialization");
            print(undefined, aoy1, "sanity check that the for-of loop runs as expected");
        }
    },
    {
        name: "Capturing a let or const loop variable in the collection expression of a for-in or for-of loop still leads to a use before declaration",
        body: function () {
            var a = [], b = [];
            var i = 0, j = 0;

            for (let x in { a: a[i++] = () => x }) { b[j++] = () => x; }
            for (const x in { a: a[i++] = () => x }) { b[j++] = () => x; }
            for (let x of [ a[i++] = () => x ]) { b[j++] = () => x; }
            for (const x of [ a[i++] = () => x ]) { b[j++] = () => x; }

            for (let x in { a: a[i++] = () => eval("x") }) { b[j++] = () => eval("x"); }
            for (const x in { a: a[i++] = () => eval("x") }) { b[j++] = () => eval("x"); }
            for (let x of [ a[i++] = () => eval("x") ]) { b[j++] = () => eval("x"); }
            for (const x of [ a[i++] = () => eval("x") ]) { b[j++] = () => eval("x"); }

            print(a[0], ReferenceError, "for-let-in slot array capture use before declaration", "Use before declaration");
            print(a[1], ReferenceError, "for-const-in slot array capture use before declaration", "Use before declaration");
            print(a[2], ReferenceError, "for-let-of slot array capture use before declaration", "Use before declaration");
            print(a[3], ReferenceError, "for-const-of slot array capture use before declaration", "Use before declaration");

            print(a[4], ReferenceError, "for-let-in activation object capture use before declaration", "Use before declaration");
            print(a[5], ReferenceError, "for-const-in activation object capture use before declaration", "Use before declaration");
            print(a[6], ReferenceError, "for-let-of activation object capture use before declaration", "Use before declaration");
            print(a[7], ReferenceError, "for-const-of activation object capture use before declaration", "Use before declaration");

            print('a', b[0](), "sanity check for-let-in slot array capture body still initialized", "Use before declaration");
            print('a', b[1](), "sanity check for-const-in slot array capture body still initialized", "Use before declaration");
            print(a[2], b[2](), "sanity check for-let-of slot array capture body still initialized", "Use before declaration");
            print(a[3], b[3](), "sanity check for-const-of slot array capture body still initialized", "Use before declaration");

            print('a', b[4](), "sanity check for-let-in activation object capture body still initialized", "Use before declaration");
            print('a', b[5](), "sanity check for-const-in activation object capture body still initialized", "Use before declaration");
            print(a[6], b[6](), "sanity check for-let-of activation object capture body still initialized", "Use before declaration");
            print(a[7], b[7](), "sanity check for-const-of activation object capture body still initialized", "Use before declaration");
        }
    },
    {
        name: "[slot array] for loops have per iteration bindings for let variables",
        body: function () {
            var a = [];
            var i = 0;

            for (let x = 0; x < 3; x += 1) {
                a[i++] = function () { return x; };
            }

            print(0, a[0](), "first for-let function captures x when it is equal to 0");
            print(1, a[1](), "second for-let function captures x when it is equal to 1");
            print(2, a[2](), "third for-let function captures x when it is equal to 2");
        }
    },
    {
        name: "[activation object] for loops have per iteration bindings for let variables",
        body: function () {
            var a = [];
            var i = 0;

            for (let x = 0; x < 3; x += 1) {
                a[i++] = function () { return eval("x"); };
            }

            print(0, a[0](), "first for-let function captures x when it is equal to 0");
            print(1, a[1](), "second for-let function captures x when it is equal to 1");
            print(2, a[2](), "third for-let function captures x when it is equal to 2");
        }
    },
    {
        name: "for loops allow const loop variables but cannot assign to them anywhere including the increment expression", 
        body: function () {
            print(function () { for (const x = 0; x++ < 3; ) { } }, TypeError, "assignment to const known at parse time in the test expression", "Assignment to const");
            print(function () { for (const x = 0; x < 3; x += 1) { } }, TypeError, "assignment to const known at parse time in the increment expression", "Assignment to const");
            print(function () { for (const x = 0; x < 3; ) { x += 1; } }, TypeError, "assignment to const known at parse time in the body", "Assignment to const");

            print(function () { eval("for (const x = 0; x++ < 3; ) { }"); }, TypeError, "assignment to const known at eval parse time in the test expression", "Assignment to const");
            print(function () { for (const x = 0; eval("x++") < 3; ) { } }, TypeError, "assignment to const known at run time in the test expression", "Assignment to const");
            print(function () { eval("for (const x = 0; x < 3; x += 1) { }"); }, TypeError, "assignment to const known at eval parse time in the increment expression", "Assignment to const");
            print(function () { for (const x = 0; x < 3; eval("x += 1")) { } }, TypeError, "assignment to const known at run time in the increment expression", "Assignment to const");
            print(function () { eval("for (const x = 0; x < 3; ) { x += 1; }"); }, TypeError, "assignment to const known at eval parse time in the body", "Assignment to const");
            print(function () { for (const x = 0; x < 3; ) { eval("x += 1"); } }, TypeError, "assignment to const known at run time in the body", "Assignment to const");
        }
    },
    {
        name: "for loops have separate binding for the initializer expression for let variables",
        body: function () {
            var a = [];

            for (let x = (a[0] = () => x, 0); x < 1; x += 1) {
                x += 1;
                a[1] = () => x;
            }

            print(0, a[0](), "x captured in the initializer expression is a binding scoped only to the initializer expression");
            print(1, a[1](), "x captured in the initializer expression is a binding scoped only to the initializer expression");
        }
    },
    {
        name: "for loop per iteration binding includes the test and increment expressions and ends before the increment expression",
        body: function () {
            var t = [], ti = 0;
            var b = [], bi = 0;
            var i = [], ii = 0;
            var s = [], si = 0;

            for (let x = 0;
                 
                 t[ti++] = () => x,
                     s[si++] = y => x = y,
                     x < 2;
                 
                 i[ii++] = () => x,
                     x += 1) {
                
                b[bi++] = () => x;
            }

            print(0, t[0](), "Initially first test function captures first loop binding with value 0");
            print(0, b[0](), "Initially first body function captures first loop binding with value 0");
            print(1, i[0](), "Initially first increment function captures second loop binding with value 1");

            s[0]('a');

            print('a', t[0](), "Now first test function returns the new value of the first loop binding of x, 'a'");
            print('a', b[0](), "Now first body function returns the new value of the first loop binding of x, 'a'");
            print(1, i[0](), "But first increment function still returns 1 because it is a separate binding");

            print(1, t[1](), "Initially second test function captures second loop binding with value 1");
            print(1, b[1](), "Initially second body function captures second loop binding with value 1");
            print(2, i[1](), "Initially second increment function captures third loop binding with value 2");

            s[1]('b');

            print('b', i[0](), "And now first increment function returns 'b'");

            print('b', t[1](), "Now second test function returns the new value of the second loop binding of x, 'b'");
            print('b', b[1](), "Now second body function returns the new value of the second loop binding of x, 'b'");
            print(2, i[1](), "But second increment function still returns 2 because it is a separate binding");

            print(2, t[2](), "Initially third test function captures third loop binding with value 2");
            print(undefined, b[2], "There is no third body function because the loop terminated");
            print(undefined, i[2], "There is no third increment function because the loop terminated");

            s[2]('c');
            print('b', i[0](), "And now second increment function returns 'c'");

            print('b', t[1](), "Now third test function returns the new value of the third loop binding of x, 'c'");
        }
    },
    {
        name: "Destructuring adds the possibility of more than one loop variable -- quick smoke test",
        body: function () {
            var a = [];
            var i = 0;

            for (let [ x, y, z ] in { abc: 0, def: 1 }) {
                a[i++] = [ () => x, () => y, () => z ];
            }

            for (const { x, y, z } of [ { x: 1, y: 2, z: 3 }, { x: 4, y: 5, z: 6 } ]) {
                a[i++] = [ () => x, () => y, () => z ];
            }

            for (let [ x, y, z ] = [ 0, 1, 2 ];
                 x < 2;
                 [ x, y, z ] = [ x + 1, y + 2, z + 3 ]) {
                a[i++] = [ () => x, () => y, () => z ];
            }

            print('a', a[0][0](), "for-let-in array destructuring first x gets 'a' from 'abc'");
            print('b', a[0][1](), "for-let-in array destructuring first y gets 'b' from 'abc'");
            print('c', a[0][2](), "for-let-in array destructuring first z gets 'c' from 'abc'");

            print('d', a[1][0](), "for-let-in array destructuring second x gets 'd' from 'def'");
            print('e', a[1][1](), "for-let-in array destructuring second y gets 'e' from 'def'");
            print('f', a[1][2](), "for-let-in array destructuring second z gets 'f' from 'def'");

            print(1, a[2][0](), "for-const-of object destructuring first x gets 1 from x");
            print(2, a[2][1](), "for-const-of object destructuring first y gets 2 from y");
            print(3, a[2][2](), "for-const-of object destructuring first z gets 3 from z");

            print(4, a[3][0](), "for-const-of object destructuring second x gets 4 from x");
            print(5, a[3][1](), "for-const-of object destructuring second y gets 5 from y");
            print(6, a[3][2](), "for-const-of object destructuring second z gets 6 from z");

            print(0, a[4][0](), "for-let array destructuring first x gets 0 from [ 0, 1, 2 ]");
            print(1, a[4][1](), "for-let array destructuring first y gets 1 from [ 0, 1, 2 ]");
            print(2, a[4][2](), "for-let array destructuring first z gets 2 from [ 0, 1, 2 ]");

            print(1, a[5][0](), "for-let array destructuring second x gets 4 from [ x + 1, y + 2, z + 3 ]");
            print(3, a[5][1](), "for-let array destructuring second y gets 5 from [ x + 1, y + 2, z + 3 ]");
            print(5, a[5][2](), "for-let array destructuring second z gets 6 from [ x + 1, y + 2, z + 3 ]");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
