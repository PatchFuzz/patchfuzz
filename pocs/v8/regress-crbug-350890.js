function set_length(a, l) {
  a.length = l;
}

function test1() {
  var l = {};
  var a = Array(l);
  set_length(a, 3);
  set_length(a, 3);
  print(3, a.length);
}

function test2() {
  var a = [];
  set_length(a, 10);
  set_length(a, 10);
  Object.freeze(a);
  set_length(a, 3);
  set_length(a, 3);
  print(10, a.length);
}

function test3() {
  var a = [2];
  Object.defineProperty(a, "length", {value:2, writable: false});
  %ToFastProperties(a);
  set_length([], 10);
  set_length([], 10);
  set_length(a, 10);
  set_length(a, 10);
  print(2, a.length);
}

test1();
test2();
test3();
