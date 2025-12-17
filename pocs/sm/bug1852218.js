if (this.unsetgczeal) {
    unsetgczeal("GenerationalGC");
}

function makeIonCompiledScript(n) {
  let src = "";
  for (var i = 0; i < n; i++) {
    src += "\n";
  }
  src += "function f() {}";
  eval(src);
  f();
  return f;
}

for (var i = 0; i < 5010; i++) {
  makeIonCompiledScript(i);
}
