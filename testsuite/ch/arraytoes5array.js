






var test10_a = [1];

Object.defineProperty(
    test10_a,
    "p",
    {
        configurable: true,
        enumerable: true,
        get: function() {
            Object.defineProperty(
                test10_a,
                "1",
                {
                    configurable: true,
                    enumerable: true,
                    get: function() { return 5; },
                    set: function() { }
                });
            return 2;
        }
    });

test10_a;
test10_a;               

WScript.Echo("Pass");
	