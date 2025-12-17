function outer() {
    print('outer');
    function inner() {
        return inner;
    }
    if (i) return inner();
    i++;
}
var i = 0;
outer();
outer();
var f = outer();
print(typeof f());

