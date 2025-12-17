var passed = true;
try {
    JSON.parse("0101");
    print("Syntax error expected when parsing 0101.");
    passed = false;
} catch (ex) {
    if (!(ex instanceof SyntaxError)) {
        print("Syntax error expected when parsing 0101. Got - " + ex);
    }
}

if (JSON.parse("0.101") !== 0.101) {
    print("Incorrectly parsed 0.101.");
    passed = false;
};

if (JSON.parse("101") !== 101) {
    print("Incorrectly parsed 101.");
    passed = false;
};

if (passed) {
    print("Pass");
}