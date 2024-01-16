


function testThrow(code, column) {
  var caught = false;
  try {
    eval(code);
  } catch (e) {
    caught = true;
    assertEq(e.columnNumber, column);
  }
  assertEq(caught, true,
           "failed to throw evaluating <" + code + ">");
}



testThrow(`
...a)=>
`, 0);



testThrow(`
function f(x=...a) =>
`, 13);



testThrow(`
function f(... ...a) =>
`, 15);



testThrow(`
([... ...a)=>
`, 6);

testThrow(`
({...a)=>
`, 6);

testThrow(`
function f([... ...a)=>
`, 16);

testThrow(`
function f({...a)=>
`, 16);



testThrow(`
x => ...a)=>
`, 5);



testThrow("`${ ...a)=>}`", 4);



testThrow(`
var [... ...a)=>
`, 9);

testThrow(`
var {...a)=>
`, 9);



testThrow(`
var [a] = ...a)=>
`, 10);

testThrow(`
var {a:a} = ...a)=>
`, 12);

testThrow(`
var a = ...a)=>
`, 8);



testThrow(`
if (...a) =>
`, 4);



testThrow(`
for (...a)=>
`, 5);

testThrow(`
for (let a in ...a)=>
`, 14);

testThrow(`
for (let a of ...a)=>
`, 14);

testThrow(`
for (; ...a)=>
`, 7);

testThrow(`
for (;; ...a)=>
`, 8);



testThrow(`
switch (x) { case ...a)=>
`, 18);



testThrow(`
function f(x) { return ...a)=>
`, 23);



testThrow(`
function* f(x) { yield ...a)=>
`, 23);



testThrow(`
throw ...a) =>
`, 6);



testThrow(`
class A extends ...a) =>
`, 16);



testThrow(`
1 ? ...a) =>
`, 4);

testThrow(`
1 ? 2 : ...a) =>
`, 8);



testThrow(`
void ...a) =>
`, 5);

testThrow(`
typeof ...a) =>
`, 7);

testThrow(`
++ ...a) =>
`, 3);

testThrow(`
delete ...a) =>
`, 7);



testThrow(`
new ...a) =>
`, 4);



testThrow(`
x[...a) =>
`, 2);



testThrow(`
[... ...a) =>
`, 5);



testThrow(`
({[...a) =>
`, 3);

testThrow(`
({x: ...a) =>
`, 5);



testThrow(`
x = ...a) =>
`, 4);
