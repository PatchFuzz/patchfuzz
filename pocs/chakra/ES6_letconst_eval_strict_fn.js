function Run(){
    "use strict";
    let a = 1;
    eval('let a = 1; a++;');   
    print(a); 
}


print(Run);