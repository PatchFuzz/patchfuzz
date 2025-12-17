;

function* f() {
    yield yield 1;
}

var g = f();
print(g.next().value, 1);
print(g.return("hello").value, "hello");
print(g.next().value, undefined);
