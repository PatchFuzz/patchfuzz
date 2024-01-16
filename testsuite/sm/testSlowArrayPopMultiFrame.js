

function testSlowArrayPopMultiFrame() {    
    var a = [];
    for (var i = 0; i < 9; i++)
        a[i] = [0];
    a[8].__defineGetter__("0", function () { return 23; });

    function child(a, i) {
        return a[i].pop();  
    }
    function parent(a, i) {
        return child(a, i);
    }
    function gramps(a, i) { 
        return parent(a, i);
    }

    var last;
    for (var i = 0; i < 9; i++)
        last = gramps(a, i);
    return last;
}
assertEq(testSlowArrayPopMultiFrame(), 23);
