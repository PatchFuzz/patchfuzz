function print(b) {
    if (!b)
        throw new Error("Bad assertion.");
}

function test(f, ...args) {
    for (let i = 0; i < 500; i++)
        f(...args);
}

function falsey() { return false; }
noInline(falsey);
function truthy() { return true; }
noInline(truthy);

test(function() {
    var a;
    print(a === undefined);
    {
        function a() { return 20; }
    }
    print(a() === 20);
});

test(function(a) {
    var a;
    print(a === undefined);
    {
        function a() { return 20; }
    }
    print(a === undefined);
});

test(function({a}) {
    var a;
    print(a === undefined);
    {
        function a() { return 20; }
    }
    print(a === undefined);
}, {});

test(function() {
    let a;
    print(a === undefined);
    {
        function a() { return 20; }
    }
    print(a === undefined);
});

test(function() {
    print(a === undefined);
    function foo() { return a(); }
    {
        function a() { return 20; }
    }
    print(a() === 20);
    print(foo() === 20);
});

test(function(a = 30) {
    print(a === 30);
    function foo() { return a; }
    print(foo() === 30);
    {
        function a() { return 20; }
        print(a() === 20);
        print(foo() === 30);
    }
    print(a === 30);
    print(foo() === 30);
});

test(function() {
    let x = 15;
    print(x === 15);
    print(a === undefined);
    {
        let x = {x: 20};
        function a() { return x; }
        print(a() === x);
        print(a().x === 20);
    }
    print(a().x === 20);
    print(x === 15);
});

test(function() {
    let x = 15;
    print(x === 15);
    print(a === undefined);
    let f;
    {
        let x = {x: 20};
        print(a() === x);
        print(a().x === 20);

        function a() { throw new Error; }
        function a() { return x; }
        f = a;
    }
    print(a().x === 20);
    print(x === 15);
    print(f().x === 20);
});

test(function() {
    let x = 15;
    let f;
    print(x === 15);
    print(a === undefined);
    print(f === undefined);
    {
        function a() { return f; }
        f = a;
    }
    print(x === 15);
    print(f() === f);
});

test(function() {
    function a() { return 20; }
    let f = a;
    print(a() === 20);
    {
        function a() { return 25; }
        print(a() === 25);
    }
    print(f() === 20);
    print(a() === 25);
});

test(function() {
    print(f === undefined);
    for (let i = 0; i < 10; i++) {
        function f() { return i; }
        print(f() === i);
    }
    print(f() === 9);
});

test(function() {
    print(f === undefined);
    let nums = [0, 1, 2, 3];
    for (let i of nums) {
        function f() { return i; }
        print(f() === i);
    }
    print(f() === 3);
});

test(function() {
    print(f === undefined);
    let obj = {0:0, 1:1, 2:2, 3:3};
    for (let i in obj) {
        function f() { return i; }
        print(f() === i);
    }
    print(f() === "3");
});

test(function() {
    print(f === undefined);
    let nums = [0, 1, 2, 3];
    let funcs = []
    for (let i of nums) {
        function f() { return i; }
        funcs.push(f);
        print(f() === i);
    }
    print(f() === 3);
    print(funcs.length === nums.length);
    for (let i = 0; i < funcs.length; i++) {
        print(funcs[i]() === nums[i]);
    }
});

test(function() {
    print(f === undefined);
    try {
        throw new Error("foo");
    } catch(e) {
        function f() { return 20; }
    }
    print(f() === 20);
});

test(function() {
    print(f === undefined);
    try {
        ;
    } catch(e) {
        function f() { return 20; }
    }
    print(f === undefined);
});

test(function() {
    print(foo === undefined);
    if (falsey()) {
        function foo() { return 20; }
    }
    print(foo === undefined);
});

test(function() {
    print(foo === undefined);
    if (falsey())
        function foo() { return 20; }
    print(foo === undefined);
});

test(function() {
    print(foo === undefined);
    if (truthy()) {
        function foo() { return 20; }
    }
    print(foo() === 20);
});

test(function() {
    print(foo === undefined);
    while (truthy()) {
        print(foo() === 20);
        break;

        function foo() { return 20; }
    }
    print(foo === undefined);
});

test(function() {
    print(foo === undefined);
    while (truthy()) {
        print(foo() === 20);
        function foo() { return 20; }
        break;
    }
    print(foo() === 20);
});

test(function() {
    function bar() { return foo; }
    print(foo === undefined);
    print(bar() === undefined);
    while (truthy()) {
        break;

        function foo() { return 20; }
    }
    print(foo === undefined);
    print(bar() === undefined);
});

