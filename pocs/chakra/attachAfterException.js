function bar() {
    try {
        function foo() {
            abc.def = 10;                   
            return 10;
        }
        foo();
    }
    catch (e) {
        e;
    }

    print("Pass");
}

bar();
print(bar);

