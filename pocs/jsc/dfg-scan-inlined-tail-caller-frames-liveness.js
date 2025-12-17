for (let i = 0; i < testLoopCount; i++) {
    (function foo() { [0].concat().indexOf(0) })()
}
