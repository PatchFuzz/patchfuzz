for (let v0 = 0; v0 < 5; v0++) {
  function f1() {
      return v0;
  }
  for (let v2 = 0; v2 < 2; v2++) {
      const v3 = %OptimizeOsr();
      let v4 = -43045;
      for (let v5 = 0; v5 < 5; v5++) {
          const v7 = v4 + 4294967295;
          v4 = v7 * v7;
      }
  }
}
