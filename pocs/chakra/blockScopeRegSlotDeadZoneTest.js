function blockScopeRegSlotDeadZoneTest() {
    var a = 0; 
    let b = 1; 
    const c = 2; 
    a; 
}

blockScopeRegSlotDeadZoneTest();
print("PASSED");