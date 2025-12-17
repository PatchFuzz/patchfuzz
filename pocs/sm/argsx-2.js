actual = '';
expected = "function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},3,1,2,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},3,1,2,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},3,1,2,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},3,1,2,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},3,1,2,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},3,1,2,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},3,1,2,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},3,1,2,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},3,1,2,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},3,1,2,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,[object Object],a,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,[object Object],a,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,[object Object],a,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,[object Object],a,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,[object Object],a,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,[object Object],a,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,[object Object],a,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,[object Object],a,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,[object Object],a,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,[object Object],a,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,abc,def,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,abc,def,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,abc,def,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,abc,def,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,abc,def,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,abc,def,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,abc,def,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,abc,def,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,abc,def,function f() {\n  var a = arguments;\n  \n  print(a.callee);\n  print(a.length);\n  print(a[0]);\n  print(a[1]);\n},2,abc,def,"



function f() {
  var a = arguments;
  
  print(a.callee);
  print(a.length);
  print(a[0]);
  print(a[1]);
}

for (var i = 0; i < 10; ++i)
  f(1, 2, 3);
for (var i = 0; i < 10; ++i)
  f({}, 'a');
for (var i = 0; i < 10; ++i)
  f('abc', 'def');


print(actual, expected)
