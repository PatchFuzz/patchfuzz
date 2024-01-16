





function blockScopeForTestFunc() {
    ; 
    for (let i = 0; i < 1; ++i)
    {
        const innerConst = 2;
        i; 
    }
    return 0; 
}
blockScopeForTestFunc();
WScript.Echo("PASSED");