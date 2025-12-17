var res = "class { constructor() {} }";
var test = eval("(" + res + ").toString()");

print(test, res);