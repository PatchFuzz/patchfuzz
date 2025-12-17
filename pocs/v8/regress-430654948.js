function makeArray(x) { return [x]; }

let i = 0;
for (const v of [-undefined, true]) {
  function bar(x) {
    makeArray(undefined);
    return makeArray(x);
  }

  const result = bar(v);
  if(i == 0) print([NaN], result);
  if(i == 1) print([true], result);
  ++i;
}
