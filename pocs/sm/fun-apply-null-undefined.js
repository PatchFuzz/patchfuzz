function testBasic() {
    var thisVal = {};
    var arr = [1, 2, 3];
    var f = function() {
        print(this, thisVal);
        print(arguments.length, 0);
        return 456;
    };
    var boundMathAbs = Math.abs.bind();
    var boundArrayJoin = Array.prototype.join.bind(arr);
    var boundArrayJoinArg = Array.prototype.join.bind(arr, "-");
    for (var i = 0; i < 100; i++) {
        
        print(f.apply(thisVal), 456);
        print(f.apply(thisVal), 456);
        print(f.apply(thisVal, null), 456);
        print(f.apply(thisVal, undefined), 456);

        
        print(Math.abs.apply(), NaN);
        print(Math.abs.apply(null), NaN);
        print(Math.abs.apply(null, null), NaN);
        print(Array.prototype.join.apply(arr), "1,2,3");
        print(Array.prototype.join.apply(arr, null), "1,2,3");
        print(Array.prototype.join.apply(arr, undefined), "1,2,3");

        
        print(boundMathAbs.apply(), NaN);
        print(boundMathAbs.apply(null), NaN);
        print(boundMathAbs.apply(null, null), NaN);
        print(boundMathAbs.apply(null, undefined), NaN);
        print(boundArrayJoin.apply(), "1,2,3");
        print(boundArrayJoin.apply(null), "1,2,3");
        print(boundArrayJoin.apply(null, null), "1,2,3");
        print(boundArrayJoin.apply(null, undefined), "1,2,3");
        print(boundArrayJoinArg.apply(), "1-2-3");
        print(boundArrayJoinArg.apply(null), "1-2-3");
        print(boundArrayJoinArg.apply(null, null), "1-2-3");
        print(boundArrayJoinArg.apply(null, undefined), "1-2-3");
    }
}
testBasic();

function testUndefinedGuard() {
    var f = function() { return arguments.length; }
    var arr = [-5, 5];
    var strings = ["a", "b"];
    var boundMathAbs = Math.abs.bind();
    var boundArrayJoin = Array.prototype.join.bind(strings);
    for (var i = 0; i < 100; i++) {
        var args = i < 50 ? undefined : arr;
        print(f.apply(null, args), i < 50 ? 0 : 2);
        print(Math.abs.apply(null, args), i < 50 ? NaN : 5);
        print(Array.prototype.join.apply(strings, args), i < 50 ? "a,b" : "a-5b");
        print(boundMathAbs.apply(null, args), i < 50 ? NaN : 5);
        print(boundArrayJoin.apply(null, args), i < 50 ? "a,b" : "a-5b");
    }
}
testUndefinedGuard();
