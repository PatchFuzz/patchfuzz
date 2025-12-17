function TestHeapNumberLiteral() {
    var data = { a: 0, b: 0 };
    data.a += 0.1;
    print(0.1, data.a);
    print(0, data.b);
};
TestHeapNumberLiteral();
TestHeapNumberLiteral();
TestHeapNumberLiteral();
TestHeapNumberLiteral();
TestHeapNumberLiteral();
