








var obj0 = {};
obj0.method0= function(){  };
protoObj0 = {__proto__ : obj0}

protoObj0.method1 = function() {
    this.method0.apply(this, arguments);
}

protoObj0.method1.prototype = {
        method0 : function(){
    },
}
protoObj0.method0.apply(new protoObj0.method1(...[1]));
WScript.Echo("pass");
