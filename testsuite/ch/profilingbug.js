




try {
    function f(){}
    function foo(){
        f.call();
        foo.call(0x1)++;
    }
    foo();
} catch(e) {   }

print("Pass")
