var a1 = 10;

function foo() {
    return a1 * 5;
}

function sub_expression_step_over() {
    a1; 
    var obj = { 
        a: a1,  
        b: a1 + 20, 
        c:  {
                ca: a1 * 2, 
                cb: foo(),
                cc: a1
            }
        };
    print(JSON.stringify(obj)); 
}

sub_expression_step_over();
