




function foo(){
    return Array.isArray(1);
};

let failed = foo();
failed |= foo();
failed |= foo();
failed ? print("Fail") : print("Pass");
