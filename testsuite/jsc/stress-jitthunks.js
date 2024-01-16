{
    let functions = [];
    for (var i = 0; i < 1e5; ++i)
        functions.push($vm.createEmptyFunctionWithName(i));
    let newGlobal = $vm.createGlobalObject();
    newGlobal.WeakMap.prototype.set;
    newGlobal.WeakMap.prototype.set = null; 
    $vm.gcSweepAsynchronously(); 
    newGlobal = $vm.createGlobalObject();
    let set = newGlobal.WeakMap.prototype.set; 
    $vm.gc(); 
    try {
        set(); 
    } catch { };
    for (var i = 0; i < 1e3; ++i)
        functions.push($vm.createEmptyFunctionWithName(i));
    try {
        set();
    } catch { };
}
