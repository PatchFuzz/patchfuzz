function symcmp(c1, c2) {
    return (c1 !== c2);
}

var s = Symbol();
symcmp(s, s);
symcmp(s, s);
symcmp(1, 2);
print("Passed");
