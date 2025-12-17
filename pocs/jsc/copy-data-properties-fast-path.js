function foo() {
  let { ...r } = { xx:0 };
  foo();
}

try {
    foo();
} catch { }
