



function shouldBe(actual, expected) {
    
    
    
    if (typeof actual === 'string')
        actual = actual.replaceAll(' ', ' ');

    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

if ($vm.icuHeaderVersion() >= 67) {
    let df = new Intl.DateTimeFormat("en");
    
    let d1 = new Date(2019, 3, 4);
    let d2 = new Date(2019, 4, 5);
    shouldBe(df.format(d1), df.formatRange(d1, d1));
    shouldBe(df.format(d2), df.formatRange(d2, d2));
    shouldBe(df.formatRange(d1, d2), "4/4/2019 – 5/5/2019");
    
    let d3 = new Date(1582, 8, 13);
    let d4 = new Date(1582, 9, 14);
    shouldBe(df.format(d3), df.formatRange(d3, d3));
    shouldBe(df.format(d4), df.formatRange(d4, d4));
    shouldBe(df.formatRange(d3, d4), "9/13/1582 – 10/14/1582");
    
    let d5 = new Date(1000, 0, 1);
    let d6 = new Date(1001, 1, 2);
    shouldBe(df.format(d5), df.formatRange(d5, d5));
    shouldBe(df.format(d6), df.formatRange(d6, d6));
    shouldBe(df.formatRange(d5, d6), "1/1/1000 – 2/2/1001");
}
