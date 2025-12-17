;

print(_=>getWaitForAllPromise(42), Error);
print(_=>getWaitForAllPromise([42]), Error);
print(_=>getWaitForAllPromise([{}]), Error);


getWaitForAllPromise([Promise.resolve()]);
