setJitCompilerOption("ion.warmup.trigger", 30);
var max = 40;






function escape_object(o) {
    if (o.e) {
        print(o);
    }
}

var func = null;
var check_object_argument_func = function (i, res) {
    with ({}) {  };
    if (i == max - 1)
        return funname.arguments[1].d;
    return res;
};

var test_object_ref_check = eval(`(${check_object_argument_func})`.replace("funname", "test_object_ref"));
function test_object_ref(x, tmp) {
    tmp = {
        a: Math.fround(Math.pow(2 * x / max, 0)),
        b: Math.fround(Math.pow(2 * x / max, 25)),
        c: Math.fround(Math.pow(2 * x / max, 50)),
        d: 0
    };

    tmp.d = tmp.a + tmp.b;
    print(tmp.d, false);
    escape_object(tmp);
    return test_object_ref_check(x, Math.fround(tmp.c + Math.fround(tmp.d)));
}

var test_object_check = eval(`(${check_object_argument_func})`.replace("funname", "test_object"));
function test_object(x, tmp) {
    tmp = {
        a: Math.fround(Math.pow(2 * x / max, 0)),
        b: Math.fround(Math.pow(2 * x / max, 25)),
        c: Math.fround(Math.pow(2 * x / max, 50)),
        d: 0
    };

    tmp.d = tmp.a + tmp.b;
    print(tmp.d, false);
    return test_object_check(x, Math.fround(tmp.c + Math.fround(tmp.d)));
}


function escape_array(o) {
    if (o.length == 0) {
        print(o);
    }
}

var check_array_argument_func = function (i, res) {
    with ({}) {  };
    if (i == max - 1) {
        return funname.arguments[1][3];
    }
    return res;
};

var test_array_ref_check = eval(`(${check_array_argument_func})`.replace("funname", "test_array_ref"));
function test_array_ref(x, tmp) {
    tmp = [
        Math.fround(Math.pow(2 * x / max, 0)),
        Math.fround(Math.pow(2 * x / max, 25)),
        Math.fround(Math.pow(2 * x / max, 50)),
        0
    ];
    tmp[3] = tmp[0] + tmp[1];
    print(tmp[3], false);
    escape_array(tmp);
    return test_array_ref_check(x, Math.fround(tmp[2] + Math.fround(tmp[3])));
}

var test_array_check = eval(`(${check_array_argument_func})`.replace("funname", "test_array"));
function test_array(x, tmp) {
    tmp = [
        Math.fround(Math.pow(2 * x / max, 0)),
        Math.fround(Math.pow(2 * x / max, 25)),
        Math.fround(Math.pow(2 * x / max, 50)),
        0
    ];
    tmp[3] = tmp[0] + tmp[1];
    print(tmp[3], false);
    return test_array_check(x, Math.fround(tmp[2] + Math.fround(tmp[3])));
}


for (var i = 0; i < max; i++) {
    print(test_object_ref(i, undefined), test_object(i, undefined));
    print(test_array_ref(i, undefined), test_array(i, undefined));
}
