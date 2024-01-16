


























assertThrows("$=function anonymous() { do {} while(({ get x(x) { break ; }, set x() { (undefined);} })); }");

function foo() {
  assertThrows("$=function anonymous() { do {} while(({ get x(x) { break ; }, set x() { (undefined);} })); }");
}
foo();

assertThrows("$=function anonymous() { do {} while(({ get x(x) { break ; }, set x() { (undefined);} })); }");

xeval = function(s) { eval(s); }
xeval('$=function(){L: {break L;break L;}};');
