function test0() {
    var arr = [4294967296];
    arr[9] = 19;
    arr.unshift(1, 2, {}, 4, 5, 6, 7, 8, 9, 10, 11, 12);
}


function test1() {
    function makeArrayLength() {
      return 100;
    }
    var obj0 = {};
    var protoObj0 = {};
    var obj1 = {};
    var arrObj0 = {};
    var func0 = function () {
    };
    var func1 = function () {
    };
    obj0.method1 = func0;
    var ary = Array();
    var IntArr1 = new Array();
    IntArr1[15] = ~obj1.prop0;
    arrObj0.length = makeArrayLength();
    IntArr1[10] = arrObj0.length;
    makeArrayLength(IntArr1.unshift(func1(), ary, obj0.method1(), protoObj0, Object(), arrObj0, -1877547837));
}

test0();
test1();
print("Pass");
