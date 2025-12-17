print("$=function anonymous() { do {} while(({ get x(x) { break ; }, set x() { (undefined);} })); }");

function foo() {
  print("$=function anonymous() { do {} while(({ get x(x) { break ; }, set x() { (undefined);} })); }");
}
foo();

print("$=function anonymous() { do {} while(({ get x(x) { break ; }, set x() { (undefined);} })); }");

xeval = function(s) { eval(s); }
xeval('$=function(){L: {break L;break L;}};');
