function f() {
    var g = x => { return !x; };
    return "f:" + g(true);
}

print(f(), "f:false");
