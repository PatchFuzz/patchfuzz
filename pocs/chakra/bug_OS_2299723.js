function f0() {
    let x = 0;

    try {
        eval("var x = 5");
    } catch (e) {
        print("eval('var x = 5') threw '" + e.message + "'");
    }

    try {
        eval("x = 5");
    } catch (e) {
        print("unexpected error thrown: '" + e.message + "'");
    }

    print("x: " + x);
}



f0();

function f1() {
    const y = 1;

    try {
        eval("var y = 5");
    } catch (e) {
        print("eval('var y = 5') threw '" + e.message + "'");
    }

    try {
        eval("y = 5");
    } catch (e) {
        print("eval('y = 5') threw '" + e.message + "'");
    }

    print("y: " + y);
}



f1();
