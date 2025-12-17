var shouldBailout = false;
function test0(){
function makeArrayLength(x) { if(x < 1 || x > 4294967295 || x != x || isNaN(x) || !isFinite(x)) return 100; else return Math.floor(x) & 0xffff; };;
var obj0 = {};
var obj1 = {};
var IntArr0 = new Array();
var FloatArr0 = [1079966239,-2,-97174468.9,4.71984429732334E+18,373475323,516830569.1];
obj1.prop2 = 1434939730.1;
Object.prototype.prop1 = 1;
Object.prototype.prop2 = 1;
Object.prototype.length = makeArrayLength(1);
    for(var _strvar20 in Object.prototype )
    {
        (FloatArr0[(((((shouldBailout ? (FloatArr0[((((obj1.prop2-- )) >= 0 ? ( (obj1.prop2-- )) : 0) & 0xF)] = 'x') : undefined ), (obj1.prop2-- )) >= 0 ? (obj1.prop2-- ) : 0)) & 0XF)]);
        obj0.prop1 = IntArr0[((shouldBailout ? (IntArr0[1] = 'x') : undefined ), 1)];
    }
};



test0();

test0();
test0();



runningJITtedCode = true;
test0();



shouldBailout = true;
test0();
print("PASS");
