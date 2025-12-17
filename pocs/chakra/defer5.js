function test()
{
    function foo() {
        
        bar;
    }

    foo();
    let bar = this;
}

test();