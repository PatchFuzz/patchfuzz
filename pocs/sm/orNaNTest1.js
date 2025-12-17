;
var orNaNTest1 = new Function("return orTestHelper(NaN, NaN, 10);");
print(orNaNTest1(), 0);
