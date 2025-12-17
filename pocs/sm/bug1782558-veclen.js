try {
    let x = [];
    x.length = Math.pow(2, 32) - 1;
    x + 1;
    print(true, false, "overflow expected");
} catch (e) {
    print((e + "").includes("InternalError: allocation size overflow"), true);
}
