let a, b;
for (i=0; i < 300000; i++) {
    let c = { a: a, b: b };
    a = b;
    b = c;
}

gc();





gcparam('largeHeapSizeMin', 99);


