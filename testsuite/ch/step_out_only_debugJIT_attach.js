






function foo() {
    var a = [];
    a.push(1);

    a.forEach(function () {
        var x; 
    });
}
function Run() {
    foo();
    foo();
    foo(); 
    foo; 
    WScript.Echo('PASSED');
}

WScript.Attach(Run);





