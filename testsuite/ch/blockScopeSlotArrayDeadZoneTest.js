





function blockScopeSlotArrayDeadZoneTest() {
    var a = 0; 
    let b = 1; 
    const c = 2; 
    a; 
    function inner() {
        b;
        c; 
    }
    inner();
}

blockScopeSlotArrayDeadZoneTest();
WScript.Echo("PASSED");