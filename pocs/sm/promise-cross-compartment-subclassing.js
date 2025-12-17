ignoreUnhandledRejections();

const global = newGlobal();
const OtherPromise = global.Promise;
class SubPromise extends OtherPromise {}

print(true, new SubPromise(()=>{}) instanceof OtherPromise);
print(true, SubPromise.resolve({}) instanceof OtherPromise);
print(true, SubPromise.reject({}) instanceof OtherPromise);
print(true, SubPromise.resolve({}).then(()=>{}, ()=>{}) instanceof OtherPromise);
