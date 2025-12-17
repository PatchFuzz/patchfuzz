function testDoubleToStr() {
    var x = 0.0;
    var y = 5.5;
    for (var i = 0; i < 200; i++) {
       x += parseFloat(y.toString());
    }
    return x;
}
print(testDoubleToStr(), 5.5*200);
