function blockScopeActivationObjectDeadZoneTest() {
    var a = 0; 
    let b = 1; 
    const c = 2; 
    eval(""); 
}

blockScopeActivationObjectDeadZoneTest();
print("PASSED");