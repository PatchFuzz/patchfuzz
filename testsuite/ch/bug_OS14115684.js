




function test(foo) {
    function nest() {
        {
            function foo() {
                console.log('pass');
            }
        }
        foo();
    }
    nest();
}
test(()=>console.log('fail'));
