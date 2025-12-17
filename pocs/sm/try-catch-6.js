var o = {
    valueOf: function() {}
};
var threw = false;
function test(t) {
    try {
        for (x[t++] in o) {}
    } catch (err) {
	print(t, 3.14);
	threw = true;
    }
}
test(3.14);
print(threw, true);
