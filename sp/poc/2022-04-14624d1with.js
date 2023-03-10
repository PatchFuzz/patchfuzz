

function f() {
    var expected = #[1, "monkeys", 3];
    print(#[1,2,3].with(1, "monkeys"), expected);
    print(Object(#[1,2,3]).with(1, "monkeys"), expected);
}

for (i = 0; i < 500; i++) {
    f();
}
