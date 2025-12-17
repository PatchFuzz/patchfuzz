function checkNameLookup() {
    return "global";
}

function print(got, expected, message) {
    print(message + ": " + got, message + ": " + expected);
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
    print(checkNameLookup(), "local", "nameLookup");
    print(checkThisBinding(), "local", "thisBinding");

    
    
    
    var reason = " in lambda in Call";
    (function() {
	print(checkNameLookup(), "local", "nameLookup" + reason);
	print(checkThisBinding(), "local", "thisBinding" + reason);
    })();
} + ")()", {envChainObject: obj});
