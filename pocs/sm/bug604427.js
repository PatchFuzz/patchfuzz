function testInt(x) {
    var a = x|0;
    return (a !== a);
}
print(testInt(10), false);
