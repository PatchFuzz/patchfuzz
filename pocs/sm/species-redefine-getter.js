Object.defineProperty(Promise, "foo", {configurable: true, get: function() {}});
Object.defineProperty(Promise, "foo", {configurable: true, get: function() {}});


var p = new Promise(() => {});
for (let i = 0; i < 5; i++) {
    Promise.all([p]);
}


let count = 0;
Object.defineProperty(Promise, Symbol.species,
                      {get: function() { count++; }, enumerable: false, configurable: true});


for (let i = 0; i < 5; i++) {
    Promise.all([p]);
}
print(count, 5);
