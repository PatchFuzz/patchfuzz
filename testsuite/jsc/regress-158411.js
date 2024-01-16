


try {
    function foo(){
        [].slice({});
        foo();
    }
    foo();
} catch (e) {
}