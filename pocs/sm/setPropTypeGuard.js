var x = {g:0};
var y = {g:0,f:"fubar"};
x.f = 10;

function foo(x) {
  for (var i = 0; i < 30; i++)
    x.f = 10;
}
function access(x) {
  return x.f + 10;
}
foo(Object.create({}));
eval("foo(x)");
print(access(y), "fubar10");
eval("foo(y)");
print(access(y), 20);
