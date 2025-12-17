x = 30;
function foo() {
  print(x, 30);
  delete x;
  y = 20;
  Object.defineProperty(this, 'x', {value:10});
  print(x, 10);
}
foo();
