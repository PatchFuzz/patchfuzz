




function test0() {
    var sum = 0;
    var j = 0;
    for(var i = 0; i < 2; ++i) {
        if(j > 1)
            sum += 1 % j;
    }
    return sum;
}
test0();

WScript.Echo("pass");
