function test(input, resPos, resNeg, resToNumeric, resInc, resDec) {
    print(+input, resPos);
    print(-input, resNeg);

    var input1 = input;
    print(input1++, resToNumeric);
    print(input1, resInc);

    var input2 = input;
    print(++input2, resInc);
    print(input1, resInc);

    var input3 = input;
    print(input3--, resToNumeric);
    print(input3, resDec);

    var input4 = input;
    print(--input4, resDec);
    print(input4, resDec);
}
for (var i = 0; i < 50; i++) {
    test(null, 0, -0, 0, 1, -1);
    test(undefined, NaN, NaN, NaN, NaN, NaN);
    test(true, 1, -1, 1, 2, 0);
    test(false, 0, -0, 0, 1, -1);
}
