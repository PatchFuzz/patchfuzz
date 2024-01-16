








function Run() {
    
    {
        let a = 0;          
        function inner() {  
            a++;
        }
        inner();
    }

    
    {
        let c = 2;          
        function inner2() { 
            c++;
        }
        inner2();
    }
};
Run();

WScript.Attach(function(){Run();});
WScript.Echo("PASSED");