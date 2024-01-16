function str(c) {
    let s = c;
    for (let i = 0; i < 30; i++)
        s += c;
    ensureLinearString(s);
    return s;
}

function f() {
  
  const o = {owner: 'short1', s: 'short2'};

  
  const r1 = str("a") + str("b");
  gc();

  
  
  
  o.owner = ensureLinearString(str("a") + str("b") + str("c"));

  
  const r2 = r1 + str("c");

  
  
  ensureLinearString(r2);

  
  
  o.s = r2;

  
  
  
  
  minorgc();

  
  
  const s1 = r1.substr(0, 31);
}

f();
