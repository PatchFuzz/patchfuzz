


var appendToActual = function(s) {
    actual += s + ',';
}



let hasFunction = {};
for (const name of ["gczeal",
                    "schedulegc",
                    "gcslice",
                    "selectforgc",
                    "verifyprebarriers",
                    "verifypostbarriers",
                    "gcPreserveCode",
                    "setMarkStackLimit"]) {
    const present = name in this;
    if (!present) {
        this[name] = function() {};
    }
    hasFunction[name] = present;
}
