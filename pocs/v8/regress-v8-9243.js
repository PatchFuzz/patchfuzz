const user = {value:undefined, done:true};


const arrayResult = (new Array())[Symbol.iterator]().next();
print(%HaveSameMap(user, arrayResult));


const mapResult = (new Map())[Symbol.iterator]().next();
print(%HaveSameMap(user, mapResult));


const setResult = (new Set())[Symbol.iterator]().next();
print(%HaveSameMap(user, setResult));


function* generator() {}
const generatorResult = generator().next();
print(%HaveSameMap(user, setResult));
