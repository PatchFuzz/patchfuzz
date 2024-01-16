

try {
    var e = new Error();
    e.name = e;
    "" + e;
} catch (e) {
    assertEq(e.message, 'too much recursion');
}
