function assertLatin1(s) {
    assertEq(isLatin1(s), true, "String: " + s);
}


assertLatin1("");
assertLatin1("x");
assertLatin1("xy");
assertLatin1("while");
assertLatin1("xyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\u00ff.");
assertLatin1("-1");
assertLatin1("50");
assertLatin1("873939");
assertLatin1("12.34");
assertLatin1("NaN");


assertLatin1(String(1));
assertLatin1("" + 40);
assertLatin1(String(873939));
assertLatin1(String(-1));
assertLatin1((-12983).toString());
assertLatin1(20..toString(16));
assertLatin1((-20).toString(12));
assertLatin1(12121..toString(16));
assertLatin1(12144..toString(2));


assertLatin1(String(12.34));
assertLatin1(45.6.toString(16));
assertLatin1(String(-0));
assertLatin1(NaN.toString());
assertLatin1("" + -Infinity);
assertLatin1("a" + 85899345929);


assertLatin1(true.toString());
assertLatin1(String(false));
assertLatin1(String(null));
assertLatin1(String(undefined));


assertLatin1(Math.toString());
assertLatin1(({x:1}).toString());
if (Object.prototype.toSource) {
    assertLatin1(({x:"foo"}).toSource());
}
assertLatin1([1, "bar"].toString());


assertLatin1(typeof "foo");
assertLatin1(typeof assertEq);


assertLatin1([1, "foo", null, true].join());
assertLatin1([1, "foo", null, true].join(":"));


assertLatin1(JSON.stringify({x:1,y:"bar",z:[null],1281298:Math.PI}));
assertLatin1(JSON.stringify([1, 2, 3], null, "foo"));
assertLatin1(JSON.stringify({x:1,y:"bar"}, function(k, v) {
    assertLatin1(k);
    return v;
}));
var arr = [1, 2, 3]; arr.length = 300;
assertLatin1(JSON.stringify(arr, function(k, v) {
    assertLatin1(k);
    return v;
}));


assertLatin1(new Date().toString());
assertLatin1(new Date().toISOString());
assertLatin1(Date());


assertLatin1(Math.abs.toString());
assertLatin1(Object.getOwnPropertyNames.name);


function fun1(a, b) { return ["foo\xAA"]; }
assertLatin1(fun1.toString());
assertLatin1(fun1.name);


assertLatin1(String.fromCharCode(99));
assertLatin1(String.fromCharCode(99, 0xff, 1));


assertLatin1("foo\u00ff\u1200".charAt(3));


var re = /a\.*b[cC]+/g;
assertLatin1(re.source);
assertLatin1(re.toString());


var o = {x: 1, y: 2, z\u00ff: 3, 987654: 4, 22: 5};
for (var prop in o)
    assertLatin1(prop);


assertLatin1(Object.keys(o)[2]);


(function foo() {
    var err;
    try { this(); } catch(e) { err = e; }
    assertEq(err.name, "TypeError");
    assertLatin1(err.name);
    assertLatin1(err.message);
    assertLatin1(err.stack);
    assertLatin1(err.toString());

    try { throw new Error("foo"); } catch(e) { err = e; }
    assertLatin1(err.name);
    assertLatin1(err.message);
    assertLatin1(err.stack);
    assertLatin1(err.toString());
})();
