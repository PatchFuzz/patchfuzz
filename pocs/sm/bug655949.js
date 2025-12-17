var a;
try {
    a();
} catch(e) {
    print(e instanceof TypeError, true);
}
