function f2(a4) {
  return {
      ...a4,
      "x": a4,
      __proto__: a4,
  };
}
const v14 = f2(f2);
const o26 = {
    ...v14,
    "x": 2626,
};
f2(f2);
