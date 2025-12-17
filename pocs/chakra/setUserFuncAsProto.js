function foo() {
    function bar() {
        
    }

    return bar;
}


var func1 = foo();
var func2 = foo();


Object.setPrototypeOf(func2, func1);


func2.x = 1;


func1.x = 2;


if (undefined === func1.y)
{
    print('pass');
}

