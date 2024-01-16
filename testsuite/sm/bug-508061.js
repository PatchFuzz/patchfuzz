function loop() {
    var x;
    for (var i = 0; i < 9; i++)
        x = {1.5: 1};
    return x;
}

loop(); 
Object.prototype.__defineSetter__('1.5', function () { return 'BAD'; });
var x = loop(); 
assertEq(x["1.5"], 1);