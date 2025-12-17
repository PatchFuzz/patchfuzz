function testThrow(code, column) {
  var caught = false;
  try {
    eval(code);
  } catch (e) {
    caught = true;
    print(e.columnNumber, column);
  }
  print(caught, true,
           "failed to throw evaluating <" + code + ">");
}



testThrow(`
...a)=>
`, 1);



testThrow(`
function f(x=...a) =>
`, 14);



testThrow(`
function f(... ...a) =>
`, 16);



testThrow(`
([... ...a)=>
`, 7);

testThrow(`
({...a)=>
`, 7);

testThrow(`
function f([... ...a)=>
`, 17);

testThrow(`
function f({...a)=>
`, 17);



testThrow(`
x => ...a)=>
`, 6);



testThrow("`${ ...a)=>}`", 5);



testThrow(`
var [... ...a)=>
`, 10);

testThrow(`
var {...a)=>
`, 10);



testThrow(`
var [a] = ...a)=>
`, 11);

testThrow(`
var {a:a} = ...a)=>
`, 13);

testThrow(`
var a = ...a)=>
`, 9);



testThrow(`
if (...a) =>
`, 5);



testThrow(`
for (...a)=>
`, 6);

testThrow(`
for (let a in ...a)=>
`, 15);

testThrow(`
for (let a of ...a)=>
`, 15);

testThrow(`
for (; ...a)=>
`, 8);

testThrow(`
for (;; ...a)=>
`, 9);



testThrow(`
switch (x) { case ...a)=>
`, 19);



testThrow(`
function f(x) { return ...a)=>
`, 24);



testThrow(`
function* f(x) { yield ...a)=>
`, 24);



testThrow(`
throw ...a) =>
`, 7);



testThrow(`
class A extends ...a) =>
`, 17);



testThrow(`
1 ? ...a) =>
`, 5);

testThrow(`
1 ? 2 : ...a) =>
`, 9);



testThrow(`
void ...a) =>
`, 6);

testThrow(`
typeof ...a) =>
`, 8);

testThrow(`
++ ...a) =>
`, 4);

testThrow(`
delete ...a) =>
`, 8);



testThrow(`
new ...a) =>
`, 5);



testThrow(`
x[...a) =>
`, 3);



testThrow(`
[... ...a) =>
`, 6);



testThrow(`
({[...a) =>
`, 4);

testThrow(`
({x: ...a) =>
`, 6);



testThrow(`
x = ...a) =>
`, 5);
