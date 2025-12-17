print('abc'[10] === undefined);
String.prototype[10] = 'x';
print('abc'[10], 'x');




function f() {
  print('abc'[10], 'x');
}
f();
f();
f();
f();

print(2[11] === undefined);
Number.prototype[11] = 'y';
print(2[11], 'y');

print(true[12] === undefined);
Boolean.prototype[12] = 'z';
print(true[12], 'z');
