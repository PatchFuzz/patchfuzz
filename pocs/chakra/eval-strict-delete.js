"use strict"
var indirect = eval;
indirect("var _et_ = 10;");
print(_et_);
print(eval("delete this._et_;"));
print(typeof _et_);

(function (global) {
    indirect("var _et_ = 10;");
    print(Object.getOwnPropertyDescriptor(global, "_et_").configurable); 
    print(delete global._et_);
})(this);
