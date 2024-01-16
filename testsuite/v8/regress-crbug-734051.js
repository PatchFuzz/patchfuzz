



function TestHeapNumberLiteral() {
    var data = { a: 0, b: 0 };
    data.a += 0.1;
    assertEquals(0.1, data.a);
    assertEquals(0, data.b);
};
TestHeapNumberLiteral();
TestHeapNumberLiteral();
TestHeapNumberLiteral();
TestHeapNumberLiteral();
TestHeapNumberLiteral();
