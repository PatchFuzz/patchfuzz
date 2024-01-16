

for (let i = 0; i < 100000; i++) {
    (function foo() { [0].concat().indexOf(0) })()
}
