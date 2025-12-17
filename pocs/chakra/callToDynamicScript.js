function test0(){
    const a = { b: new Function("[].slice();") };
    for (let i = 0; i < 2; ++i)
        a.b.call();
};

test0();
print("Passed");