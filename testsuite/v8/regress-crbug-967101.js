




function packedStore() {
  let a = Object.seal([""]);
  a[0] = 0;
  assertEquals(a[0], 0);
}

packedStore();
packedStore();


function holeyStore() {
  let a = Object.seal([, ""]);
  a[0] = 0;
  assertEquals(a[0], undefined);
}

holeyStore();
holeyStore();


let a = Object.seal([, ""]);
function foo() {
  a[1] = 0;
}

foo();
foo();
function bar() {
  a[0] = 1;
}
assertEquals(a, [, 0]);
bar();
assertEquals(a, [, 0]);
bar();
assertEquals(a, [, 0]);
function baz() {
  a[2] = 2;
}
assertEquals(a, [, 0]);
baz();
assertEquals(a, [, 0]);
baz();
assertEquals(a, [, 0]);
