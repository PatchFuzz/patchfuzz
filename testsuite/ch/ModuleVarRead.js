




function foo() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25, 65536, 46341,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1), 
            new Number(Number.MAX_VALUE), new Number(Number.MIN_VALUE), new Number(Number.NaN), 
            new Number(Number.POSITIVE_INFINITY), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , foo
          ];
          
function AsmModule(stdlib,foreign,buffer) {
    "use asm";

    
    var i1 = 65, d1 = 4.6, i2 = -5, d2 = -84.6587;
    
    var fi1 = foreign.i1|0;
    var fi2 = foreign.i2|0;
    var fd1 = +foreign.d1;
    var fd2 = +foreign.d2;
    var fun1 = foreign.fun1;
    var fun2 = foreign.fun2;
    
    
    var sInf = stdlib.Infinity, sNaN = stdlib.NaN;
    
    var acos = stdlib.Math.acos ;
    var asin = stdlib.Math.asin ;
    var atan = stdlib.Math.atan ;
    var cos = stdlib.Math.cos  ;
    var sin = stdlib.Math.sin  ;
    var tan = stdlib.Math.tan  ;
    var ceil = stdlib.Math.ceil ;
    var floor = stdlib.Math.floor;
    var exp = stdlib.Math.exp  ;
    var log = stdlib.Math.log  ;
    var sqrt = stdlib.Math.sqrt ;
    
    var abs = stdlib.Math.abs;
    
    var atan2 = stdlib.Math.atan2;
    var pow = stdlib.Math.pow;
    
    var imul = stdlib.Math.imul;
    
    var E = stdlib.Math.E;
    var LN10 = stdlib.Math.LN10;
    var LN2 = stdlib.Math.LN2;
    var LOG2E = stdlib.Math.LOG2E;
    var LOG10E = stdlib.Math.LOG10E;
    var PI = stdlib.Math.PI;
    var SQRT1_2 = stdlib.Math.SQRT1_2;
    var SQRT2 = stdlib.Math.SQRT2;
    
    
    var a=new stdlib.Int8Array(buffer);
    var b=new stdlib.Int16Array(buffer);
    var c=new stdlib.Int32Array(buffer);
    var d=new stdlib.Uint8Array(buffer);
    var e=new stdlib.Uint16Array(buffer);
    var f=new stdlib.Uint32Array(buffer);
    var g=new stdlib.Float32Array(buffer);
    var h=new stdlib.Float64Array(buffer);
    
    function f1(){return +E;}
    function f2(){return +LN10;}
    function f3(){return +LOG2E;}
    function f4(){return +LN2;}
    function f5(){return +LOG10E;}
    function f6(){return +PI;}
    function f7(){return +SQRT1_2;}
    function f8(){return +SQRT2;}
    function f9(){return i1|0;}
    function f10(){return i2|0;}
    function f11(){return fi1|0;}
    function f12(){return fi2|0;}
    function f13(){return +d1;}
    function f14(){return +d2;}
    function f15(){return +fd1;}
    function f16(){return +fd2;}    
    
    return { 
        f1  : f1  ,
        f2  : f2  ,
        f3  : f3  ,
        f4  : f4  ,
        f5  : f5  ,
        f6  : f6  ,
        f7  : f7  ,
        f8  : f8  ,
        f9  : f9  ,
        f10 : f10 ,
        f11 : f11 ,
        f12 : f12 ,
        f13 : f13 ,
        f14 : f14 ,
        f15 : f15 ,
        f16 : f16 ,
    };
}

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var env = {fun1:function(x){}, fun2:function(x,y){},i1:155,i2:658,d1:68.25,d2:3.14156,f1:48.1523,f2:14896.2514}
var buffer = new ArrayBuffer(1<<20);

var asmModule = AsmModule(global,env,buffer);
print("+E;      " + asmModule.f1  ());
print("+LN10;   " + asmModule.f2  ());
print("+LOG2E;  " + asmModule.f3  ());
print("+LN2;    " + asmModule.f4  ());
print("+LOG10E; " + asmModule.f5  ());
print("+PI;     " + asmModule.f6  ());
print("+SQRT1_2;" + asmModule.f7  ());
print("+SQRT2;  " + asmModule.f8  ());
print("i1|0;    " + asmModule.f9  ());
print("i2|0;    " + asmModule.f10 ());
print("fi1|0;   " + asmModule.f11 ());
print("fi2|0;   " + asmModule.f12 ());
print("+d1;     " + asmModule.f13 ());
print("+d2;     " + asmModule.f14 ());
print("+fd1;    " + asmModule.f15 ());
print("+fd2;    " + asmModule.f16 ());

print("+E;      " + asmModule.f1  ());
print("+LN10;   " + asmModule.f2  ());
print("+LOG2E;  " + asmModule.f3  ());
print("+LN2;    " + asmModule.f4  ());
print("+LOG10E; " + asmModule.f5  ());
print("+PI;     " + asmModule.f6  ());
print("+SQRT1_2;" + asmModule.f7  ());
print("+SQRT2;  " + asmModule.f8  ());
print("i1|0;    " + asmModule.f9  ());
print("i2|0;    " + asmModule.f10 ());
print("fi1|0;   " + asmModule.f11 ());
print("fi2|0;   " + asmModule.f12 ());
print("+d1;     " + asmModule.f13 ());
print("+d2;     " + asmModule.f14 ());
print("+fd1;    " + asmModule.f15 ());
print("+fd2;    " + asmModule.f16 ());
