






function blockScopeDeadZoneTestFunc() {
    var a = 0;
    a; 
    let b = 1;
    const cConst = 2;
    a; 
    {
        a; 
        const dConst = 3;
        let e = 4;
        dConst;
        e;
        b; 
    }
    
    return 0; 
}
blockScopeDeadZoneTestFunc();
WScript.Echo("PASSED");