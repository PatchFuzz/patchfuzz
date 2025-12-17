function testNuke() {
    var wrapper = evaluate("({a: 15, b: {c: 42}})",
                           {global: newGlobal({newCompartment: true, sameZoneAs: this})});

    var i, error;
    try {
        for (i = 0; i < 150; i++) {
            print(wrapper.b.c, 42);
            print(wrapper.a, 15);

            if (i == 142) {
                
                nukeCCW(wrapper);
            }
        }
    } catch (e) {
        error = e;
    }

    print(error.message.includes("dead object"), true);
    print(i, 143);
}

function testSweep() {
    var wrapper = evaluate("({a: 15, b: {c: 42}})",
                           {global: newGlobal({newCompartment: true})});
    var error;
    nukeCCW(wrapper);
    gczeal(8, 1); 
    try {
      
      wrapper.x = 4;
    } catch (e) {
        error = e;
    }
    print(error.message.includes("dead object"), true);
}

testNuke();
testSweep();
