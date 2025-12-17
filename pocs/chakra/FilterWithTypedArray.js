class dummy {
    constructor() {
        return new Int16Array(4);
    }
}

var handler = {
    get: function(oTarget, sKey) {
        if (sKey.toString()=="constructor") {
            return { [Symbol.species] : dummy };
        } else {
            return 4;
        }
    },

    has: function (oTarget, sKey) {
        return Reflect.has(oTarget, sKey);
    },
};

var array = [1];
var proxy = new Proxy(array, handler);

try
{
    
    
    var boundFilter = Array.prototype.filter.bind(proxy);
    boundFilter(function() { return true; });
    print("TypeError expected. TypedArray indicies should be non-configurable.");
}
catch (e)
{
    if (e == "TypeError: Cannot redefine property '0'")
    {
        print("passed");
    }
}
