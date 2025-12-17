function test(zero, one) {
    print(10 - zero, 10);
    print(10 - one, 9);
    print(zero - 0, 0);
    print(one - 1, 0);

    print(10 * zero, 0);
    print(zero * 10, 0);
    print(10 * one, 10);
    print(one * 10, 10);

    print(10 / one, 10);
    print(one / 1, 1);
    print(10 % one, 0);
    print(one % 1, 0);

    print(10 ** one, 10);
    print(one ** 4, 1);

    print(10 & zero, 0);
    print(zero & 10, 0);
    print(10 & one, 0);
    print(one & 10, 0);

    print(10 | zero, 10);
    print(zero | 10, 10);
    print(10 | one, 11);
    print(one | 10, 11);

    print(10 ^ zero, 10);
    print(zero ^ 10, 10);
    print(10 ^ one, 11);
    print(one ^ 10, 11);

    print(10 << zero, 10);
    print(zero << 10, 0);
    print(10 << one, 20);
    print(one << 10, 1024);

    print(10 >> zero, 10);
    print(zero >> 10, 0);
    print(10 >> one, 5);
    print(one >> 10, 0);

    print(10 >>> zero, 10);
    print(zero >>> 10, 0);
    print(10 >>> one, 5);
    print(one >>> 10, 0);
}

for (var i = 0; i < 10; i++) {
    test(0, 1);
    test('0', '1');
    test('0x0', '0x1');
    test('0.0', '1.0');
}
