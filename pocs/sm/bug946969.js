function f() {
    return Math.abs(~(Math.tan()));
}

for (var i=0; i<1000; i++)
    print(f(i), 1);
