




var echo = print;

function guarded_call(func) {
    try {
        func();
    } catch (e) {
        echo(e.name + " : " + e.message);
    }
}

var testCount = 0;
function scenario(title) {
    if (testCount > 0) {
        echo("\n");
    }
    echo((testCount++) + ".", title);
}

scenario("Non Object");
var nonObjList = [
    1, NaN, true, null, undefined
];
for (var i = 0; i < nonObjList.length; i++) {
    var o = nonObjList[i];
    guarded_call(function () {
        echo(o, "-->", Array.prototype.toLocaleString.apply(o));
    });
}

scenario("Object, length not uint32");
var badLength = [
    true, "abc", 1.234, {}
];
for (var i = 0; i < badLength.length; i++) {
    var len = badLength[i];
    var o = { length: len };
    guarded_call(function () {
        echo("length:", len, "-->", Array.prototype.toLocaleString.apply(o));
    });
}

scenario("Array: normal");
var o = [
    0, 1.23, NaN, true, "abc", {}, [], [0, 1, 2]
];



var output = Array.prototype.toLocaleString.apply(o);
if ( output == "0,1.23,NaN,true,abc,[object Object],,0,1,2" ) {
    echo("0.00,1.23,NaN,true,abc,[object Object],,0.00,1.00,2.00");
} else {
    echo(output);
}

scenario("Array: element toLocaleString not callable");
var o = [
    0,
    {toLocaleString: 123}
];
guarded_call(function () {
    echo(Array.prototype.toLocaleString.apply(o));
});

scenario("Array: element toLocaleString");
var o = [
    0,
    { toLocaleString: function () { return "anObject"; } },
    undefined,
    null,
    { toLocaleString: function () { return "another Object"; } },
    [
        1,
        { toLocaleString: function () { return "a 3rd Object"; } },
        2
    ]
];



output = Array.prototype.toLocaleString.apply(o);
if ( output == "0,anObject,,,another Object,1,a 3rd Object,2" ) {
    echo("0.00,anObject,,,another Object,1.00,a 3rd Object,2.00");
} else {
    echo(output);
}

scenario("Object: normal");
var o = {
    0: 0,
    1: 1.23,
    2: NaN,
    3: true,
    4: "abc",
    5: {},
    6: [],
    7: [0, 1, 2],
    length: 8,
    8: "should not appear",
    "-1": "should not appear"
};



guarded_call(function () {
    output = Array.prototype.toLocaleString.apply(o);
    if ( output == "0,1.23,NaN,true,abc,[object Object],,0,1,2" ) {
        echo("0.00,1.23,NaN,true,abc,[object Object],,0.00,1.00,2.00");
    } else {
        echo(output);
    }
});

scenario("Object: element toLocaleString not callable");
var o = {
    0: 0,
    1: { toLocaleString: 123 },
    length: 2
};
guarded_call(function () {
    echo(Array.prototype.toLocaleString.apply(o));
});

scenario("Object: element toLocaleString");
var o = {
    0: 0,
    1: { toLocaleString: function () { return "anObject"; } },
    2: undefined,
    3: null,
    4: { toLocaleString: function () { return "another Object"; } },
    5: [
        1,
        { toLocaleString: function () { return "a 3rd Object"; } },
        2
    ],
    length: 6,
    6: "should not appear",
    7: "should not appear",
    "-1": "should not appear"
};



guarded_call(function () {
    output = Array.prototype.toLocaleString.apply(o);
    if ( output == "0,anObject,,,another Object,1,a 3rd Object,2" ) {
        echo("0.00,anObject,,,another Object,1.00,a 3rd Object,2.00");
    } else {
        echo(output);
    }
});

scenario("TypedArray: toLocaleString should use length from internal slot");
var o = new Int8Array(2);
o[1] = 31;
Object.defineProperty(o, 'length', {value : 4});

guarded_call(function () {
    output = Array.prototype.toLocaleString.apply(o);
    
    if (output == "0,31") {
        echo("0.00,31.00");
    } else {
        echo(output);
    }
});

scenario("Array: toLocaleString should use length property");
var o = [10, 20];
o[2] = 30;
Object.defineProperty(o, 'length', {value : 6});

guarded_call(function () {
    output = Array.prototype.toLocaleString.apply(o);
    
    if (output == "10,20,30,,,") {
        echo("10.00,20.00,30.00,,,");
    } else {
        echo(output);
    }
});

scenario("Array: toLocaleString should use toLocaleString accessor on element");
var originalToLocaleString = String.prototype.toLocaleString;
String.prototype.toLocaleString = function () {
    return "accessor-value";
};
var o = ["test"];
guarded_call(function () {
    echo(Array.prototype.toLocaleString.apply(o));
});
String.prototype.toLocaleString = originalToLocaleString;

scenario("Array: toLocaleString should throw TypeError on undefined");
var originalToLocaleString = String.prototype.toLocaleString;
String.prototype.toLocaleString = undefined;
var o = ["test"];
guarded_call(function () {
    echo(Array.prototype.toLocaleString.apply(o));
});
String.prototype.toLocaleString = originalToLocaleString;

scenario("Array: toLocaleString should throw TypeError on invalid function");
var originalToLocaleString = String.prototype.toLocaleString;
String.prototype.toLocaleString = 0;
var o = ["test"];
guarded_call(function () {
    echo(Array.prototype.toLocaleString.apply(o));
});
String.prototype.toLocaleString = originalToLocaleString;
