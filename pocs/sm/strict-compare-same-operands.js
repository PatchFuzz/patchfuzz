function f(l, m) {
    var a = NaN;
    var b = 13;
    var c = "test";
    var d = undefined;
    var e = null;
    var f = 15.7;
    var g = Math.fround(189777.111);
    var h = "ABC";
    var i = String.fromCharCode(65, 65, 65);
    var j = {};
    var k = Math.fround("".charCodeAt(15));

    
    print(a === a, false);
    print(a !== a, true);
    print(k === k, false);
    print(k !== k, true);
    print(l === l, false);
    print(l !== l, true);

    print(b === b, true);
    print(b !== b, false);
    print(c === c, true);
    print(c !== c, false);
    print(d === d, true);
    print(d !== d, false);
    print(e === e, true);
    print(e !== e, false);
    print(f === f, true);
    print(f !== f, false);
    print(g === g, true);
    print(g !== g, false);
    print(h === h, true);
    print(h !== h, false);
    print(i === i, true);
    print(i !== i, false);
    print(j === j, true);
    print(j !== j, false);
    print(m === m, true);
    print(m !== m, false);
}

function test() {
    for (var i = 0; i < 100; i++)
        f("".charCodeAt(15), 42);
}

test();
