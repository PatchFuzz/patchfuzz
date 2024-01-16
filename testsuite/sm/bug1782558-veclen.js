





try {
    let x = [];
    x.length = Math.pow(2, 32) - 1;
    x + 1;
    assertEq(true, false, "overflow expected");
} catch (e) {
    assertEq((e + "").includes("InternalError: allocation size overflow"), true);
}
