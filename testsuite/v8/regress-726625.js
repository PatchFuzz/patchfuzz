



function abc() { return; }
assertThrows("abc" + String.fromCharCode(65534) + "(1)");
