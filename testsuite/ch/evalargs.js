




function foo() {
    "use strict";

    
    
    
    
    
    
    
    

    
    eval[0]++;
    ++eval[0];
    eval.a++;
    ++eval.a;
    arguments[0]++;
    ++arguments[0];
    arguments.a++;
    ++arguments.a;

    eval[0] = 1;
    arguments[0] = 1;
    eval.a = 1;
    arguments.a = 1;
}

foo();
