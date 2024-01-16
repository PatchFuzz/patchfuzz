




function AsmModule(stdlib,foreign,buffer) {
    "use asm";
    var m1 = stdlib.Math.fround;
    
    var HEAP64  =new stdlib.Float64Array(buffer);

    function f1(){
        var y = 0.5
        var x = m1(1.5);
        HEAP64[1] = x;
        return +(HEAP64[1])
    }
    return f1;
}

var global = {Math:Math,Float64Array:Float64Array}
var env = {}
var buffer = new ArrayBuffer(1<<20);

var asmModule = AsmModule(global,env,buffer);

WScript.Echo(asmModule());
WScript.Echo(asmModule());
