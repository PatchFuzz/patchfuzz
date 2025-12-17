function checkAssembly() {
  let output = disnative(f);
  if (/backend=ion/.test(output)) {
    print(/fcvtzs/.test(output), true);
    print(/fjcvtzs/.test(output), false);
  }
}

function f(x) {
  if (inIon()) {
    checkAssembly();
    return 0;
  }
  return x | 0;
}

let i = 1.5;
while (f(i += 1)) {};
