function Run() {
    function verify() { }

    function level1Func() {
        let a = 'level1';      
        a += 'level1';      
        try {
            throw 'level2';
        } catch (e) {
            let a = 'level2';          
            a += 'level2';                 
        }

         
    }

    level1Func();
}

Run();
print("PASSED");