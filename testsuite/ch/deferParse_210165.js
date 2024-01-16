













var shouldBailout = false;
var iCount = 0;
var reuseObjects = false;
var PolymorphicFuncObjArr = [];
var PolyFuncArr = [];

function GetPolymorphicFunction() {
    if (PolyFuncArr.length > 1) {
        var myFunc = PolyFuncArr.shift();
        PolyFuncArr.push(myFunc);
        return myFunc;
    } else {
        return PolyFuncArr[0];
    }
}

function GetObjectwithPolymorphicFunction() {
    
        var obj = {};
        obj.polyfunc = PolyFuncArr[0];
        
        return obj
    
};

function InitPolymorphicFunctionArray() {
    for (var i = 0; i < arguments.length; i++) {
        PolyFuncArr.push(arguments[i])
    }
};

function test0() {
    
    var func0 = function (argArr0, argObj1) {
        
        
        
        
    }
    
    function func2() {
        return 0;
    }
    
    function bar0() {
        
        
        WScript.Echo(func2); 
        
        
        
        
    }
    InitPolymorphicFunctionArray(bar0);;
    var __polyobj = GetObjectwithPolymorphicFunction();;

    function func4() {
        eval("");
        
    }
    
    
    
        
        
        
        
        __polyobj.polyfunc.call();
        
        
        
        
    
    
    
    
    
};


test0();
WScript.Attach(test0);
