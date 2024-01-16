



assertDoesNotThrow('/(?:(?=(foo)))?/u.exec("foo")');
assertThrows('/(?=(foo))?/u.exec("foo")');
