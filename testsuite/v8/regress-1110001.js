



function foo() {
  try {
    foo();
  } catch {
    print('Stack overflow');
    Worker('string', new Proxy([], {}));
  }
}
try {
  foo();
} catch {
  
}
