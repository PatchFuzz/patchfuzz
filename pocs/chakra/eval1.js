function write(x) { print(x) }


const z = 'global z';
let w = 'global w';

eval('let x = "global x"; const y = "global y"; write(z);');

try { write(x); } catch (e) { write(e); }
try { write(y); } catch (e) { write(e); }


try {
    eval('var z = "global var z";');
}
catch(e) {
    write(e);
}
try {
    eval('var w = "global var w";');
}
catch(e) {
    write(e);
}


try {
    const z = 'global block z';

    eval('let x = "global block x"; const y = "global block y"; write(z);');

    try { write(x); } catch (e) { write(e); }
    try { write(y); } catch (e) { write(e); }

    
    outer();

    function outer() {
        let w = 'outer w';

        
        try {
            eval('var w = "outer var w";');
        }
        catch(e) {
            write(e);
        }
        write(w);

        try {
            const z = 'outer z';

            eval('let x = "outer x"; const y = "outer y"; write(z);');

            try { write(x); } catch (e) { write(e); }
            try { write(y); } catch (e) { write(e); }

            
            eval('y = "outer var y";');
            write(y);

            
            inner();
            write(y);

            function inner() {
                let w = 'inner w';

                
                try {
                    eval('var w = "inner var w";');
                }
                catch(e) {
                    write(e);
                }
                write(w);

                try {
                    const z = 'inner z';

                    
                    eval('let x = "inner x"; const y = "inner y"; write(z);');

                    try { write(x); } catch (e) { write(e); }
                    write(y); 
                }
                catch(e) {
                    write(e);
                }

                function foo() {
                    let yy = "b";
                    const yx = "a";
                    yy += "a";
                    eval("print(yy);")
                    print(yy);
                }
                foo();
            }
        }
        catch(e) {
            write(e);
        }
    }
}
catch(e) {
    write(e);
}


{
    with ({})
        eval("");
    function f() { x; }
    let x;
}

this.eval('let x = 0; function f() { return x; }; print(f());');
