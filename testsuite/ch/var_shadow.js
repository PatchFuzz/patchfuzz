






function f2()
{
    [1].forEach(function (e) {
        try{
            throw "abc";
        } catch (e) {
            var x = e; 
            x;                  
        }
    })
}

f2();


function f3()
{
    var e = "outer";
    try {
        throw "throw 1"
    }
    catch(e) {
        var x = e;
        e;              
        
        function foo() {
            var k = 20 + e;
            k;
        }
        
        foo();
        
        try {
            throw "throw 2"
        }
        catch(e){
            var x2 = e;
            x2;                 
        }
        
    }
    
}

f3();



function f4() {
    var e = "outer";
    try {
        throw "throw 1"
    }
    catch(e) {
        var x = e;
        e;               
        e;
        function foo() {
            e;
            eval("");
        }
    }

    try {
        throw "throw 2"
    }
    catch(e) {
        var m = e;
        m;          
    }
}

f4();



function f5()
{
    var a1 = 10;
    let a2 = "a2";
    const a4 = "a4_const";
    let a5 = "a5_let";
    {
        let a1 = "level1";
        let a2 = 222;
        const a3 = "a3_const";
        let a4 = "a4_level1";
        a3;                                 
    }
    
    return 10;
}

f5()


function f6()
{
    var a1 = 10;
    let a2 = "level0";
    var a3 = "a3_level0";
    const a4 = "a4_const";
    
    {
        let a1 = "level1";
        let a2 = 222;
        a2;                                 
        a2;
        let a3 = "a3_level1";
        a3;                                 
        
        {
                let a1 = "level2";
                const a3 = "a3_2";
                let a2 = a1+a3;
                a2;                                 
                a2;
        }
    }
    
    return a2;
}

f6()


function f7() { 
    let a1 = 10;
    let b1 = 11;
    function f() { 
    
        {
            let a2 = 10;
            let b1 = 22;
            b1;             
        }
    }
    f();
    
    function bar()  {
        a1; b1;
    }
}
f7();

function f8() {
    let a1 = 10;
    let b1 = "level1";
    {                   
        let b1 = 22;
        b1;             
    }
    
    function bar()  {
        eval('');
    }
}
f8();



function f9() {
    let a1= "level1";
    try {
        throw "level2";
        
    } catch(e) {
        let a1= "level2";                              
        eval("var b1 = 'level3'");  
        
        try {
            throw "level3";
        } catch(e1) {
            a1 += "level3";
        }
    }              
};
f9("level1");

WScript.Echo("Pass");
