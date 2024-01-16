load(libdir + "asserts.js");

assertThrowsInstanceOf(_=>getWaitForAllPromise(42), Error);
assertThrowsInstanceOf(_=>getWaitForAllPromise([42]), Error);
assertThrowsInstanceOf(_=>getWaitForAllPromise([{}]), Error);


getWaitForAllPromise([Promise.resolve()]);