test(function() {
    function bar() { return foo; }
    print(foo === undefined);
    print(bar() === undefined);
    while (truthy()) {
        function foo() { return 20; }
        break;
    }
    print(foo() === 20);
    print(bar()() === 20);
});

test(function() {
    function bar() { return foo; }
    print(foo === undefined);
    print(bar() === undefined);
    while (falsey()) {
        function foo() { return 20; }
    }
    print(foo === undefined);
    print(bar() === undefined);
});

test(function() {
    var a = "a";
    print(a === "a");
    {
        let b = 1;
        print(a === "a");
        {
            let c = 2;
            print(a === "a");
            {
                let d = 3;
                function a() { return b + c+ d; }
                print(a() === 6);
            }
            print(a() === 6);
        }
        print(a() === 6);
    }
    print(a() === 6);
});

test(function() {
    print(foo === undefined);
    switch(1) {
    case 0:
        function foo() { return 20; }
        break;
    case 1:
        print(foo() === 20);
        break;
    }
    print(foo === undefined);
});

test(function() {
    print(foo === undefined);
    switch(1) {
    case 1:
        print(foo() === 20);
    case 0:
        function foo() { return 20; }
        break;
    }
    print(foo() === 20);
});

test(function() {
    print(foo === undefined);
    switch(1) {
    case 0:{
        function foo() { return 20; }
        break;
    }
    }
    print(foo === undefined);
});

test(function() {
    print(foo === undefined);
    switch(0) {
    case 0:{
        function foo() { return 20; }
        break;
    }
    }
    print(foo() === 20);
});

test(function() {
    print(foo === undefined);
    switch(0) {
    case 0:
        function foo() { return bar; }
        break;
    case 1:
        let bar = 20;
        break;
    }

    let threw = false;
    try {
        foo();
    } catch (e) {
        print(e instanceof ReferenceError);
        threw = true;
    }
    print(threw);
});

test(function() {
    print(foo === undefined);
    switch(0) {
    case 0:
        function foo() { return bar; }
    case 1:
        let bar = 20;
        break;
    }

    print(foo() === 20);
});

test(function() {
    print(foo === undefined);
    switch(1) {
    case 0:
        function foo() { return bar; }
    case 1:
        let bar = 20;
        print(foo() === 20);
        break;
    }

    print(foo === undefined);
});

test(function() {
    function capFoo1() { return foo; }
    print(foo === undefined);
    print(capFoo1() === undefined);
    switch(1) {
    case 0:
        function foo() { return bar; }
        function capFoo2() { return foo; }
    case 1:
        let bar = 20;
        print(foo() === 20);
        print(capFoo1() === undefined);
        print(capFoo2() === foo);
        print(capFoo2()() === 20);
        break;
    }

    print(foo === undefined);
});

test(function() {
    print(foo === undefined);
    switch(1) {
    case 1:
        let bar = 20;
        print(foo() === 20);
    case 0:
        function foo() { return bar; }
    }

    print(foo() === 20);
});

test(function(a) {
    print(a === 25);
    switch(1) {
    case 0:
        function a() { return bar; }
    case 1:
        let bar = 20;
        print(a() === 20);
        break;
    }

    print(a === 25);
}, 25);

test(function() {
    let a = 25;
    print(a === 25);
    switch(1) {
    case 0:
        function a() { return bar; }
    case 1:
        let bar = 20;
        print(a() === 20);
        break;
    }

    print(a === 25);
});

test(function() {
    const a = 25;
    print(a === 25);
    switch(1) {
    case 0:
        function a() { return bar; }
    case 1:
        let bar = 20;
        print(a() === 20);
        break;
    }

    print(a === 25);
});

test(function() {
    let foo = {};
    class a { constructor() { return foo; } }
    print(new a === foo);
    switch(1) {
    case 0:
        function a() { return bar; }
    case 1:
        let bar = 20;
        print(a() === 20);
        break;
    }

    print(new a === foo);
});

test(function() {
    print(f === undefined);
    {
        if (true)
            function f() { return 20; }
        print(f() === 20);
    }
    print(f() === 20);
});

test(function() {
    print(f === undefined);
    {
        if (false)
            function f() { return 20; }
        print(f === undefined);
    }
    print(f === undefined);
});

test(function() {
    var x;
    print(f === undefined);
    if (true)
        if (true)
            if (true)
                function f() { return 20; }
    print(f() === 20);
});

