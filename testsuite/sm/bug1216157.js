

gcslice(0); 
function f(str) {
    for (var i = 0; i < 10; i++) {
        arr = /foo(ba(r))?/.exec(str);
        var x = arr[oomAfterAllocations(100)] + " " + arr[1] + " " + 1899;
    }
}
try {
    f("foo");
} catch(e) {}
