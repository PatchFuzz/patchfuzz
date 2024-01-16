
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
  assertEq(foo(names[i]), names[i]);


try {
  foo("missing");
} catch (e) {
  assertEq(/missing/.test(e), true);
}

function bar(name) {
  return eval(name + "()");
}

for (var i = 0; i < names.length; i++)
  assertEq(bar(names[i]), names[i]);

function recursion() {
  return bar({ valueOf: function() { return "gotcha"; }});
}

function gotcha() {
  return "gotcha";
}


assertEq(bar("recursion"), "gotcha");
