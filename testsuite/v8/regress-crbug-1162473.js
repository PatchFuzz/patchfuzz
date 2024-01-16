



const script = `__proto__ = Realm.global(Realm.create());`;
const w = new Worker(script, {type : 'string'});
w.postMessage('hi');
