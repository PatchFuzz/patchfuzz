











try {
    throw "level1";
} catch(e) {	
    eval(""); 	
    with({  }) {
        let a = "level2";
        const b = "level2";
        var c = function f() {  				
            a += "level3";
            
        };
        c();
        a;
        b;
    }
}

WScript.Echo("PASSED");