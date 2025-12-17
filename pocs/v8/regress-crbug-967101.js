function packedStore() {
  let a = Object.seal([""]);
  a[0] = 0;
  print(a[0], 0);
}

packedStore();
packedStore();


function holeyStore() {
  let a = Object.seal([, ""]);
  a[0] = 0;
  print(a[0], undefined);
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
print(a, [, 0]);
bar();
print(a, [, 0]);
bar();
print(a, [, 0]);
function baz() {
  a[2] = 2;
}
print(a, [, 0]);
baz();
print(a, [, 0]);
baz();
print(a, [, 0]);
