




function foo() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.MAX_VALUE), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.POSITIVE_INFINITY), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , foo
          ];

function AsmModule(stdlib) {
    "use asm";

    var fround = stdlib.Math.fround;
    function dbConvNot(y) {
        y = +y;
        var i = 0;
        i = ~((~~y)|0);
        return (!!i)|0;
    }

    function fltConvNot(y) {
        y = fround(y);
        var i = 0;
        i = ~((~~y)|0);
        return (!!i)|0;
    }


    return {
        dbConvNot       : dbConvNot       ,
        fltConvNot      : fltConvNot       ,
    };
}


var asmModule = AsmModule({Math:Math});

for (var i=0; i<all.length; ++i) {
    print("i   +a["+i+"](" + all[i] +") = " + (asmModule.dbConvNot(all[i])));
    print("i   +a["+i+"](" + all[i] +") = " + (asmModule.fltConvNot(all[i])));
}
