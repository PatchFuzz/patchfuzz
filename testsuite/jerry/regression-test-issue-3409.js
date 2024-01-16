













var a;
Promise.race([a]).then(function() {[] = []});
Promise.race().then(function() {}, function() { throw "'this' had incorrect value!"})

var a = Promise.resolve('a');
var b = Promise.reject('b');
Promise.race([a, b]).then(function(x) {
    var [a, b] = [1, 2];
}, function(x) {});
Promise.race([b, a]).then(function(x) {}, function(x) {});
Promise.race([, b, a]).then(function(x) {}, function(x) {});
Promise.race(a).then(function(x) {}, function(x) {
    String(i.name === "TypeError");
});
