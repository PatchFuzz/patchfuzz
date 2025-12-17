function f() {
    eval("(function() y)()");
}
oomTest(f);
fullcompartmentchecks(true);
