;

function* f() {
    {
        let x = 1;
        while (true) {
            yield evalInFrame(0, "x");
            x++;
            {
                let y = 1;
                yield evalInFrame(0, "++y");
                yield evalInFrame(0, "++y");
            }
        }
    }
}

var gen = f();
print(gen.next().value, 1);
print(gen.next().value, 2);
gc();
print(gen.next().value, 3);
gc();
print(gen.next().value, 2);
print(gen.next().value, 2);
gc();
print(gen.next().value, 3);
gc();
print(gen.next().value, 3);
print(gen.next().value, 2);
gc();
print(gen.next().value, 3);
gen = null;
gc();

function* g() {
    {
        let x = 1;
        while (true) {
            var inner = function (inc) { x += inc; return evalInFrame(0, "x") };
            print(inner(0), x);
            yield inner;
            print(inner(0), x);
        }
    }
}

var gen = g();
var g1 = gen.next().value;
var g2 = gen.next().value;
gc();
print(g1(1), 2);
print(g2(1), 3);
gc();
print(g1(1), 4);
print(g2(1), 5);
gen = g1 = g2 = null;
gc();
