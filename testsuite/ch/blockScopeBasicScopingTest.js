






function blockScopeBasicScopingTestFunc() {
    var a = 0;

    
    a;
    {
        let integer = 1;
        let string = "2";
        let object = { p1: 3, p2: 4 };
        const constInteger = 5;
        const constString = "6";
        const constObject = { cp1: { cp2: 7, cp3: 8 }, cp4: 9 };

        
        integer; 
    }
    
    
    a;
    return 0;
}
blockScopeBasicScopingTestFunc();
WScript.Echo("PASSED");