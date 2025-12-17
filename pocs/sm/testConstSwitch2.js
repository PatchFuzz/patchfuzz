function testConstSwitch2() {
    var x;
    for (var j = 0; j < 4; ++j) { switch(0/0) { } }
    return "ok";
}
print(testConstSwitch2(), "ok");
