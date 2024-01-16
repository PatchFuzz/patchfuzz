







function Run() {
    (function () {
        function foo1() {
            return 'newfoo';
        }
        eval("foo1 = null");
        eval(''); 
    })();

    var x = 1; 

    function foo2() {
        {
            function foo3() { }
        }
    }
    foo2();

    x;

    function bar4() {
        function bar5() {
        }
    }
    bar4();

    WScript.Echo('PASSED')
}

WScript.Attach(Run);
