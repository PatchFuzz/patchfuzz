


function f(foo)
{
  var x;
  eval("this.__defineGetter__(\"y\", function () { return x; })");
}
f("");
try {
((function(){ throw y })())
} catch(exc1) {}
