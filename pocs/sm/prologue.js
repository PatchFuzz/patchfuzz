var appendToActual = function(s) {
    actual += s + ',';
}






let hasFunction = {};
for (const name of [
    
    "gczeal",
    "unsetgczeal",
    "schedulegc",
    "selectforgc",
    "verifyprebarriers",
    "verifypostbarriers",
    "currentgc",
    "deterministicgc",
    "dumpGCArenaInfo",
    "setMarkStackLimit",
    
    "oomThreadTypes",
    "oomAfterAllocations",
    "oomAtAllocation",
    "resetOOMFailure",
    "oomTest",
    "stackTest",
    "interruptTest"]) {
    const present = name in this;
    if (!present) {
        this[name] = function() {};
    }
    hasFunction[name] = present;
}


gcparam('parallelMarkingThresholdMB', 0);
