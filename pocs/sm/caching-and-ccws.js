const funcSource = "function call(f) { return f(); }";

const g1 = newGlobal();
const g2 = newGlobal();

g1.eval(funcSource);
g2.eval(funcSource);
eval(funcSource);

function doSaveStack() {
  return saveStack();
}

const captureStacksAcrossCompartmens = () =>
  [this, g1, g2].map(g => g.call(doSaveStack));

(function f0() {
  const stacks = [];

  for (var i = 0; i < 2; i++)
    stacks.push(...captureStacksAcrossCompartmens());

  const [s1, s2, s3, s4, s5, s6] = stacks;

  print(s1 != s2, true);
  print(s2 != s3, true);
  print(s3 != s1, true);

  print(s1, s4);
  print(s2, s5);
  print(s3, s6);
}());
