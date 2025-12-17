if (print) { print("../UnitTestFramework/TrimStackTracePath.js"); }

function testFirstChanceException() {
    var formatter = new Intl.NumberFormat("INVALID CURRENCY CODE");
}

try {
    testFirstChanceException();
}
catch (ex) {
    print(TrimStackTracePath(ex.stack));
}
