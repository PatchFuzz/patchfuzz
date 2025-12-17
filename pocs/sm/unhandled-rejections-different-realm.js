var z = newGlobal();

Promise.prototype.then = z.Promise.prototype.then;


evalcx("var p = (async function() { throw 'some reason' })()", z);


var p = (async function f() { throw 'other reason'; })();


p.then();


evalcx("p.then()", z);
