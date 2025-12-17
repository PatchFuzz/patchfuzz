try {
    var e = new Error();
    e.name = e;
    "" + e;
} catch (e) {
    print(e.message, 'too much recursion');
}
