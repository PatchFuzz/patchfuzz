function a() {
  return "a";
}
function b() {
  return "b";
}
function c() {
  return "c";
}
var names = ["a","b","c"];

function foo(name) {
  return eval(name + "()");
}

for (var i = 0; i < names.length; i++)
  print(foo(names[i]), names[i]);


try {
  foo("missing");
} catch (e) {
  print(/missing/.test(e), true);
}

function bar(name) {
  return eval(name + "()");
}

for (var i = 0; i < names.length; i++)
  print(bar(names[i]), names[i]);

function recursion() {
  return bar({ valueOf: function() { return "gotcha"; }});
}

function gotcha() {
  return "gotcha";
}


print(bar("recursion"), "gotcha");
