
function testBug507425() {
    var r = /x/;
    for (var i = 0; i < 3; i++)
        r.lastIndex = 0;          
    var s = ';';
    try {
        for (i = 0; i < 80; i++)
            s += s;                   
    } catch (exc) {
        return "ok";
    }
}
assertEq(testBug507425(), "ok");
