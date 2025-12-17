function testNullWithInt32OrBool(nullVal) {
    var vals = [0, 1, true, false, null];
    for (var v of vals) {
        print(v + nullVal, Number(v));
        print(v - nullVal, Number(v));
        print(v * nullVal, 0);
        var res = v / nullVal;
        print(isNaN(res) || res === Infinity, true);
        print(v % nullVal, NaN);
        print(v ** nullVal, 1);

        print(nullVal + v, Number(v));
        print(nullVal - v, 0 - Number(v));
        print(nullVal * v, 0);
        res = nullVal / v;
        print(isNaN(res) || res === 0, true);
        res = nullVal % v;
        print(isNaN(res) || res === 0, true);
        res = nullVal ** v;
        print(res === 0 || res === 1, true);
    }
}
for (var i = 0; i < 15; i++) {
    testNullWithInt32OrBool(null);
}

function testUndefinedWithOther(undefinedVal) {
    var vals = [1.1, NaN, true, false, null, undefined];
    for (var v of vals) {
        print(v + undefinedVal, NaN);
        print(v - undefinedVal, NaN);
        print(v * undefinedVal, NaN);
        print(v / undefinedVal, NaN);
        print(v % undefinedVal, NaN);
        print(v ** undefinedVal, NaN);

        print(undefinedVal + v, NaN);
        print(undefinedVal - v, NaN);
        print(undefinedVal * v, NaN);
        print(undefinedVal / v, NaN);
        print(undefinedVal % v, NaN);
        var res = undefinedVal ** v;
        if (v === false || v === null) {
            print(res, 1);
        } else {
            print(res, NaN);
        }
    }
}
for (var i = 0; i < 15; i++) {
    testUndefinedWithOther(undefined);
}

function testBooleanWithDouble(trueVal, falseVal) {
    var vals = [1.1, 2.2, 5, 6, 3.14];
    for (var v of vals) {
        print(v + falseVal, v);
        print(v - falseVal, v);
        print(v * falseVal, 0);
        print(v / falseVal, Infinity);
        print(v % falseVal, NaN);
        print(v ** falseVal, 1);

        print(trueVal + v, v + 1);
        print(trueVal - v, 1 - v);
        print(trueVal * v, v);
        print(trueVal / v, 1 / v);
        print(trueVal % v, 1);
        print(trueVal ** v, 1);
    }
}
for (var i = 0; i < 15; i++) {
    testBooleanWithDouble(true, false);
}
