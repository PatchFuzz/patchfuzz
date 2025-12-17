Function.prototype.call = function() {};
var sum = 0;
function foo() { sum++; }
for (var i = 0; i < 1000; i++) {
    foo.call({}, 0);
}
print(sum, 0);
