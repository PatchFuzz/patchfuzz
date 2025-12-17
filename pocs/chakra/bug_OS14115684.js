function test(foo) {
    function nest() {
        {
            function foo() {
                print('pass');
            }
        }
        foo();
    }
    nest();
}
test(()=>print('fail'));
