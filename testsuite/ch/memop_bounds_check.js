




function foo() {
  const size = 100;
  let a = new Array(size);
  let b = new Array(size);
  let c = new Array(size);
  let d = new Array(size);
  let e = new Array(size);
  a.fill(1);
  b.fill(1);
  c.fill(1);
  d.fill(1);
  
  
  for(let i = 0; i < size; ++i) {
    a[i] = b[i];
    c[i] = d[i];
    e[i] = 0;
  }
}

foo();
foo();
print("PASSED");
