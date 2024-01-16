
function testGlobalShapeChangeAfterDeepBail() {
    function f(name) {
        this[name] = 1;  
        for (var i = 0; i < 4; i++)
            ; 
    }

    
    
    var arr = [[], [], [], ["bug0", "bug1", "bug2", "bug3", "bug4"]];
    for (var i = 0; i < arr.length; i++)
        arr[i].forEach(f);
}
testGlobalShapeChangeAfterDeepBail();
