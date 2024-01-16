








(function closureFoo(a) {
    if (a) {                            
        closureFoo();
    }
})(false);

(function closureFoo(a) {
    function inner() {
        if (a) {                        
            closureFoo();
        }
    }
    inner();                            
})(false);

function foo() {
    var j = function foo1(arg1) {
        foo1;                           
    }
    j(10);
}

foo();

function outer() {
    (function closureFoo(a) {
        if (a) {                       
            closureFoo;
        }
    })(false);

}
outer();
WScript.Echo("Pass");
