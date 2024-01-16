






function blockScopeNestedFunctionTestFunc() {
    var x = -1; 
    let a = 0;
    const aConst = 1;
    a; 
    function innerFunc() {
        
        const bConst = 2;
        let b = 3;
        b; 
        function innerInnerFunc() {
            
            let c = 4;
            const cConst = 5;
            a;
            aConst;
            b;
            bConst;
            c; 
        }
        innerInnerFunc();
        return 0; 
    }
    innerFunc(); 
    return 0; 
}
blockScopeNestedFunctionTestFunc();
WScript.Echo("PASSED");