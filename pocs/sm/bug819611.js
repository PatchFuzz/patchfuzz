x = [0, 0]
Object.freeze(x).map(function() {
    x.length = 6
})
print(x.length,2);
