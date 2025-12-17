assert = {
    sameValue: function (input, expected, message) {
        if (input !== expected)
            throw new Error(message);
    }
};

let o = {
    [Symbol.toPrimitive]: function() {
        throw new Error("Bad");
    }
};

try{
    o << Symbol("2");
    print(true, false, "Exception expected to be throwed, but executed without error");
} catch (e) {
    print(e.message, "Bad", "Expected to throw Error('Bad'), but got: " + e);
}

try{
    Symbol("2") << o;
    print(true, false, "Exception expected to be throwed, but executed without error");
} catch (e) {
    print(e instanceof TypeError, true, "Expected to throw TypeError, but got: " + e)
}

