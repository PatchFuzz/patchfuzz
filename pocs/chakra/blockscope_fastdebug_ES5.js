{
    function foo() {
        var marker = 100;
        var foo = 1; 
    }
}

function bar(){
    var x = 100;
    {
        var y = 100;
        {
            foo();
        }
    }
}

function Run() {
    bar();
    bar();
    bar(); 
    bar; 
	print('PASSED');
}

print(Run); 
