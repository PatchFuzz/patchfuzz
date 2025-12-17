function Run(){
    function foo() {  
        let a = "a";
        function bar() {}  
        a;  
    }
    foo();
};
Run();
print(Run);  
print("Pass");  
