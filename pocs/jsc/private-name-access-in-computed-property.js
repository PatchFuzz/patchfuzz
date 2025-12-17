let assert = {
    throws: (expectedError, functor) => {
        try {
            functor();
        } catch(e) {
            if (!(e instanceof expectedError))
                throw new Error("Expected to throw: " + expectedError.name + " but throws: " + e.name);
        }
    }
}

print(TypeError, () => {
    class Base {
        [{}.#x] = 1; 
        #x = "foo";
    }
});

