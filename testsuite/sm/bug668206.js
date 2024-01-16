


function f() {
    for (var i = 0; i < 2; ++i) {}
}
for (let a = 0; a < 40; a++) {
    f((new Array) ^ 0)
}
