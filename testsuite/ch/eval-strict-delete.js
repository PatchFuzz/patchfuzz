




"use strict"
var indirect = eval;
indirect("var _et_ = 10;");
WScript.Echo(_et_);
WScript.Echo(eval("delete this._et_;"));
WScript.Echo(typeof _et_);

(function (global) {
    indirect("var _et_ = 10;");
    WScript.Echo(Object.getOwnPropertyDescriptor(global, "_et_").configurable); 
    WScript.Echo(delete global._et_);
})(this);
