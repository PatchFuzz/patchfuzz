




function test(arg0, arg1) {
    this.prop0 = arg0;
}

var obj = new test(1,2);
Object.defineProperty(obj, "a", {get : function(){ return 10; }});
obj[0] = 10;

WScript.Echo(obj.prop0);
WScript.Echo(obj[0]);