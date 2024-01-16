
































function test(x) {
    var xp = x  * 1 - 1;
    return xp;
}


function check(count) {
    %DeoptimizeFunction(test);
    var i;
    for(var x=0; x < count; x++){
        for(var y=0; y < count; y++){
            i = test(x / 100);
        }
    }
    assertEquals((count - 1) / 100, i + 1);
}


check(150);
check(200);
check(350);
