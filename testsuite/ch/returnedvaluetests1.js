




function Run() {
    function f1() {
        var m = 31;
        m++;
        var coll = new Intl.Collator();
        m += f2();
        return m;
    }

    function f2() {
        return 100;
    }

    function test6() {
        var formatter = new Intl.NumberFormat("en-US"); 
        f1(new Intl.Collator());
        formatter;
        formatter = new Intl.NumberFormat("en-US"); 
    }
    test6();

    function test8() {
        function test7() {
            var d = new Date(2013, 1, 1);     
            [d.toLocaleString].every(function (f) {
                f; 
                return f;
            });
            return d;
        }
        test7();        
    }
    test8();


    function test9() {
        var k = 10;
        function test10 () {
            var k1 = 10; 
            return k1;
        }
        k+= test10(); 
    }
    test9();
    WScript.Echo("Pass");
}
WScript.Attach(Run);