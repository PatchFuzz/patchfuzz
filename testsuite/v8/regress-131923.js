


























assertFalse(/\u9999{4}/.test(""));
assertTrue(/\u9999{0,4}/.test(""));
assertFalse(/\u9999{4,}/.test(""));
