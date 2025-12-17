print("..\\UnitTestFramework\\UnitTestFramework.js");

function f1_f(){};
var f2_v = 123;
function f3_f(){};
var f4_v = 123;

let f5_l = 123;
const f6_c = 123;

var ex = "0";


print("function f1_f(){};");


print("function f2_v(){};");


eval("function f3_f(){};");


eval("function f4_v(){};");


try { print("function f5_l(){};"); } catch (e) { ex = e.message }

print("Let/Const redeclaration", ex);
ex = "1";


try { print("function f6_c(){};"); } catch (e) { ex = e.message }

print("Let/Const redeclaration", ex);
ex = "2";


try { eval("function f5_l(){};") } catch (e) { ex = e.message}

print("Let/Const redeclaration", ex);
ex = "3";


try { eval("function f6_c(){};") } catch (e) { ex = e.message }

print("Let/Const redeclaration", ex);
ex = "4";

(function ff() {
    if (true) {
        let fo5_l = 123;

        if (true) {
            
            
            
            try { eval("function fo5_l(){};") } catch (e) { ex = e.message }

            print("4", ex);
            ex = "5";
        }
    }

    if (true) {
        
        try { eval("function fo6_c(){};") } catch (e) { ex = e.message }
    }

    print("Let/Const redeclaration", ex);
    ex = "6";

    const fo6_c = 123;
})();

(function ffs() {
    'use strict';

    let fos5_l = 123;

    
    eval("function fos5_l(){};");

    if (true) {
        
        eval("function fos6_c(){};");
    }

    const fos6_c = 123;
})();


(function ffl() {
    let fo5_l_sl = 123;

    
    try { eval("function fo5_l_sl(){};") } catch (e) { ex = e.message }

    print("Let/Const redeclaration", ex);
    ex = "7";

    
    try { eval("function fo6_c_sl(){};") } catch (e) { ex = e.message }

    print("Let/Const redeclaration", ex);
    ex = "8";

    const fo6_c_sl = 123;
})();

(function ffsl() {
    'use strict';

    let fos5_l = 123;

    
    print("function fos5_l_sl(){};");

    
    print("function fos6_c_sl(){};");

    const fos6_c_sl = 123;
})();

(function ffn() {
    let fo5_l_nf = 123;

    
    f = (new Function("return function fo5_l_nf(){};"))();

    
    f = (new Function("return function fo6_c_nf(){};"))();

    print("function fo6_c_nf(){}", f.toString());

    const fo6_c_nf = 123;
})();


class C1
{                
    static M()
    {
        eval("function f6_c(){};");
    }
}

C1.M();


class C2
{                
    get f7_l() {return "q";};

    static M()
    {
        eval("function f7_l(){};");
    }
}

C2.M();

print("mod0.js", `
    import 'mod1.js';
    let qwer = 12;
`);

print("mod1.js",`
    
    export function qwer(){};
`);

print("mod0.js", "module");

print("PASS");
