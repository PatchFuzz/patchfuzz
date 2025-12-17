var intMin = -2147483648;
var intMax = 2147483647;
var negativeZero = -0;
var zero = 0;

function testModNegativeZero() {
    print(intMin % -2147483648, -0);
    print(intMin % -1, -0);
    print(intMin % 1, -0);
    print(intMin % -2147483648, -0);

    print(((intMin|0) % -2147483648)|0, 0);
    print(((intMin|0) % -1)|0, 0);
    print(((intMin|0) % 1)|0, 0);
    print(((intMin|0) % -2147483648)|0, 0);
}

testModNegativeZero();
testModNegativeZero();

function testMinModulus1() {
    print(intMin % -3, -2);
    print(intMin % 3, -2);
    print(intMin % 10, -8);
    print(intMin % 2147483647, -1);

    print(((intMin|0) % -3)|0, -2);
    print(((intMin|0) % 3)|0, -2);
    print(((intMin|0) % 10)|0, -8);
    print(((intMin|0) % 2147483647)|0, -1);
}

testMinModulus1();
testMinModulus1();

function testMinModulus2() {
    for (var i = -10; i <= 10; ++i)
        print(i % -2147483648, i);
    print(intMax % -2147483648, intMax);

    for (var i = -10; i <= 10; ++i)
        print(((i|0) % -2147483648)|0, i);
    print(((intMax|0) % -2147483648)|0, intMax);
}

testMinModulus2();
testMinModulus2();

function testDivEdgeCases() {
    print(intMin / -2147483648, 1);
    print(intMin / -1, -intMin);
    print(negativeZero / -2147483648, 0);
    print(zero / -2147483648, -0);

    print(((intMin|0) / -2147483648)|0, 1);
    print(((intMin|0) / -1)|0, intMin);
    print(((negativeZero|0) / -2147483648)|0, 0);
    print(((zero|0) / -2147483648)|0, 0);
}

testDivEdgeCases();
testDivEdgeCases();
