function f1(a,b,c,d) {
    if (a < 0)
        throw arguments;

    return a + b + c + d;
}

function f2(a,b,c,d,e) {
    return f1(a,b,c,d*e);
}

function f3(a,v) {
    return f2(a, ...v);
}

function f4(i, j) {
    return f3(i, [j,3,4,5]);
}

function f5(i) {
    return f4(i, i);
}


gc(); gc();


for (var i = 0; i < 1000; ++i)
{
    bailAfter(i);
    print(f5(i), i+i+23);
}


for (var i = 1; i < 100; ++i)
{
    let x;

    try {
        f5(-i);

        
        print(1, 0);
    }
    catch (e) {
        x = e;
    }

    print(x[0], -i);
    print(x[1], -i);
    print(x[2],  3);
    print(x[3], 20);
}
