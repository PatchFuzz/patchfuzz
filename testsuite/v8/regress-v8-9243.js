







const user = {value:undefined, done:true};


const arrayResult = (new Array())[Symbol.iterator]().next();
assertTrue(%HaveSameMap(user, arrayResult));


const mapResult = (new Map())[Symbol.iterator]().next();
assertTrue(%HaveSameMap(user, mapResult));


const setResult = (new Set())[Symbol.iterator]().next();
assertTrue(%HaveSameMap(user, setResult));


function* generator() {}
const generatorResult = generator().next();
assertTrue(%HaveSameMap(user, setResult));
