;

var g = newGlobal();
g.eval(`
    var obj = {};
    obj[Symbol.iterator] = function () { return this; };
    obj.next = function () { return { done: true }; };
`);
for (x of g.obj)
    throw 'FAIL';
