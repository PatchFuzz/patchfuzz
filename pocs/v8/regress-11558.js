for (let nullish of [undefined, null]) {
  const fn = nullish;
  const n = nullish;
  const o = {};

  print(fn?.(...[], 1), undefined);
  print(fn?.(...[], ...[]), undefined);
  print(o.method?.(...[], 1), undefined);
  print(n?.method(...[], 1), undefined);
}
