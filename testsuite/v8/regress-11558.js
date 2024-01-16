






for (let nullish of [undefined, null]) {
  const fn = nullish;
  const n = nullish;
  const o = {};

  assertEquals(fn?.(...[], 1), undefined);
  assertEquals(fn?.(...[], ...[]), undefined);
  assertEquals(o.method?.(...[], 1), undefined);
  assertEquals(n?.method(...[], 1), undefined);
}
