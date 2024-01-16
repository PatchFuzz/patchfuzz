






function Run(){
    function foo() {  
        let a = "a";
        function bar() {}  
        a;  
    }
    foo();
};
Run();
WScript.Attach(Run);  
WScript.Echo("Pass");  
