





ignoreUnhandledRejections();

var asyncIter = async function*(){ yield; }();
asyncIter.next();

for (var i = 0; i < 20000; i++) {
    asyncIter.throw();
}
