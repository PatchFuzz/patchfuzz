function test() {
    function nested() {
        eval(""); 
    }
    
    let l = 10;
    
    const c = 20;
    
}
test.apply({});
print("PASSED");
