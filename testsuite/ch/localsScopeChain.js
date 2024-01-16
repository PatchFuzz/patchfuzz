






function f0()
{
    var j0 =20;
    var j01 =20;
    
    function f1(a1)
    {
        var j = 10;
        var k = 20;
        var m = 20 + j0 + j01;
        function f2(b21, b22)
        {
            var j2 = arguments.length;
            var k2 = 10;
            function f3(c31,c32)
            {
                var a = 10;
                a++;                            
                a++;                            
                return c31+c32+a;               
            }
            
            function f32()
            {
                j;
            }
            f3();
        }
        
        f2();
    }
    f1();
}
f0();



function foo(constructor){
  constructor.name;               
}

foo({name:123});

WScript.Echo("Pass");
