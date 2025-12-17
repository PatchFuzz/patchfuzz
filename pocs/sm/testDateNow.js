function testDateNow() {
    
    
    
    var time = Date.now();
    for (var j = 0; j < 9; ++j)
        time = Date.now();
    return "ok";
}
print(testDateNow(), "ok");
