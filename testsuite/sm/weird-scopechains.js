function checkNameLookup() {
    return "global";
}

function assertWithMessage(got, expected, message) {
    assertEq(message + ": " + got, message + ": " + expected);
}

var obj = {
    checkNameLookup: function() {
	return "local";
    },

    checkThisBinding: function() {
	return this.checkNameLookup();
    },
};

evaluate("(" + function() {
    assertWithMessage(checkNameLookup(), "local", "nameLookup");
    assertWithMessage(checkThisBinding(), "local", "thisBinding");

    
    
    
    var reason = " in lambda in Call";
    (function() {
	assertWithMessage(checkNameLookup(), "local", "nameLookup" + reason);
	assertWithMessage(checkThisBinding(), "local", "thisBinding" + reason);
    })();
} + ")()", {envChainObject: obj});
