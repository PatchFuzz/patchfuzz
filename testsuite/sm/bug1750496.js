
for (let v1 = 0; v1 < 4; v1++) {
    const v28 = "aa".split('');
    v28[0] = 1;
    const v35 = "aa".split('');
    assertEq(v35[0], "a");
    assertEq(Object.is(v35, v28), false);
}
