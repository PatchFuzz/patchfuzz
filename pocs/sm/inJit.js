function callInJit() {
    return inJit();
};

function test() {
    
    while(!inJit());

    
    while(!callInJit());

    
    while(!inJit()) gc();
};

test();

