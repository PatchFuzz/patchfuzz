;
var orNaNTest2 = new Function("return orTestHelper(NaN, 1, 10);");
print(orNaNTest2(), 45);
