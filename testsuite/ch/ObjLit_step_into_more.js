




var a1 = 10;

var globObj = {
    ga: a1,
    gb: foo() 
}


function foo() {
    return a1 * 5;
}

function bar() {
    a1 += 11;
    return a1;
}

function sub_expression_step_into_more() {
    a1; 
    var obj = { 
        a: a1,  
        b: a1++, 
        func : function(a, b) {
            return 5;
        },
        globObj,
        ev: eval('a1 + a1*2'),
        c:  {
                ca: a1 * 2, 
                cb: foo(),
                cc: a1,
                cd: bar(),
                c3: a1 * 3
            },
        d: foo()    
        };
    WScript.Echo(JSON.stringify(obj));
}

sub_expression_step_into_more();
