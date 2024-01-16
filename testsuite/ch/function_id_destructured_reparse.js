




function test0() {
    ({
        p: o = ({
            bar() {
                (function () {})
            }
        },
        (this))
    } = 0)
}
test0()

console.log('pass');
