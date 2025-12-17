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

print('pass');
