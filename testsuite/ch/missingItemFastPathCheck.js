





var GiantPrintArray = [];

var func1 = function(){
    GiantPrintArray.push(g);
}

var g = 1;
func1();
g = ((- (-2 - 2147483648)) << 0);
func1();

WScript.Echo(GiantPrintArray);




var eqObj5;

var IntArr0 = new Array();

eqObj5 = -2147483647;
IntArr0[4] = 1;

test0();
++eqObj5;
test0();

function test0() {
    IntArr0.push(eqObj5);
    return IntArr0[IntArr0.length];
}

WScript.Echo("PASSED test0");




var GiantPrintArray = [];
function test1(){
    var v386361 = -2147483646;
    {
        const v386361 = 1;
        GiantPrintArray.push(v386361);
    }
    GiantPrintArray.push(v386361);
};

test1();
test1();

WScript.Echo("PASSED test1");



function test2(arg1) {
    WScript.Echo(arg1.push(-2147483646));
}

var arr3 = new Array(1);
test2(arr3);
test2(arr3);



var GiantPrintArray = [];

var missingItemFunc = function () {
    function v2629() {
    }
    GiantPrintArray.push(-2147483646);
    v2629();
};

for (i=0;i<1;i++) {
    missingItemFunc();
    missingItemFunc();
}

WScript.Echo("PASSED Test3");