test(function() {
    var x;
    print(f === undefined);
    {
        if (true)
            if (false)
                if (true)
                    function f() { return 20; }
    }
    print(f === undefined);
});

test(function() {
    var x;
    print(f === undefined);
    {
        while (false)
            while (false)
                if (true)
                    function f() { return 20; }
    }
    print(f === undefined);
});

test(function() {
    print(f === undefined);
    var f = 20;
    print(f === 20);
    while (false)
        while (false)
            if (true)
                function f() { return 20; }
    print(f === 20);
});

test(function() {
    print(f === undefined);
    var f = 20;
    print(f === 20);
    var i = 2;
    {
        while (i-- > 0)
            while (i-- > 0)
                if (true)
                    function f() { return 20; }
    }
    print(f() === 20);
});

test(function() {
    print(f === undefined);
    var f = 20;
    print(f === 20);
    var i = 2;
    {
        while (i-- > 0)
            while (i-- > 0)
                if (false)
                    function f() { return 20; }
    }
    print(f === 20);
});

test(function() {
    print(f === undefined);
    var f = 20;
    print(f === 20);
    var i = 2;
    {
        while (i-- > 0)
            while (i-- > 0)
                if (false)
                    function f() { return 20; }
                else
                    function f() { return 30; }
    }
    print(f() === 30);
});

test(function() {
    print(f === undefined);
    if (true) {
        label: function f() { return 20; }
    }
    print(f() === 20);
});

test(function() {
    print(f === undefined);
    if (true) {
        label: label2: label3: function f() { return 20; }
    }
    print(f() === 20);
});

test(function() {
    print(a === undefined);
    print(b === undefined);
    print(c === undefined);
    print(d === undefined);
    print(e === undefined);
    print(f === undefined);
    print(g === undefined);
    print(h === undefined);
    print(i === undefined);
    print(j === undefined);
    print(k === undefined);
    print(l === undefined);
    print(m === undefined);
    print(n === undefined);
    print(o === undefined);
    print(p === undefined);
    print(q === undefined);
    print(r === undefined);
    print(s === undefined);
    print(t === undefined);
    print(u === undefined);
    print(v === undefined);
    print(w === undefined);
    print(x === undefined);
    print(y === undefined);
    print(z === undefined);
    {
        function a() { } 
        function b() { } 
        function c() { } 
        function d() { } 
        function e() { } 
        function f() { } 
        function g() { } 
        function h() { } 
        function i() { } 
        function j() { } 
        function k() { } 
        function l() { } 
        function m() { } 
        function n() { } 
        function o() { } 
        function p() { } 
        function q() { } 
        function r() { } 
        function s() { } 
        function t() { } 
        function u() { } 
        function v() { } 
        function w() { } 
        function x() { } 
        function y() { } 
        function z() { } 
    }
    print(typeof a === "function");
    print(typeof b === "function");
    print(typeof c === "function");
    print(typeof d === "function");
    print(typeof e === "function");
    print(typeof f === "function");
    print(typeof g === "function");
    print(typeof h === "function");
    print(typeof i === "function");
    print(typeof j === "function");
    print(typeof k === "function");
    print(typeof l === "function");
    print(typeof m === "function");
    print(typeof n === "function");
    print(typeof o === "function");
    print(typeof p === "function");
    print(typeof q === "function");
    print(typeof r === "function");
    print(typeof s === "function");
    print(typeof t === "function");
    print(typeof u === "function");
    print(typeof v === "function");
    print(typeof w === "function");
    print(typeof x === "function");
    print(typeof y === "function");
    print(typeof z === "function");
});

test(function() {
    function outer() { return f; }
    print(outer() === undefined);
    {
        print(outer() === undefined);
        print(f() === 2);
        f = 100
        print(outer() === undefined);
        function f() { return 1 }
        print(outer() === 100);
        f = 200
        print(outer() === 100); 
        function f() { return 2 }
        print(outer() === 200);
    }
});

for (let i = 0; i < 500; i++)
    print(foo() === 20);

function foo() { return 20; }

{
    function foo() { return 25; }
    print(foo() === 25);
}
print(foo() === 25);

for (let i = 0; i < 500; i++)
    print(bar() === "bar1");
function bar() { return "bar1"; }
if (falsey()) {
    {
        if (falsey()) {
            function bar() { return "bar2"; }
        }
    }
}
print(bar() === "bar1");

for (let i = 0; i < 500; i++)
    print(baz() === "baz1");
function baz() { return "baz1"; }
while (falsey()) {
    if (falsey()) {
        function baz() { return "baz2"; }
    }
}
print(baz() === "baz1");
