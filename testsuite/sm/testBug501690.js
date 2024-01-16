function testBug501690() {
    
    function B(){}
    B.prototype = {x: 123};

    function D(){}
    D.prototype = new B;
    D.prototype.x = 1;    

    arr = [new D, new D, new D, D.prototype];  
    for (var i = 0; i < 4; i++)
        assertEq(arr[i].x, 1);  
}
testBug501690();
